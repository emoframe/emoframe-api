import { Router } from "express";
import { PxController } from "../controllers/px.controller";
import { dataValidation } from "../middlewares/validate.middleware";
import { createPxSubmissionSchema } from "../schema/px.schema";
import { requireAuth } from "../middlewares/auth.middleware";

const router = Router();

router.post(
  '/submissions',
  requireAuth,
  dataValidation(createPxSubmissionSchema),
  PxController.createSubmission
  );

export default router;