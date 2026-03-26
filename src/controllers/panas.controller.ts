import { Request, Response } from "express";
import { db } from "../db";
import { panasSubmission } from "../db/schema";
import { PanasService } from "../services/panas.service";

export class PanasController {
  public static async createSubmission(req: Request, res: Response) : Promise<void> {
    try{
      const {applicationId, evaluationId, externalUserId, answers} = req.body;
      const {positiveScore, negativeScore} = PanasService.calculateScore(answers);
      const [newSubmission] = await db.insert(panasSubmission).values({
        applicationId,
        evaluationId,
        externalUserId,
        ...answers,
        positiveScore,
        negativeScore
      }).returning();

      res.status(201).json({
        message: 'Avaliação PANAS registrada com sucesso!',
        data: newSubmission
      })

    }catch(error){
      console.error('[PanasController] Erro, ', error);
      res.status(500).json({error: 'Erro interno ao processar a avaliação.'});
    }
  }
}