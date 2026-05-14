import { Router } from "express";
import { IuxrvController } from "../controllers/iuxrv.controller";
import { dataValidation } from "../middlewares/validate.middleware";
import { createIuxrvSchema } from "../schema/iuxrv.schema";
import { requireAuth } from "../middlewares/auth.middleware";

const router = Router();

router.post(
  '/submissions',
  requireAuth,
  dataValidation(createIuxrvSchema),
  IuxrvController.createSubmission
);

export default router;
