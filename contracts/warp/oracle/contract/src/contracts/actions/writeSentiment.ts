import { SmartWeaveGlobal } from "warp-contracts";
import { IState, IWriteSentimentInput } from "../../../types";

// Sentiments are to be inserted into Sparse Merkle Tree for fast non-inclusion checks and onchain use (if not in the tree - entity has no sentiments yet)
/**
 SMT {
    key = H(entityId, sentimentCounter, cumulativeSentimentWeight)
    value = int4(sentimentScore) + MR(sentimentSenderAddress)
}
 */
export const writeSentiment = async (state: IState, { caller, input }) => {
  // @ts-ignore
  let GlobalSmartWeave = SmartWeave as SmartWeaveGlobal;
  let inputSentiment: IWriteSentimentInput;

  try {
    inputSentiment = JSON.parse(input.content);

    if (
      !inputSentiment.entityID ||
      inputSentiment.legitimacyProofs.length == 0 ||
      inputSentiment.score === undefined
    ) {
      throw new Error("invalid input");
    }
  } catch (e) {
    throw new Error(`Invalid sentiment data: ${e}`);
  }

  // todo proof verification (ikr)
  const sentimentWeight = inputSentiment.legitimacyProofs
    .map((proof) => state.sentimentSettings.legitimacyProofWeight[proof.vendor])
    .reduce((a, b) => a + b, 0);

  const existingSentiment = state.sentiments[inputSentiment.entityID];

  state.sentiments[
    Array.from(
      await GlobalSmartWeave.arweave.crypto.hash(
        GlobalSmartWeave.arweave.utils.stringToBuffer(inputSentiment.entityID)
      )
    )
      .map((item) => item.toString(16).padStart(2, "0"))
      .join("")
  ] = {
    counter: ((existingSentiment && existingSentiment.counter) || 0) + 1,
    weight:
      ((existingSentiment && existingSentiment.weight) || 0) + sentimentWeight,
  };

  return { state };
};
