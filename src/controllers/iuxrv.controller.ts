import { Request, Response } from 'express';
import { db } from '../db';
import { iuxrvSubmissions } from '../db/schema';
import { IuxrvService } from '../services/iuxrv.service';

export class IuxrvController {
  public static async createSubmission(req: Request, res: Response): Promise<void> {
    try {

      const { applicationId, evaluationId, externalUserId, answers } = req.body;

      const processedData = IuxrvService.processSubmission(answers);

      const [newSubmission] = await db.insert(iuxrvSubmissions).values({
        applicationId,
        evaluationId,
        externalUserId,
        
        rawAnswers: answers, 
        
        vrSicknessScore: processedData.vrSicknessScore,
        usabilityScore: processedData.usabilityScore,
        aestheticsScore: processedData.aestheticsScore,
        presenceScore: processedData.presenceScore,
        emotionsScore: processedData.emotionsScore,
        finalScore: processedData.emotionsScore
        
      }).returning();

      res.status(201).json({
        message: 'Submissão do IUXRV registrada com sucesso',
        data: newSubmission
      });

    } catch (error) {
      console.error('[IuxrvController] Erro ao salvar submissão:', error);
      res.status(500).json({ error: 'Erro interno ao processar a avaliação IUXRV' });
    }
  }
}
