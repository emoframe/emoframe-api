export interface LeapPayload {
  admiration: number; relieved: number; tired: number; happy: number;
  accept: number; heat: number; satisfied: number; jealous: number;
  attracted: number; calm: number; funny: number; desire: number;
  careful: number; strange: number; hopeful: number; fallInLove: number;
  conformed: number; hungry: number; guilty: number; cold: number;
  despise: number; takePityOn: number; disgusting: number; need: number;
  duty: number; envy: number; humiliated: number; interested: number;
  fear: number; proud: number; shame: number; angry: number;
  sleepy: number; longing: number; sad: number; surprised: number;
  thirst: number; thoughtful: number; serious: number; scared: number;
}


export const leapQuestions = [
  { index: 1, field: 'fear', factor: 'Fator 1', question: "Estou com medo." },
  { index: 2, field: 'scared', factor: 'Fator 1', question: "Estou assustado(a)." },
  { index: 3, field: 'shame', factor: 'Fator 1', question: "Estou com vergonha." },
  { index: 4, field: 'serious', factor: 'Fator 1', question: "Estou sem graça." },
  { index: 5, field: 'guilty', factor: 'Fator 1', question: "Sinto-me culpado(a)." },
  { index: 6, field: 'sad', factor: 'Fator 1', question: "Sinto-me triste." },
  { index: 7, field: 'humiliated', factor: 'Fator 1', question: "Sinto-me humilhado(a)." },
  { index: 8, field: 'take_pity_on', factor: 'Fator 1', question: "Tenho pena de alguém." },
  { index: 9, field: 'surprised', factor: 'Fator 2', question: "Sinto-me surpreso(a)." },
  { index: 10, field: 'happy', factor: 'Fator 2', question: "Estou alegre." },
  { index: 11, field: 'proud', factor: 'Fator 2', question: "Sinto-me orgulhoso(a)." },
  { index: 12, field: 'relieved', factor: 'Fator 2', question: "Estou aliviado(a)." },
  { index: 13, field: 'hopeful', factor: 'Fator 2', question: "Estou com esperança." },
  { index: 14, field: 'interested', factor: 'Fator 2', question: "Sinto-me interessado(a)." },
  { index: 15, field: 'calm', factor: 'Fator 2', question: "Sinto-me calmo(a)." },
  { index: 16, field: 'funny', factor: 'Fator 2', question: "Acho algo engraçado." },
  { index: 17, field: 'admiration', factor: 'Fator 2', question: "Sinto uma admiração por alguém." },
  { index: 18, field: 'longing', factor: 'Fator 2', question: "Sinto saudade de alguém." },
  { index: 19, field: 'despise', factor: 'Fator 3', question: "Faço pouco caso de alguém." },
  { index: 20, field: 'angry', factor: 'Fator 3', question: "Sinto raiva." },
  { index: 21, field: 'disgusting', factor: 'Fator 3', question: "Estou com nojo." },
  { index: 22, field: 'envy', factor: 'Fator 3', question: "Sinto inveja de alguém." },
  { index: 23, field: 'attracted', factor: 'Fator 4', question: "Sinto atração sexual por alguém." },
  { index: 24, field: 'fall_in_love', factor: 'Fator 4', question: "Estou gostando de alguém." },
  { index: 25, field: 'jealous', factor: 'Fator 4', question: "Sinto ciúme de alguém." },
  { index: 26, field: 'need', factor: 'Fator 5', question: "Sinto uma necessidade." },
  { index: 27, field: 'thoughtful', factor: 'Fator 5', question: "Estou refletindo." },
  { index: 28, field: 'desire', factor: 'Fator 5', question: "Sinto um desejo." },
  { index: 29, field: 'duty', factor: 'Fator 5', question: "Sinto uma obrigação." },
  { index: 30, field: 'sleepy', factor: 'Fator 6', question: "Estou com sono." },
  { index: 31, field: 'hungry', factor: 'Fator 6', question: "Estou com fome." },
  { index: 32, field: 'thirst', factor: 'Fator 6', question: "Estou com sede." },
  { index: 33, field: 'tired', factor: 'Fator 6', question: "Estou cansado(a)." },
  { index: 34, field: 'careful', factor: 'Fator 7', question: "Estou tomando cuidado." },
  { index: 35, field: 'strange', factor: 'Fator 7', question: "Acho algo estranho." },
  { index: 36, field: 'cold', factor: 'Fator 8', question: "Estou com frio." },
  { index: 37, field: 'heat', factor: 'Fator 8', question: "Estou com calor." },
  { index: 38, field: 'conformed', factor: 'Fator 9', question: "Estou conformado(a)." },
  { index: 39, field: 'accept', factor: 'Fator 9', question: "Estou aceitando alguma coisa." },
  { index: 40, field: 'satisfied', factor: 'Fator 9', question: "Estou cheio(a)." }
];


export class LeapService {
  public static calculateScores(answers: LeapPayload): Array<{ name: string, value: number }> {
    const uniqueFactors = [...new Set(leapQuestions.map(factor => factor.factor))];

    const factorValues = uniqueFactors.map(factorName => {
      const factorQuestions = leapQuestions.filter(q => q.factor === factorName);
      const sum = factorQuestions.reduce((acc, question) => {
        const response = answers[question.field as keyof LeapPayload];
        return acc + response
      }, 0);
      const normalized = (sum / factorQuestions.length) / 5;

      return {
        name: factorName,
        value: normalized
      }
    });

    return factorValues
  }
}