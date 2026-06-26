import { body } from "express-validator";

export const uploadResumeValidator = [
  body("title")
    .optional()
    .trim()
    .isLength({ max: 150 })
    .withMessage("Title cannot exceed 150 characters"),
];
