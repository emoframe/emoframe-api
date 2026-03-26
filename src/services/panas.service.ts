export interface PanasPayload {
  interested: number;
  distressed: number;
  excited: number;
  upset: number;
  strong: number;
  guilty: number;
  scared: number;
  hostile: number;
  enthusiastic: number;
  proud: number;
  irritable: number;
  alert: number;
  ashamed: number;
  inspired: number;
  nervous: number;
  determined: number;
  attentive: number;
  jittery: number;
  active: number;
  afraid: number;
}

export class PanasService {
  public static calculateScore(answers: PanasPayload): { positiveScore: number, negativeScore: number } {
    const positiveScore =
      answers.interested +
      answers.excited +
      answers.strong +
      answers.enthusiastic +
      answers.proud +
      answers.alert +
      answers.inspired +
      answers.determined +
      answers.attentive +
      answers.active;

    const negativeScore =
      answers.distressed +
      answers.upset +
      answers.guilty +
      answers.scared +
      answers.hostile +
      answers.irritable +
      answers.ashamed +
      answers.nervous +
      answers.jittery +
      answers.afraid;


      return {
        positiveScore,
        negativeScore
      };
  }
}