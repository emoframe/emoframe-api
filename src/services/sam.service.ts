export interface SamPayload {
  satisfaction: number;
  motivation: number;
  willpower: number;
}


export class SamService {
  public static calculateScore({satisfaction, motivation, willpower}: SamPayload): { satisfaction: number, motivation: number, willpower: number } {
    return {
      satisfaction: satisfaction,
      motivation: motivation,
      willpower: willpower
    };
  }
}