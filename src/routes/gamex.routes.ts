import { Router } from "express";
import { GamexController } from "../controllers/gamex.controller";
import { dataValidation } from "../middlewares/validate.middleware";
import { createGamexSubmissionSchema } from "../schema/gamex.schema";
import { requireAuth } from "../middlewares/auth.middleware";

const router = Router();

router.post(
  '/submissions',
  requireAuth,
  dataValidation(createGamexSubmissionSchema),
  GamexController.createSubmission
);

export default router;
