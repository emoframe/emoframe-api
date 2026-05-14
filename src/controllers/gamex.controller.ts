
import { Request, Response } from 'express';
import { db } from '../db'; 
import { gamexSubmissions } from '../db/schema';
import { GamexService } from '../services/gamex.service';

export class GamexController {
  public static async createSubmission(req: Request, res: Response): Promise<void> {
    try {

      const { applicationId, evaluationId, externalUserId, answers } = req.body;

      const processedData = GamexService.processSubmission(answers);

      const [newSubmission] = await db.insert(gamexSubmissions).values({
        applicationId,
        evaluationId,
        externalUserId,
        
        rawAnswers: answers, 
        
        isValid: processedData.isValid,
        enjoymentScore: processedData.enjoymentScore,
        immersionScore: processedData.immersionScore,
        creativeThinkingScore: processedData.creativeThinkingScore,
        activationScore: processedData.activationScore,
        negativeAffectScore: processedData.negativeAffectScore,
        dominanceScore: processedData.dominanceScore,
        
      }).returning();

      res.status(201).json({
        message: 'Submissão do GAMEX registrada com sucesso',
        data: newSubmission
      });

    } catch (error) {
      console.error('[GamexController] Erro ao salvar submissão:', error);
      res.status(500).json({ error: 'Erro interno ao processar a avaliação GAMEX' });
    }
  }
}