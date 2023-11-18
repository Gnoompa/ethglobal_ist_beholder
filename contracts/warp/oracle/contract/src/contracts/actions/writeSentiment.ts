import { IState, IWriteSentimentInput } from "../../../types";

export const writeSentiment = (
  state: IState,
  { caller, input }: { caller: any; input: IWriteSentimentInput }
) => {
  const sentiments = state.sentiments;

  if (
    [input.entityID, input.score].filter(Boolean).map(Boolean).includes(false)
  ) {
    throw new Error(`Invalid sentiment data`);
  }

  const sentimentWeight = 10;

  state.sentiments[input.entityID] = {
    counter: (state.sentiments[input.entityID].counter || 0) + 1,
    weight: (state.sentiments[input.entityID].weight || 0) + sentimentWeight,
  };

  return { state };
};
