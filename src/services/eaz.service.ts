export interface EazPayload {
  happy: number;
  tired: number;
  worried: number;
  confident: number;
  courageous: number;
  nervous: number;
  determined: number;
  guilty: number;
  passionate: number;
  angry: number;
  brave: number;
  open_new_things: number;
  happy_person: number;
  easy_to_anger: number;
  proud_about_myself: number;
  humiliated: number;
  sad: number;
  grumpy: number;
  rage: number;
  resilient: number;
}

interface EazScoreResult {
  rawScore: number;
  zungIndex: number;
  classification: string;
}

export class EazService {
  // Itens positivos
  private static readonly REVERSED_ITEMS = new Set([
    'confident',
    'courageous',
    'brave',
    'happy_person',
    'resilient'
  ]);

  private static getClassification(index: number): string {
    if (index < 25) return 'Mínimo';
    if (index <= 44) return 'Normal';
    if (index <= 59) return 'Ansiedade leve a moderada';
    if (index <= 74) return 'Ansiedade marcante a grave';

    return 'Ansiedade extrema';
  }

  public static calculateScore(answers: EazPayload): EazScoreResult {
    let rawScore = 0;

    const answersMap: Record<string, number> = {
      happy: answers.happy,
      tired: answers.tired,
      worried: answers.worried,
      confident: answers.confident,
      courageous: answers.courageous,
      nervous: answers.nervous,
      determined: answers.determined,
      guilty: answers.guilty,
      passionate: answers.passionate,
      angry: answers.angry,
      brave: answers.brave,
      open_new_things: answers.open_new_things,
      happy_person: answers.happy_person,
      easy_to_anger: answers.easy_to_anger,
      proud_about_myself: answers.proud_about_myself,
      humiliated: answers.humiliated,
      sad: answers.sad,
      grumpy: answers.grumpy,
      rage: answers.rage,
      resilient: answers.resilient,
    };

    Object.entries(answersMap).forEach(([key, value]) => {
      if (this.REVERSED_ITEMS.has(key)) {
        rawScore += 5 - value;
      } else {
        rawScore += value;
      }
    });

    // conversao pra indice de zung
    const zungIndex = (rawScore / 80) * 100;

    const classification = EazService.getClassification(zungIndex)

    return {
      rawScore,
      zungIndex: Math.round(zungIndex * 100) / 100, // 2 casas decimais
      classification
    };
  }
}
