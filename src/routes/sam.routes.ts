import { Router } from "express";
import { requireAuth } from "../middlewares/auth.middleware";
import { dataValidation } from "../middlewares/validate.middleware";
import { createSamSchema } from "../schema/sam.schema";
import { SamController } from "../controllers/sam.controller";


const router = Router();


router.post(
  '/submissions',
  requireAuth,
  dataValidation(createSamSchema),
  SamController.createSubmission
)

export default router;