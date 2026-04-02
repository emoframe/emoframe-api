import { Request, Response } from "express";
import { db } from "../db";
import { eazSubmission } from "../db/schema";
import { EazService } from "../services/eaz.service";

export class EazController {
  public static async createSubmission(req: Request, res: Response): Promise<void> {
    try {
      const { applicationId, evaluationId, externalUserId, answers } = req.body;

      const scoreResult = EazService.calculateScore(answers);

      const [newSubmission] = await db.insert(eazSubmission).values({
        applicationId,
        evaluationId,
        externalUserId,
        happy: answers.happy,
        tired: answers.tired,
        worried: answers.worried,
        confident: answers.confident,
        courageous: answers.courageous,
        nervous: answers.nervous,
        determined: answers.determined,
        guilty: answers.guilty,
        passionate: answers.passionate,
        angry: answers.angry,
        brave: answers.brave,
        openNewThings: answers.open_new_things,
        happyPerson: answers.happy_person,
        easyToAnger: answers.easy_to_anger,
        proudAboutMyself: answers.proud_about_myself,
        humiliated: answers.humiliated,
        sad: answers.sad,
        grumpy: answers.grumpy,
        rage: answers.rage,
        resilient: answers.resilient,
        rawScore: scoreResult.rawScore,
        zungIndex: scoreResult.zungIndex.toString(),
        classification: scoreResult.classification,
      }).returning();

      res.status(201).json({
        message: 'Avaliação EAZ registrada com sucesso',
        data: newSubmission
      });
    } catch (e) {
      console.error('[EazController] Erro ao criar submissão:', e);
      res.status(500).json({ error: 'Erro interno ao processar a avaliação.' });
    }
  }
}
