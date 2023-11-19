import { readSentiment } from "./src/contracts/actions/readSentiment";
import { writeSentiment } from "./src/contracts/actions/writeSentiment";

export const initialState = {
  sentimentSettings: {
    maxScore: 10,
    legitimacyProofWeight: {
      ens: 5,
      lens: 5,
      worldid: 10,
    },
  },
  sentiments: {},
  sentimentBySender: {},
  sentimentSMTRoot: "",
  owner: "8i0miTXVduV2f0PLAtF29M-_0qnq0Qhg_iTqy2UlUKk",
  canEvolve: true,
};

export function handle(state, action) {
  const input = action.input;

  switch (input.function) {
    case "writeSentiment":
      return writeSentiment(state, action);
    case "readSentiment":
      return readSentiment(state, action);
    default:
      throw new Error(
        `No function supplied or function not recognised: "${input.function}"`
      );
  }
}
