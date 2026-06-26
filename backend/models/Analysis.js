import mongoose from "mongoose";

const analysisSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },
    resume: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Resume",
      required: true,
    },
    atsScore: {
      type: Number,
      required: true,
      min: 0,
      max: 100,
    },
    grammarScore: {
      type: Number,
      required: true,
      min: 0,
      max: 100,
    },
    missingSkills: {
      type: [String],
      default: [],
    },
    technicalSkills: {
      type: [String],
      default: [],
    },
    softSkills: {
      type: [String],
      default: [],
    },
    strengths: {
      type: [String],
      default: [],
    },
    weaknesses: {
      type: [String],
      default: [],
    },
    suggestions: {
      type: [String],
      default: [],
    },
    recommendedJobRoles: {
      type: [String],
      default: [],
    },
    isMock: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const Analysis = mongoose.model("Analysis", analysisSchema);

export default Analysis;
