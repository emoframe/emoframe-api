import { z } from 'zod';

const gdsAnswerSchema = z.coerce.number({ error: "A resposta deve ser um número válido" })
  .min(0, "A resposta mínima é 0")
  .max(1, "A resposta máxima é 1");

export const createGdsSubmissionSchema = z.object({
  body: z.object({
    applicationId: z.string({ error: "applicationId é obrigatório" }).min(1),
    evaluationId: z.string({ error: "evaluationId é obrigatório" }).min(1),
    externalUserId: z.string({ error: "externalUserId é obrigatório" }).min(1),

    answers: z.object({
      satisfied: gdsAnswerSchema,
      no_activities: gdsAnswerSchema,
      empty: gdsAnswerSchema,
      upset: gdsAnswerSchema,
      good: gdsAnswerSchema,
      bad: gdsAnswerSchema,
      happy: gdsAnswerSchema,
      helpless: gdsAnswerSchema,
      stay_at_home: gdsAnswerSchema,
      problems_of_memory: gdsAnswerSchema,
      wonderful_to_stay_alive: gdsAnswerSchema,
      useless: gdsAnswerSchema,
      full_of_energy: gdsAnswerSchema,
      hopeless: gdsAnswerSchema,
      unlucky: gdsAnswerSchema,
    }, { error: "O objeto answers tem que ter 15 respostas!" })
  })
})
