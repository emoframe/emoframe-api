import { z } from 'zod';

const eazAnswerSchema = z.coerce.number({ error: "A resposta deve ser um número válido" })
  .min(1, "A resposta mínima é 1")
  .max(4, "A resposta máxima é 4");

export const createEazSubmissionSchema = z.object({
  body: z.object({
    applicationId: z.string({ error: "applicationId é obrigatório" }).min(1),
    evaluationId: z.string({ error: "evaluationId é obrigatório" }).min(1),
    externalUserId: z.string({ error: "externalUserId é obrigatório" }).min(1),

    answers: z.object({
      happy: eazAnswerSchema,
      tired: eazAnswerSchema,
      worried: eazAnswerSchema,
      confident: eazAnswerSchema,
      courageous: eazAnswerSchema,
      nervous: eazAnswerSchema,
      determined: eazAnswerSchema,
      guilty: eazAnswerSchema,
      passionate: eazAnswerSchema,
      angry: eazAnswerSchema,
      brave: eazAnswerSchema,
      open_new_things: eazAnswerSchema,
      happy_person: eazAnswerSchema,
      easy_to_anger: eazAnswerSchema,
      proud_about_myself: eazAnswerSchema,
      humiliated: eazAnswerSchema,
      sad: eazAnswerSchema,
      grumpy: eazAnswerSchema,
      rage: eazAnswerSchema,
      resilient: eazAnswerSchema,
    }, { error: "O objeto answers tem que ter 20 respostas!" })
  })
})
