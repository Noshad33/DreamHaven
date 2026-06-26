import express from "express";
import {
  analyzeResume,
  getAnalysisHistory,
  getAnalysisById,
  deleteAnalysis,
} from "../controllers/analysisController.js";
import { protect } from "../middleware/authMiddleware.js";
import { validate } from "../middleware/validateMiddleware.js";
import { analyzeResumeValidator } from "../validators/analysisValidator.js";

const router = express.Router();

router.use(protect);

router.post("/analyze", analyzeResumeValidator, validate, analyzeResume);
router.get("/history", getAnalysisHistory);
router.get("/:id", getAnalysisById);
router.delete("/:id", deleteAnalysis);

export default router;
