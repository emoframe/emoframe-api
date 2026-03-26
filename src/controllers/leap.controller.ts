import type { Request, Response } from "express";
import { LeapService } from "../services/leap.service";
import { leapSubmissions } from "../db/schema";
import { db } from "../db";


export class LeapController {
  public static async createSubmission(req: Request, res: Response): Promise<void> {
    try {
      const { applicationId, evaluationId, externalUserId, answers } = req.body;
      const factorValues = LeapService.calculateScores(answers);
      
    
      
      const [newSubmission] = await db.insert(leapSubmissions).values({
        applicationId,
        evaluationId,
        externalUserId,
        ...answers,
        factorValues
      }).returning();

      res.status(201).json({ message: "Avaliação criada com sucesso", data: newSubmission });

    }catch (error) {
      console.error('[LeapController] Erro:', error);
      res.status(500).json({ error: "Erro interno ao processar a avaliação LEAP." });
    }
  }
}