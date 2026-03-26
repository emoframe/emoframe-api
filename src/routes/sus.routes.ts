import { Router } from "express";
import { SusController } from "../controllers/sus.controller";
import { dataValidation } from "../middlewares/validate.middleware";
import { createSusSubmissionSchema } from "../schema/sus.schema";
import { requireAuth } from "../middlewares/auth.middleware";

const router = Router();

router.post(
  '/submissions',
  requireAuth,
  dataValidation(createSusSubmissionSchema),
  SusController.createSubmission
  );

export default router;