import { body } from "express-validator";

export const updateProfileValidator = [
  body("fullName")
    .optional()
    .trim()
    .notEmpty()
    .withMessage("Full name cannot be empty")
    .isLength({ max: 100 })
    .withMessage("Full name cannot exceed 100 characters"),
  body("phone")
    .optional()
    .trim()
    .isLength({ max: 20 })
    .withMessage("Phone number cannot exceed 20 characters"),
  body("bio")
    .optional()
    .trim()
    .isLength({ max: 500 })
    .withMessage("Bio cannot exceed 500 characters"),
  body("avatar")
    .optional({ checkFalsy: true })
    .trim()
    .isURL()
    .withMessage("Avatar must be a valid URL"),
];

export const changePasswordValidator = [
  body("currentPassword")
    .notEmpty()
    .withMessage("Current password is required"),
  body("newPassword")
    .notEmpty()
    .withMessage("New password is required")
    .isLength({ min: 6 })
    .withMessage("New password must be at least 6 characters"),
  body("confirmPassword")
    .notEmpty()
    .withMessage("Confirm password is required")
    .custom((value, { req }) => {
      if (value !== req.body.newPassword) {
        throw new Error("Passwords do not match");
      }
      return true;
    }),
];
