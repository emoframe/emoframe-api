import { Request,Response } from "express";
import { db } from "../db";
import { susSubmission } from "../db/schema";
import { SusService } from "../services/sus.service";
import { SusPayload } from "../services/sus.service";

export class SusController{
  public static async createSubmission(req: Request, res: Response) : Promise<void> {
    try{
      const {applicationId, evaluationId, externalUserId, answers} = req.body;


      const finalScore = SusService.calculateScore(answers);
      
      const [newSubmission] = await db.insert(susSubmission).values({
        applicationId,
        evaluationId,
        externalUserId,
        useFrequency: answers.use_frequency,
        useComplex: answers.use_complex,
        useEasy: answers.use_easy,
        needHelp: answers.need_help,
        functionIntegration: answers.function_integration,
        inconsistency: answers.inconsistency,
        learningCurve: answers.learning_curve,
        jumbled: answers.jumbled,
        confidence: answers.confidence,
        learnSystem: answers.learn_system,
        finalScore: finalScore.toString(), // numeric recebe string no drizzle
      }).returning(); // devolve a linha inserida

      res.status(201).json({
        message: 'Avaliação registrada com sucesso',
        data: newSubmission
      });
    }catch(e){
      console.error('[SusController] Erro ao criar submissão:', e);
      res.status(500).json({ e: 'Erro interno ao processar a avaliação.' });
    }
  }
}