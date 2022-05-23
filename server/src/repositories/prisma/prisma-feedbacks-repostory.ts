import { prisma } from "../../prisma";
import { FeedbackCreateData, FeedbacksRepositrory } from "../feedbacks-repository";

export class PrismaFeedbacksRepository implements FeedbacksRepositrory {
  async create({type, comment, screenshot}: FeedbackCreateData) {
    await prisma.feedback.create({
      data: {
        type,
        comment,
        screenshot
      }
    });
  };
};