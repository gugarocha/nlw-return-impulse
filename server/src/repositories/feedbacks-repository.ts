export interface FeedbackCreateData {
  type: string;
  comment: string;
  screenshot?: string;
};

export interface FeedbacksRepositrory {
  create: (data: FeedbackCreateData) => Promise<void>;
};