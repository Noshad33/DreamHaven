import { validationResult } from "express-validator";
import ApiError from "../utils/ApiError.js";

/**
 * Runs express-validator checks and returns 400 if validation fails.
 */
export const validate = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    const message = errors
      .array()
      .map((err) => err.msg)
      .join(", ");

    throw new ApiError(400, message);
  }

  next();
};
