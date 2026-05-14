// src/services/gamex.service.ts
import { GamexPayload } from '../schema/gamex.schema';

export class GamexService {
  public static processSubmission(answers: GamexPayload) {
    
    const isValid = answers.attention_check === 3;

    const enjoymentScore = (
      answers.game_was_fun +
      answers.enjoyed_playing +
      answers.enjoyed_a_lot +
      answers.pleasurable_experience +
      answers.highly_engaging +
      answers.play_voluntarily
    ) / 6;

    const immersionScore = (
      answers.forgot_location +
      answers.forgot_surroundings +
      answers.back_to_reality +
      answers.disconnect_from_everything +
      answers.ignored_surroundings +
      answers.lost_track_of_time
    ) / 6;

    const creativeThinkingScore = (
      answers.stimulated_imagination +
      answers.felt_creative +
      answers.sense_of_exploration +
      answers.felt_adventurous
    ) / 4;

    const activationScore = (
      answers.felt_active +
      answers.felt_restless +
      answers.felt_frantic +
      answers.felt_excited
    ) / 4;

    const negativeAffectScore = (
      answers.felt_upset +
      answers.felt_nervous +
      answers.felt_frustrated
    ) / 3;

    const dominanceScore = (
      answers.felt_in_command +
      answers.felt_influential +
      answers.felt_independent +
      answers.felt_confident
    ) / 4;

    return {
      isValid,
      enjoymentScore,
      immersionScore,
      creativeThinkingScore,
      activationScore,
      negativeAffectScore,
      dominanceScore
    };
  }
}