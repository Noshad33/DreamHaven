import User from "../models/User.js";
import asyncHandler from "../utils/asyncHandler.js";
import ApiError from "../utils/ApiError.js";
import {
  generateToken,
  sendTokenCookie,
  clearTokenCookie,
} from "../utils/generateToken.js";

/**
 * @desc    Register a new user
 * @route   POST /api/auth/register
 * @access  Public
 */
export const register = asyncHandler(async (req, res) => {
  const { fullName, email, password } = req.body;

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    throw new ApiError(400, "User with this email already exists");
  }

  const user = await User.create({ fullName, email, password });
  const token = generateToken(user._id);
  sendTokenCookie(res, token);

  res.status(201).json({
    success: true,
    message: "User registered successfully",
    data: {
      user: {
        _id: user._id,
        fullName: user.fullName,
        email: user.email,
        phone: user.phone,
        bio: user.bio,
        avatar: user.avatar,
        createdAt: user.createdAt,
      },
      token,
    },
  });
});

/**
 * @desc    Login user
 * @route   POST /api/auth/login
 * @access  Public
 */
export const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email }).select("+password");
  if (!user) {
    throw new ApiError(401, "Invalid email or password");
  }

  const isMatch = await user.comparePassword(password);
  if (!isMatch) {
    throw new ApiError(401, "Invalid email or password");
  }

  const token = generateToken(user._id);
  sendTokenCookie(res, token);

  res.status(200).json({
    success: true,
    message: "Login successful",
    data: {
      user: {
        _id: user._id,
        fullName: user.fullName,
        email: user.email,
        phone: user.phone,
        bio: user.bio,
        avatar: user.avatar,
        createdAt: user.createdAt,
      },
      token,
    },
  });
});

/**
 * @desc    Logout user
 * @route   POST /api/auth/logout
 * @access  Private
 */
export const logout = asyncHandler(async (req, res) => {
  clearTokenCookie(res);

  res.status(200).json({
    success: true,
    message: "Logged out successfully",
    data: {},
  });
});

/**
 * @desc    Get current logged-in user
 * @route   GET /api/auth/me
 * @access  Private
 */
export const getMe = asyncHandler(async (req, res) => {
  res.status(200).json({
    success: true,
    message: "Current user fetched successfully",
    data: { user: req.user },
  });
});
