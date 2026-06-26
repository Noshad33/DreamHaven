import Resume from "../models/Resume.js";
import Analysis from "../models/Analysis.js";
import asyncHandler from "../utils/asyncHandler.js";

/**
 * @desc    Get dashboard statistics
 * @route   GET /api/dashboard
 * @access  Private
 */
export const getDashboardStats = asyncHandler(async (req, res) => {
  const userId = req.user._id;

  const [totalResumes, latestResume, avgResult, recentAnalyses] =
    await Promise.all([
      Resume.countDocuments({ user: userId }),
      Resume.findOne({ user: userId }).sort({ createdAt: -1 }),
      Analysis.aggregate([
        { $match: { user: userId } },
        {
          $group: {
            _id: null,
            averageAtsScore: { $avg: "$atsScore" },
            averageGrammarScore: { $avg: "$grammarScore" },
            totalAnalyses: { $sum: 1 },
          },
        },
      ]),
      Analysis.find({ user: userId })
        .populate("resume", "title originalName fileType")
        .sort({ createdAt: -1 })
        .limit(5),
    ]);

  const stats = avgResult[0] || {
    averageAtsScore: 0,
    averageGrammarScore: 0,
    totalAnalyses: 0,
  };

  res.status(200).json({
    success: true,
    message: "Dashboard data fetched successfully",
    data: {
      totalUploadedResumes: totalResumes,
      latestResume,
      averageAtsScore: Math.round(stats.averageAtsScore || 0),
      averageGrammarScore: Math.round(stats.averageGrammarScore || 0),
      totalAnalyses: stats.totalAnalyses,
      recentAnalyses,
    },
  });
});
