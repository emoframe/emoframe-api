import { Request,Response } from "express";
import { db } from "../db";
import { pxSubmission } from "../db/schema";

export class PxController{
  public static async createSubmission(req: Request, res: Response) : Promise<void> {
    try{
      const {applicationId, evaluationId, externalUserId, answers} = req.body;
      
      const [newSubmission] = await db.insert(pxSubmission).values({
        applicationId,
        evaluationId,
        externalUserId,
        immersionScore: answers.immersion,
        funScore: answers.fun,
        gameplayScore: answers.gameplay
        
      }).returning(); // devolve a linha inserida

      res.status(201).json({
        message: 'Avaliação registrada com sucesso',
        data: newSubmission
      });
    }catch(e){
      console.error('[PxController] Erro ao criar submissão:', e);
      res.status(500).json({ e: 'Erro interno ao processar a avaliação.' });
    }
  }
}