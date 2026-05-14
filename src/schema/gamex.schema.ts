import { z } from 'zod';

const gamexAnswerSchema = z.coerce.number({ error: "A resposta deve ser um número válido" })
  .min(1, "A resposta mínima é 0")
  .max(7, "A resposta máxima é 7");

export const createGamexSubmissionSchema = z.object({
  body: z.object({
    applicationId: z.string({ error: "applicationId é obrigatório" }).min(1),
    evaluationId: z.string({ error: "evaluationId é obrigatório" }).min(1),
    externalUserId: z.string({ error: "externalUserId é obrigatório" }).min(1),

    answers: z.object({
      // 1. Diversão (Enjoyment)
      game_was_fun: gamexAnswerSchema,
      enjoyed_playing: gamexAnswerSchema,
      enjoyed_a_lot: gamexAnswerSchema,
      pleasurable_experience: gamexAnswerSchema,
      highly_engaging: gamexAnswerSchema,
      play_voluntarily: gamexAnswerSchema,

      // 2. Imersão (Immersion)
      forgot_location: gamexAnswerSchema,       
      forgot_surroundings: gamexAnswerSchema,
      back_to_reality: gamexAnswerSchema,
      disconnect_from_everything: gamexAnswerSchema,
      ignored_surroundings: gamexAnswerSchema,
      lost_track_of_time: gamexAnswerSchema,

      // 3. Pensamento Criativo (Creative Thinking)
      stimulated_imagination: gamexAnswerSchema,
      felt_creative: gamexAnswerSchema,
      sense_of_exploration: gamexAnswerSchema,
      felt_adventurous: gamexAnswerSchema,

      // 4. Ativação (Activation)
      felt_active: gamexAnswerSchema,
      felt_restless: gamexAnswerSchema,
      felt_frantic: gamexAnswerSchema,
      felt_excited: gamexAnswerSchema,

      // 5. Ausência de Afeto Negativo (Negative Affect)
      felt_upset: gamexAnswerSchema,
      felt_nervous: gamexAnswerSchema,
      felt_frustrated: gamexAnswerSchema,

      // 6. Dominância (Dominance)
      felt_in_command: gamexAnswerSchema,
      felt_influential: gamexAnswerSchema,
      felt_independent: gamexAnswerSchema,
      felt_confident: gamexAnswerSchema,

      // 7. Pergunta de Checagem (Isca)
      attention_check: gamexAnswerSchema,
    }, { error: "O objeto answers com as respostas é obrigatório!" })
  })
})

export type GamexPayload = z.infer<typeof createGamexSubmissionSchema>['body']['answers'];