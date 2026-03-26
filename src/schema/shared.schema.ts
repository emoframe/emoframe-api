import {z} from 'zod'

export const answerSchema = z.coerce.number({error:"A resposta deve ser um número valido"})
.min(1, "A resposta mínima é 1")
.max(5, "A resposta máxima é 5")