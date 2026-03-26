import { Router } from "express";
import { requireAuth } from "../middlewares/auth.middleware";
import { dataValidation } from "../middlewares/validate.middleware";
import { createLeapSchema } from "../schema/leap.schema";
import { LeapController } from "../controllers/leap.controller";


const router = Router();

router.post(
  '/submissions',
  requireAuth,
  dataValidation(createLeapSchema),
  LeapController.createSubmission

)

export default router;