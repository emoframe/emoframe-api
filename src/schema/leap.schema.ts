import {z} from 'zod'
import { answerSchema } from './shared.schema'


export const createLeapSchema = z.object({
  body: z.object({
    applicationId: z.string({error: "applicationId é obrigatório"}).min(1),
    evaluationId: z.string({error: "evaluationId é obrigatório"}).min(1),
    externalUserId: z.string({error: "externalUserId é obrigatório"}).min(1),

    answers: z.object({
      admiration: answerSchema,
      relieved: answerSchema,
      tired: answerSchema,
      happy: answerSchema,
      accept: answerSchema,
      heat: answerSchema,
      satisfied: answerSchema,
      jealous: answerSchema,
      attracted: answerSchema,
      calm: answerSchema,
      funny: answerSchema,
      desire: answerSchema,
      careful: answerSchema,
      strange: answerSchema,
      hopeful: answerSchema,
      fallInLove: answerSchema,
      conformed: answerSchema,
      hungry: answerSchema,
      guilty: answerSchema,
      cold: answerSchema,
      despise: answerSchema,
      fakePittyOn: answerSchema,
      disgusting: answerSchema,
      need: answerSchema,
      duty: answerSchema,
      envy: answerSchema,
      humiliated: answerSchema,
      interested: answerSchema,
      fear: answerSchema,
      proud: answerSchema,
      shame: answerSchema,
      angry: answerSchema,
      sleepy: answerSchema,
      longing: answerSchema,
      sad: answerSchema,
      surprised: answerSchema,
      thirst: answerSchema,
      thoughtful: answerSchema,
      serious: answerSchema,
      scared: answerSchema
    }, { error: "O objeto 'answers' com as 40 variáveis é obrigatório." })
  })
})