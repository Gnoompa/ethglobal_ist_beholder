import { SmartWeaveGlobal } from "warp-contracts";
import { IState } from "../../../types";

export const readSentiment = async (
  state: IState,
  {
    input: {
      data: {
        entityID,
        sentimentCountThreshold,
        sentimentCumulativeWeightThreshold,
      },
    },
  }
) => {
  // @ts-ignore
  let GlobalSmartWeave = SmartWeave as SmartWeaveGlobal;

  const sentimentScore = undefined;

  const entityIDHash = Array.from(
    await GlobalSmartWeave.arweave.crypto.hash(
      GlobalSmartWeave.arweave.utils.stringToBuffer(entityID)
    )
  )
    .map((item) => item.toString(16).padStart(2, "0"))
    .join("");

  return {
    result: state.sentiments[entityIDHash] || 0,
  };
};
