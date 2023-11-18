import ArLocal from "arlocal";
import fs from "fs";
import path from "path";
import { Contract, Warp, WarpFactory } from "warp-contracts";
import { DeployPlugin } from "warp-contracts-plugin-deploy";
// import wallet from "../arwallet.json";
import { initialState as originInitialState } from "../oracle";
import { IState } from "../types";

async function main() {
  let initialState = {
    ...originInitialState,
  };

  let warp: Warp;
  let oracle: Contract<IState>;

  let arlocal: ArLocal;
  let wallet;
  let owner;

  let contractId: string;
  let contractSrc: string;

  // beforeAll(async () => {
  //   warp = WarpFactory.forMainnet();

  //   oracle = warp.contract<IState>(contractId).connect(wallet);
  // });

  arlocal = new ArLocal(1820, false);
  await arlocal.start();

  warp = WarpFactory.forLocal(1820).use(new DeployPlugin());

  // warp = WarpFactory.forLocal().use(new DeployPlugin());

  contractSrc = fs.readFileSync(
    path.join(__dirname, "../dist/oracle.js"),
    "utf8"
  );

  ({ jwk: wallet, address: owner } = await warp.generateWallet());

  ({ contractTxId: contractId } = await warp.deploy({
    wallet,
    initState: JSON.stringify(initialState),
    src: contractSrc,
  }));
  console.log("Deployed contract: ", contractId);
  oracle = warp.contract<IState>(contractId).connect(wallet);

  // it("should properly deploy contract", async () => {
  const contractTx = await warp.arweave.transactions.getData(contractId);

  console.log("contractData", contractTx);

  //   expect(contractTx).not.toBeNull();
  // });

  // it("should read state", async () => {
  //   expect((await oracle.readState()).cachedValue.state).toEqual(initialState);
  // });

  // it("should send sentiment", async () => {
  //   await oracle.writeInteraction({
  //     function: "writeSentiment",
  //     content: "{test}",
  //   });

  //   const { cachedValue } = await oracle.readState();
  //   // expect(cachedValue.state.messages[0]).toEqual({
  //   //   id: 1,
  //   //   creator: owner,
  //   //   content: "Hello world!",
  //   //   votes: { addresses: [], status: 0 },
  //   // });
  // });

  // it("should properly view message", async () => {
  //   const { result } = await oracle.viewState({
  //     function: "readMessage",
  //     id: 1,
  //   });

  //   // expect(result).toEqual({
  //   //   id: 1,
  //   //   creator: owner,
  //   //   content: "Hello world!",
  //   //   votes: { addresses: [user2, user3], status: 0 },
  //   // });
  // });
}

main();
