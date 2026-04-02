import type { Request, Response } from "express";
import { BrumsService } from "../services/brums.service";
import { brumsSubmission } from "../db/schema";
import { db } from "../db";

export class BrumsController {
  public static async createSubmission(req: Request, res: Response): Promise<void> {
    try {
      const { applicationId, evaluationId, externalUserId, answers } = req.body;
      
      const factorScores = BrumsService.calculateScores(answers);
      const tmd = BrumsService.calculateTMD(factorScores);

      const [newSubmission] = await db.insert(brumsSubmission).values({
        applicationId,
        evaluationId,
        externalUserId,
        ...answers,
        factorScores,
        tmd
      }).returning();

      res.status(201).json({ message: "Avaliação BRUMS criada com sucesso", data: newSubmission });

    } catch (error) {
      console.error('[BrumsController] Erro:', error);
      res.status(500).json({ error: "Erro interno ao processar a avaliação BRUMS." });
    }
  }
}
