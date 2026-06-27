// routes/predictionRoutes.js
import express from "express";
import { predictPropertyPrice } from "../controllers/predictionController.js";

const router = express.Router();

// POST /api/predict
router.post("/", predictPropertyPrice);

export default router;
