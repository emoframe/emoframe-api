import {z} from 'zod'
import { answerSchema } from './shared.schema'


export const createPxSubmissionSchema = z.object({
  body: z.object({
    applicationId: z.string({error: "applicationId é obrigatório"}).min(1),
    evaluationId: z.string({error: "evaluationId é obrigatório"}).min(1),
    externalUserId: z.string({error: "externalUserId é obrigatório"}).min(1),

    answers: z.object({
      immersion: answerSchema,
      fun: answerSchema,
      gameplay: answerSchema,
    }, {error: "O objeto answers tem que ter 3 respostas!"})

  })
})