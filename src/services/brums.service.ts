export interface BrumsPayload {
  cheered_up: number;
  irritated: number;
  depressed: number;
  terrified: number;
  crestfallen: number;
  broken_down: number;
  confused: number;
  exhausted: number;
  anxious: number;
  unhappy: number;
  huffy: number;
  worried: number;
  sad: number;
  sleepy: number;
  insecure: number;
  willing: number;
  tense: number;
  disoriented: number;
  grumpy: number;
  undecided: number;
  tired: number;
  energy: number;
  angry: number;
  alert: number;
}

type BrumsQuestionDef = { field: keyof BrumsPayload; factor: string };

const BRUMS_MAPPING: BrumsQuestionDef[] = [
  // Tension: terrified, anxious, worried, tense
  { field: 'terrified', factor: 'Tension' },
  { field: 'anxious', factor: 'Tension' },
  { field: 'worried', factor: 'Tension' },
  { field: 'tense', factor: 'Tension' },

  // Depression: depressed, crestfallen, unhappy, sad
  { field: 'depressed', factor: 'Depression' },
  { field: 'crestfallen', factor: 'Depression' },
  { field: 'unhappy', factor: 'Depression' },
  { field: 'sad', factor: 'Depression' },

  // Anger: irritated, huffy, grumpy, angry
  { field: 'irritated', factor: 'Anger' },
  { field: 'huffy', factor: 'Anger' },
  { field: 'grumpy', factor: 'Anger' },
  { field: 'angry', factor: 'Anger' },

  // Vigor: cheered_up, willing, energy, alert
  { field: 'cheered_up', factor: 'Vigor' },
  { field: 'willing', factor: 'Vigor' },
  { field: 'energy', factor: 'Vigor' },
  { field: 'alert', factor: 'Vigor' },

  // Fatigue: broken_down, exhausted, sleepy, tired
  { field: 'broken_down', factor: 'Fatigue' },
  { field: 'exhausted', factor: 'Fatigue' },
  { field: 'sleepy', factor: 'Fatigue' },
  { field: 'tired', factor: 'Fatigue' },

  // Confusion: confused, insecure, disoriented, undecided
  { field: 'confused', factor: 'Confusion' },
  { field: 'insecure', factor: 'Confusion' },
  { field: 'disoriented', factor: 'Confusion' },
  { field: 'undecided', factor: 'Confusion' },
];

export class BrumsService {
  /**
   * Calcula os 6 fatores do BRUMS.
   * Retorna um array de objetos para ser salvo como JSONB no banco.
   */
  public static calculateScores(answers: BrumsPayload): Array<{ factor: string; score: number }> {
    const uniqueFactors = [...new Set(BRUMS_MAPPING.map(q => q.factor))];

    const result = uniqueFactors.map(factorName => {
      const questionsOfFactor = BRUMS_MAPPING.filter(q => q.factor === factorName);
      
      const scoreSum = questionsOfFactor.reduce((acc, currentQuestion) => {
        return acc + answers[currentQuestion.field];
      }, 0);

      return {
        factor: factorName,
        score: scoreSum
      };
    });

    return result;
  }

  /**
   * Calcula o Total Mood Disturbance (TMD).
   * TMD = Tension + Depression + Anger + Fatigue + Confusion - Vigor
   */
  public static calculateTMD(scores: Array<{ factor: string; score: number }>): number {
    let tension = 0;
    let depression = 0;
    let anger = 0;
    let vigor = 0;
    let fatigue = 0;
    let confusion = 0;

    scores.forEach(({ factor, score }) => {
      switch (factor) {
        case 'Tension':
          tension = score;
          break;
        case 'Depression':
          depression = score;
          break;
        case 'Anger':
          anger = score;
          break;
        case 'Vigor':
          vigor = score;
          break;
        case 'Fatigue':
          fatigue = score;
          break;
        case 'Confusion':
          confusion = score;
          break;
      }
    });

    return tension + depression + anger + fatigue + confusion - vigor;
  }
}
