export interface GdsPayload {
  satisfied: number;
  no_activities: number;
  empty: number;
  upset: number;
  good: number;
  bad: number;
  happy: number;
  helpless: number;
  stay_at_home: number;
  problems_of_memory: number;
  wonderful_to_stay_alive: number;
  useless: number;
  full_of_energy: number;
  hopeless: number;
  unlucky: number;
}

interface GdsScoreResult {
  totalScore: number;
  classification: string;
}

export class GdsService {
  public static calculateScore(answers: GdsPayload): GdsScoreResult {
    const totalScore = Object.values(answers).reduce((acc, value) => acc + value, 0);

    let classification: string;
    if (totalScore <= 5) {
      classification = 'Quadro psicológico normal';
    } else if (totalScore <= 10) {
      classification = 'Quadro de depressão leve';
    } else {
      classification = 'Quadro de depressão severa';
    }

    return {
      totalScore,
      classification
    };
  }
}
