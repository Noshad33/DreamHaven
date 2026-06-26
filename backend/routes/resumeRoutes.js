import express from "express";
import {
  uploadResume,
  getUserResumes,
  getResumeById,
  deleteResume,
} from "../controllers/resumeController.js";
import { protect } from "../middleware/authMiddleware.js";
import { uploadResume as uploadMiddleware } from "../middleware/errorMiddleware.js";
import { validate } from "../middleware/validateMiddleware.js";
import { uploadResumeValidator } from "../validators/resumeValidator.js";

const router = express.Router();

router.use(protect);

router.post(
  "/upload",
  uploadMiddleware.single("resume"),
  uploadResumeValidator,
  validate,
  uploadResume
);
router.get("/", getUserResumes);
router.get("/:id", getResumeById);
router.delete("/:id", deleteResume);

export default router;
