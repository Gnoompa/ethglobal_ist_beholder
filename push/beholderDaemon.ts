/* eslint-disable */

import { PushAPI } from "@pushprotocol/restapi";
import { ENV } from "@pushprotocol/restapi/src/lib/constants";
import { ethers } from "ethers";
import { LoggerFactory, WarpFactory } from "warp-contracts";
import {
    InteractionMessage,
    WarpSubscriptionPlugin,
} from "warp-contracts-subscription-plugin";

const SUBSCRIPTION_TAGS = ["lens", "lenster", "hey"];
const NOTIFICATION_RECEIVER_ADDRESS =
  "0x99A08ac6254dcf7ccc37CeC662aeba8eFA666666";

LoggerFactory.INST.logLevel("none");
LoggerFactory.INST.logLevel("info", "subscription-example");
LoggerFactory.INST.logLevel("debug", "WarpSubscriptionPlugin");
const logger = LoggerFactory.INST.create("subscription-example");

// Using random signer from a wallet, ideally this is the wallet you will connect
const signer = ethers.Wallet.createRandom();
const notificationSender = await PushAPI.initialize(signer, {
  env: ENV.STAGING,
});

class CustomSubscriptionPlugin extends WarpSubscriptionPlugin<void> {
  async process(input: InteractionMessage): Promise<void> {
    logger.info("From custom plugin", input);

    input.interaction.data.metadata?.tags?.length &&
      SUBSCRIPTION_TAGS.filter((tag) =>
        input.interaction.data.metadata?.tags?.includes(tag)
      ).length &&
      notificationSender.chat.send(NOTIFICATION_RECEIVER_ADDRESS, {
        content: JSON.stringify(input),
        type: "Text",
      });
  }
}

async function main() {
  const contractTxId = "pn35zq0NUEJU9gss-9XEv0Z5LL8vkpMtzlpy61rpD3Q";
  const warp = WarpFactory.forTestnet();
  //   warp.use(new StateUpdatePlugin(contractTxId, warp));
  warp.use(new CustomSubscriptionPlugin(contractTxId, warp));
  const wallet = await warp.generateWallet();

  const contract = warp.contract(contractTxId).connect(wallet.jwk);

  await contract.writeInteraction(
    {
      function: "vrf",
    },
    { vrf: true }
  );
}

main().catch((e) => console.error(e));
