import { body } from "express-validator";

export const analyzeResumeValidator = [
  body("resumeId")
    .notEmpty()
    .withMessage("Resume ID is required")
    .isMongoId()
    .withMessage("Invalid resume ID"),
];
