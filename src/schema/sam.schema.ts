import { z } from "zod";

const answerSchema = z.coerce.number({error:"A resposta deve ser um número valido"})
.min(1, "A resposta mínima é 1")
.max(9, "A resposta máxima é 9")


export const createSamSchema = z.object({
  body: z.object({
    applicationId: z.string({error: "applicationId é obrigatório"}).min(1),
    evaluationId: z.string({error: "evaluationId é obrigatório"}).min(1),
    externalUserId: z.string({error: "externalUserId é obrigatório"}).min(1),

    answers: z.object({
      satisfaction: answerSchema,
      motivation: answerSchema,
      willpower: answerSchema,
    }, { error: "O objeto 'answers' com as 3 emoções é obrigatório." })
  })
})