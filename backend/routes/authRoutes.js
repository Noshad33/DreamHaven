import express from "express";
import {
  register,
  login,
  logout,
  getMe,
} from "../controllers/authController.js";
import { protect } from "../middleware/authMiddleware.js";
import { validate } from "../middleware/validateMiddleware.js";
import {
  registerValidator,
  loginValidator,
} from "../validators/authValidator.js";

const router = express.Router();

router.post("/register", registerValidator, validate, register);
router.post("/login", loginValidator, validate, login);
router.post("/logout", protect, logout);
router.get("/me", protect, getMe);

export default router;
