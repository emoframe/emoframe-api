import { Router } from "express";
import { requireAuth } from "../middlewares/auth.middleware";
import { dataValidation } from "../middlewares/validate.middleware";
import { createBrumsSubmissionSchema } from "../schema/brums.schema";
import { BrumsController } from "../controllers/brums.controller";

const router = Router();

router.post(
  '/submissions',
  requireAuth,
  dataValidation(createBrumsSubmissionSchema),
  BrumsController.createSubmission
);

export default router;
