import { Request, Response } from "express";
import { db } from "../db";
import { gdsSubmission } from "../db/schema";
import { GdsService } from "../services/gds.service";

export class GdsController {
  public static async createSubmission(req: Request, res: Response): Promise<void> {
    try {
      const { applicationId, evaluationId, externalUserId, answers } = req.body;

      const scoreResult = GdsService.calculateScore(answers);

      const [newSubmission] = await db.insert(gdsSubmission).values({
        applicationId,
        evaluationId,
        externalUserId,
        satisfied: answers.satisfied,
        noActivities: answers.no_activities,
        empty: answers.empty,
        upset: answers.upset,
        good: answers.good,
        bad: answers.bad,
        happy: answers.happy,
        helpless: answers.helpless,
        stayAtHome: answers.stay_at_home,
        problemsOfMemory: answers.problems_of_memory,
        wonderfulToStayAlive: answers.wonderful_to_stay_alive,
        useless: answers.useless,
        fullOfEnergy: answers.full_of_energy,
        hopeless: answers.hopeless,
        unlucky: answers.unlucky,
        totalScore: scoreResult.totalScore,
        classification: scoreResult.classification,
      }).returning();

      res.status(201).json({
        message: 'Avaliação GDS registrada com sucesso',
        data: newSubmission
      });
    } catch (e) {
      console.error('[GdsController] Erro ao criar submissão:', e);
      res.status(500).json({ error: 'Erro interno ao processar a avaliação.' });
    }
  }
}
