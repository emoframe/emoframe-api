import { Router } from "express";
import { EazController } from "../controllers/eaz.controller";
import { dataValidation } from "../middlewares/validate.middleware";
import { createEazSubmissionSchema } from "../schema/eaz.schema";
import { requireAuth } from "../middlewares/auth.middleware";

const router = Router();

router.post(
  '/submissions',
  requireAuth,
  dataValidation(createEazSubmissionSchema),
  EazController.createSubmission
);

export default router;
