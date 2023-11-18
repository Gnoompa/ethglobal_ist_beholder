export interface IState {
  sentimentSettings: {
    maxScore: number;
    legitimacyProofWeight: {
      [legitimacyEntity: string]: number;
    };
  };
  sentiments: {
    [entityId: string]: {
      counter: number;
      weight: number;
    };
  };
  sentimentBySender: {
    [senderId: string]: {
      [entityId: string]: {
        counter: number;
        weight: number;
      };
    };
  };
  sentimentSMTRoot: string;
  owner: string;
  canEvolve: boolean;
}

export type ISentimentMetadata = {
  tags: string[];
};

export interface IWriteSentimentInput {
  entityID: string;
  score: number;
  metadata?: ISentimentMetadata;
  timestamp: number;
  legitimacyProofs: {
    type: "merkle" | "zk";
    chainId?: number;
    blockNumber?: number;
    proof: string;
  }[];
}
