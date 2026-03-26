export interface SusPayload{
  use_frequency: number,
  use_complex: number,
  use_easy: number,
  need_help: number,
  function_integration: number;
  inconsistency: number;
  learning_curve: number;
  jumbled: number;
  confidence: number;
  learn_system: number;
}


export class SusService{

  public static calculateScore(answers : SusPayload) : number{
    const oddSum = 
    (answers.use_frequency - 1) + 
    (answers.use_easy - 1) +
    (answers.function_integration - 1) + 
    (answers.learning_curve - 1) +
    (answers.confidence - 1);

    const evenSum = 
    (5 - answers.use_complex) + 
    (5 - answers.need_help) + 
    (5 - answers.inconsistency) + 
    (5 - answers.jumbled) + 
    (5 - answers.learn_system);


    const total_score = (oddSum + evenSum) * 2.5

    return total_score;
  }
}