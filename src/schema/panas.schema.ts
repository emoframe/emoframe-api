import {z} from 'zod'
import { answerSchema } from './shared.schema'



export const createPanasSchema = z.object({
  body: z.object({
    applicationId: z.string({error: "applicationId é obrigatório"}).min(1),
    evaluationId: z.string({error: "evaluationId é obrigatório"}).min(1),
    externalUserId: z.string({error: "externalUserId é obrigatório"}).min(1),

    answers: z.object({
      interested: answerSchema,
      distressed: answerSchema,
      excited: answerSchema,
      upset: answerSchema,
      strong: answerSchema,
      guilty: answerSchema,
      scared: answerSchema,
      hostile: answerSchema,
      enthusiastic: answerSchema,
      proud: answerSchema,
      irritable: answerSchema,
      alert: answerSchema,
      ashamed: answerSchema,
      inspired: answerSchema,
      nervous: answerSchema,
      determined: answerSchema,
      attentive: answerSchema,
      jittery: answerSchema,
      active: answerSchema,
      afraid: answerSchema,
    }, { error: "O objeto 'answers' com as 20 emoções é obrigatório." })
  })
})