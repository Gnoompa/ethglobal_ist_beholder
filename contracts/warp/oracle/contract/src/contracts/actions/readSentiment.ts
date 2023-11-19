import { SmartWeaveGlobal } from "warp-contracts";
import { IState } from "../../../types";

export const readSentiment = async (
  state: IState,
  {
    input: {
      entityID,
      sentimentCountThreshold,
      sentimentCumulativeWeightThreshold,
    },
  }
) => {
  // @ts-ignore
  let GlobalSmartWeave = SmartWeave as SmartWeaveGlobal;

  const sentimentScore = undefined;

  return {
    result:
      state.sentiments[
        Array.from(
          await GlobalSmartWeave.arweave.crypto.hash(
            GlobalSmartWeave.arweave.utils.stringToBuffer(entityID)
          )
        )
          .map((item) => item.toString(16).padStart(2, "0"))
          .join("")
      ],
  };
};
