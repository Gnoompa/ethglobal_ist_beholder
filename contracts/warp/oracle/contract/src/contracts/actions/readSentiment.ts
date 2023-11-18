import { IState } from "../../../types";

export const readSentiment = (
  state: IState,
  {
    input: {
      entityID,
      sentimentCountThreshold,
      sentimentCumulativeWeightThreshold,
    },
  }
) => {
  const sentimentScore = undefined;

  return { result: sentimentScore };
};
