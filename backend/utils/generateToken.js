import jwt from "jsonwebtoken";

/**
 * Generate a signed JWT for authenticated users.
 */
export const generateToken = (userId) => {
  return jwt.sign({ id: userId }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN || "7d",
  });
};

/**
 * Set JWT as an httpOnly cookie on the response.
 */
export const sendTokenCookie = (res, token) => {
  const isProduction = process.env.NODE_ENV === "production";

  res.cookie("token", token, {
    httpOnly: true,
    secure: isProduction,
    sameSite: isProduction ? "none" : "lax",
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });
};

/**
 * Clear the authentication cookie on logout.
 */
export const clearTokenCookie = (res) => {
  res.cookie("token", "", {
    httpOnly: true,
    expires: new Date(0),
  });
};
