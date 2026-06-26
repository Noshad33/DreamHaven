import Resume from "../models/Resume.js";
import Analysis from "../models/Analysis.js";
import asyncHandler from "../utils/asyncHandler.js";
import ApiError from "../utils/ApiError.js";
import { analyzeResumeWithAI } from "../services/aiService.js";

/**
 * @desc    Analyze a resume using AI (or mock data)
 * @route   POST /api/analysis/analyze
 * @access  Private
 */
export const analyzeResume = asyncHandler(async (req, res) => {
  const { resumeId } = req.body;

  const resume = await Resume.findOne({
    _id: resumeId,
    user: req.user._id,
  });

  if (!resume) {
    throw new ApiError(404, "Resume not found");
  }

  const resumeText =
    resume.extractedText ||
    "No text could be extracted from this resume. Analysis is based on general recommendations.";

  const analysisResult = await analyzeResumeWithAI(resumeText);

  const analysis = await Analysis.create({
    user: req.user._id,
    resume: resume._id,
    ...analysisResult,
  });

  await analysis.populate("resume", "title originalName fileType createdAt");

  res.status(201).json({
    success: true,
    message: analysisResult.isMock
      ? "Resume analyzed successfully (mock data — set OPENAI_API_KEY for real AI analysis)"
      : "Resume analyzed successfully",
    data: { analysis },
  });
});

/**
 * @desc    Get analysis history for logged-in user
 * @route   GET /api/analysis/history
 * @access  Private
 */
export const getAnalysisHistory = asyncHandler(async (req, res) => {
  const page = parseInt(req.query.page, 10) || 1;
  const limit = parseInt(req.query.limit, 10) || 10;
  const skip = (page - 1) * limit;

  const [analyses, total] = await Promise.all([
    Analysis.find({ user: req.user._id })
      .populate("resume", "title originalName fileType createdAt")
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit),
    Analysis.countDocuments({ user: req.user._id }),
  ]);

  res.status(200).json({
    success: true,
    message: "Analysis history fetched successfully",
    data: {
      count: analyses.length,
      total,
      page,
      totalPages: Math.ceil(total / limit),
      analyses,
    },
  });
});

/**
 * @desc    Get single analysis by ID
 * @route   GET /api/analysis/:id
 * @access  Private
 */
export const getAnalysisById = asyncHandler(async (req, res) => {
  const analysis = await Analysis.findOne({
    _id: req.params.id,
    user: req.user._id,
  }).populate("resume", "title originalName fileType fileUrl createdAt");

  if (!analysis) {
    throw new ApiError(404, "Analysis not found");
  }

  res.status(200).json({
    success: true,
    message: "Analysis fetched successfully",
    data: { analysis },
  });
});

/**
 * @desc    Delete an analysis record
 * @route   DELETE /api/analysis/:id
 * @access  Private
 */
export const deleteAnalysis = asyncHandler(async (req, res) => {
  const analysis = await Analysis.findOne({
    _id: req.params.id,
    user: req.user._id,
  });

  if (!analysis) {
    throw new ApiError(404, "Analysis not found");
  }

  await analysis.deleteOne();

  res.status(200).json({
    success: true,
    message: "Analysis deleted successfully",
    data: {},
  });
});
