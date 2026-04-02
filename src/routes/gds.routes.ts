import { Router } from "express";
import { GdsController } from "../controllers/gds.controller";
import { dataValidation } from "../middlewares/validate.middleware";
import { createGdsSubmissionSchema } from "../schema/gds.schema";
import { requireAuth } from "../middlewares/auth.middleware";

const router = Router();

router.post(
  '/submissions',
  requireAuth,
  dataValidation(createGdsSubmissionSchema),
  GdsController.createSubmission
);

export default router;
