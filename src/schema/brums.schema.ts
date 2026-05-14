import { z } from 'zod';
import { answerSchema } from './shared.schema';

export const createBrumsSubmissionSchema = z.object({
  body: z.object({
    applicationId: z.string({ error: "applicationId é obrigatório" }).min(1),
    evaluationId: z.string({ error: "evaluationId é obrigatório" }).min(1),
    externalUserId: z.string({ error: "externalUserId é obrigatório" }).min(1),

    answers: z.object({
      cheered_up: answerSchema,
      irritated: answerSchema,
      depressed: answerSchema,
      terrified: answerSchema,
      crestfallen: answerSchema,
      broken_down: answerSchema,
      confused: answerSchema,
      exhausted: answerSchema,
      anxious: answerSchema,
      unhappy: answerSchema,
      huffy: answerSchema,
      worried: answerSchema,
      sad: answerSchema,
      sleepy: answerSchema,
      insecure: answerSchema,
      willing: answerSchema,
      tense: answerSchema,
      disoriented: answerSchema,
      grumpy: answerSchema,
      undecided: answerSchema,
      tired: answerSchema,
      energy: answerSchema,
      angry: answerSchema,
      alert: answerSchema,
    }, { error: "O objeto answers tem que ter 24 respostas!" })
  })
})
