import Resume from "../models/Resume.js";
import Analysis from "../models/Analysis.js";
import asyncHandler from "../utils/asyncHandler.js";
import ApiError from "../utils/ApiError.js";
import {
  processResumeFile,
  deleteLocalFile,
  deleteFromCloudinary,
} from "../services/resumeService.js";

/**
 * @desc    Upload a resume (PDF/DOCX)
 * @route   POST /api/resume/upload
 * @access  Private
 */
export const uploadResume = asyncHandler(async (req, res) => {
  if (!req.file) {
    throw new ApiError(400, "Please upload a PDF or DOCX file");
  }

  const processed = await processResumeFile(req.file);

  const resume = await Resume.create({
    user: req.user._id,
    title: req.body.title || processed.originalName,
    ...processed,
  });

  res.status(201).json({
    success: true,
    message: "Resume uploaded successfully",
    data: { resume },
  });
});

/**
 * @desc    Get all resumes for logged-in user
 * @route   GET /api/resume
 * @access  Private
 */
export const getUserResumes = asyncHandler(async (req, res) => {
  const resumes = await Resume.find({ user: req.user._id }).sort({
    createdAt: -1,
  });

  res.status(200).json({
    success: true,
    message: "Resumes fetched successfully",
    data: {
      count: resumes.length,
      resumes,
    },
  });
});

/**
 * @desc    Get single resume by ID
 * @route   GET /api/resume/:id
 * @access  Private
 */
export const getResumeById = asyncHandler(async (req, res) => {
  const resume = await Resume.findOne({
    _id: req.params.id,
    user: req.user._id,
  });

  if (!resume) {
    throw new ApiError(404, "Resume not found");
  }

  res.status(200).json({
    success: true,
    message: "Resume fetched successfully",
    data: { resume },
  });
});

/**
 * @desc    Delete a resume
 * @route   DELETE /api/resume/:id
 * @access  Private
 */
export const deleteResume = asyncHandler(async (req, res) => {
  const resume = await Resume.findOne({
    _id: req.params.id,
    user: req.user._id,
  });

  if (!resume) {
    throw new ApiError(404, "Resume not found");
  }

  await deleteLocalFile(resume.filePath);
  await deleteFromCloudinary(resume.fileUrl);
  await Analysis.deleteMany({ resume: resume._id });
  await resume.deleteOne();

  res.status(200).json({
    success: true,
    message: "Resume deleted successfully",
    data: {},
  });
});
