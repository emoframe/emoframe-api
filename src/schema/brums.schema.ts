import { z } from 'zod';

const brumsAnswerSchema = z.coerce.number({ error: "A resposta deve ser um número válido" })
  .min(1, "A resposta mínima é 1")
  .max(5, "A resposta máxima é 5");

export const createBrumsSubmissionSchema = z.object({
  body: z.object({
    applicationId: z.string({ error: "applicationId é obrigatório" }).min(1),
    evaluationId: z.string({ error: "evaluationId é obrigatório" }).min(1),
    externalUserId: z.string({ error: "externalUserId é obrigatório" }).min(1),

    answers: z.object({
      cheered_up: brumsAnswerSchema,
      irritated: brumsAnswerSchema,
      depressed: brumsAnswerSchema,
      terrified: brumsAnswerSchema,
      crestfallen: brumsAnswerSchema,
      broken_down: brumsAnswerSchema,
      confused: brumsAnswerSchema,
      exhausted: brumsAnswerSchema,
      anxious: brumsAnswerSchema,
      unhappy: brumsAnswerSchema,
      huffy: brumsAnswerSchema,
      worried: brumsAnswerSchema,
      sad: brumsAnswerSchema,
      sleepy: brumsAnswerSchema,
      insecure: brumsAnswerSchema,
      willing: brumsAnswerSchema,
      tense: brumsAnswerSchema,
      disoriented: brumsAnswerSchema,
      grumpy: brumsAnswerSchema,
      undecided: brumsAnswerSchema,
      tired: brumsAnswerSchema,
      energy: brumsAnswerSchema,
      angry: brumsAnswerSchema,
      alert: brumsAnswerSchema,
    }, { error: "O objeto answers tem que ter 24 respostas!" })
  })
})
