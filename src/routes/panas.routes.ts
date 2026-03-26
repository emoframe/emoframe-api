import { Router } from "express";
import { requireAuth } from "../middlewares/auth.middleware";
import { dataValidation } from "../middlewares/validate.middleware";
import { createPanasSchema } from "../schema/panas.schema";
import { PanasController } from "../controllers/panas.controller";


const router = Router();

router.post(
  '/submissions',
  requireAuth,
  dataValidation(createPanasSchema),
  PanasController.createSubmission
)

export default router;