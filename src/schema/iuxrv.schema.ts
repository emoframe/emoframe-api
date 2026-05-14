import { z } from "zod";

const iuxrvSchema = z.coerce.number({error:"A resposta deve ser um número valido"})
.min(1, "A resposta mínima é 1")
.max(7, "A resposta máxima é 7")


export const createIuxrvSchema = z.object({
  body: z.object({
    applicationId: z.string({error: "applicationId é obrigatório"}).min(1),
    evaluationId: z.string({error: "evaluationId é obrigatório"}).min(1),
    externalUserId: z.string({error: "externalUserId é obrigatório"}).min(1),

    answers: z.object({
      // 1. VR Sickness (Todas são variáveis negativas)
      feeling_nauseous: iuxrvSchema,
      feeling_dizzy: iuxrvSchema, 
      general_discomfort: iuxrvSchema, 
      tired_eyes: iuxrvSchema,
      headache: iuxrvSchema,

      // 2. Usabilidade
      easy_to_do_things: iuxrvSchema,
      did_things_confidently: iuxrvSchema,
      few_steps_required: iuxrvSchema, 
      felt_in_control: iuxrvSchema, 
      learned_quickly: iuxrvSchema,

      // 3. Estética
      elegant_world: iuxrvSchema,
      fascinating_world: iuxrvSchema,
      beautiful_world: iuxrvSchema,
      fun_world: iuxrvSchema, 
      exciting_world: iuxrvSchema,

      // 4. Presença
      forgot_it_was_virtual: iuxrvSchema,
      forgot_vr_equipment: iuxrvSchema,
      believed_things_were_real: iuxrvSchema,
      forgot_real_world: iuxrvSchema,
      felt_it_could_be_real: iuxrvSchema,

      // 5. Emoções
      felt_good: iuxrvSchema,
      felt_content: iuxrvSchema,  
      felt_irritated: iuxrvSchema, 
      felt_frustrated: iuxrvSchema,
      felt_happy: iuxrvSchema,
    }, { error: "O objeto answers com as 25 respostas é obrigatório!" })
  })
})

export type IuxrvPayload = z.infer<typeof createIuxrvSchema>['body']['answers'];