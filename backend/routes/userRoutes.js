import express from "express";
import {
  getProfile,
  updateProfile,
  changePassword,
} from "../controllers/userController.js";
import { protect } from "../middleware/authMiddleware.js";
import { validate } from "../middleware/validateMiddleware.js";
import {
  updateProfileValidator,
  changePasswordValidator,
} from "../validators/userValidator.js";

const router = express.Router();

router.use(protect);

router.get("/profile", getProfile);
router.put("/profile", updateProfileValidator, validate, updateProfile);
router.put(
  "/change-password",
  changePasswordValidator,
  validate,
  changePassword
);

export default router;
