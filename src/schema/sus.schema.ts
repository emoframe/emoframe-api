import {z} from 'zod'
import { answerSchema } from './shared.schema'



export const createSusSubmissionSchema = z.object({
  body: z.object({
    applicationId: z.string({error: "applicationId é obrigatório"}).min(1),
    evaluationId: z.string({error: "evaluationId é obrigatório"}).min(1),
    externalUserId: z.string({error: "externalUserId é obrigatório"}).min(1),

    answers: z.object({
      use_frequency: answerSchema,
      use_complex: answerSchema,
      use_easy: answerSchema,
      need_help: answerSchema,
      function_integration: answerSchema,
      inconsistency: answerSchema,
      learning_curve: answerSchema,
      jumbled: answerSchema,
      confidence: answerSchema,
      learn_system: answerSchema,
    }, {error: "O objeto answers tem que ter 10 respostas!"})

  })
})