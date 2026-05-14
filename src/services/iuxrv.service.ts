import { IuxrvPayload } from '../schema/iuxrv.schema';

export class IuxrvService {
  public static processSubmission(answers: IuxrvPayload) {
    
    
    const sum = (keys: (keyof IuxrvPayload)[], invert = false): number => {
      return keys.reduce((total, key) => {
        const value = answers[key];
        return total + (invert ? 8 - value : value);
      }, 0);
    };

    const vrSicknessScore = sum([
      'feeling_nauseous', 'feeling_dizzy', 'general_discomfort', 'tired_eyes', 'headache'
    ], true);

    const usabilityScore = sum([
      'easy_to_do_things', 'did_things_confidently', 'few_steps_required', 'felt_in_control', 'learned_quickly'
    ]);

    const aestheticsScore = sum([
      'elegant_world', 'fascinating_world', 'beautiful_world', 'fun_world', 'exciting_world'
    ]);

    const presenceScore = sum([
      'forgot_it_was_virtual', 'forgot_vr_equipment', 'believed_things_were_real', 'forgot_real_world', 'felt_it_could_be_real'
    ]);

    const emotionsScore = 
      sum(['felt_good', 'felt_content', 'felt_happy']) + 
      sum(['felt_irritated', 'felt_frustrated'], true);

    // 6. Placar Final (Soma de tudo menos 25)
    const rawTotal = vrSicknessScore + usabilityScore + aestheticsScore + presenceScore + emotionsScore;
    const finalScore = rawTotal - 25;

    return {
      vrSicknessScore,
      usabilityScore,
      aestheticsScore,
      presenceScore,
      emotionsScore,
      finalScore
    };
  }
}