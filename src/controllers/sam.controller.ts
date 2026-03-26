import { Request, Response } from 'express';
import { samSubmission } from '../db/schema';
import { db } from '../db';
import { SamService } from '../services/sam.service';

export class SamController {
  public static async createSubmission(req: Request, res: Response) : Promise<void> {
    try{
      const {applicationId, evaluationId, externalUserId, answers} = req.body;

      const processedAnswers = SamService.calculateScore(answers);

      const [newSubmission] = await db.insert(samSubmission).values({
        applicationId,
        evaluationId,
        externalUserId,
        ...processedAnswers
      }).returning();

      res.status((201)).json({
        message: 'Avaliação SAM registrada com sucesso!',
        data: newSubmission
      });
      
    }catch(error){
      console.error('[SamController] Erro, ', error);
      res.status(500).json({error: 'Erro interno ao processar a avaliação.'});
    }
  }
}