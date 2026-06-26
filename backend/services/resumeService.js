import fs from "fs/promises";
import configureCloudinary from "../config/cloudinary.js";
import { extractTextFromResume } from "../utils/parseResume.js";

const cloudinary = configureCloudinary();

/**
 * Maps MIME type to a simplified file type label.
 */
const getFileType = (mimeType) => {
  if (mimeType === "application/pdf") return "pdf";
  if (
    mimeType ===
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
  ) {
    return "docx";
  }
  return "doc";
};

/**
 * Optionally upload resume to Cloudinary when configured.
 */
export const uploadToCloudinary = async (filePath, originalName) => {
  if (!cloudinary) {
    return "";
  }

  try {
    const result = await cloudinary.uploader.upload(filePath, {
      resource_type: "raw",
      folder: "resume-analyzer",
      public_id: originalName.replace(/\.[^/.]+$/, ""),
    });
    return result.secure_url;
  } catch (error) {
    console.warn("Cloudinary upload failed:", error.message);
    return "";
  }
};

/**
 * Process uploaded file: extract text and optionally upload to Cloudinary.
 */
export const processResumeFile = async (file) => {
  const extractedText = await extractTextFromResume(file.path, file.mimetype);
  const fileUrl = await uploadToCloudinary(file.path, file.originalname);

  return {
    originalName: file.originalname,
    fileName: file.filename,
    filePath: file.path,
    fileUrl,
    fileType: getFileType(file.mimetype),
    fileSize: file.size,
    extractedText,
  };
};

/**
 * Delete a resume file from local storage.
 */
export const deleteLocalFile = async (filePath) => {
  try {
    await fs.unlink(filePath);
  } catch {
    // File may already be removed
  }
};

/**
 * Delete a resume from Cloudinary when a public URL exists.
 */
export const deleteFromCloudinary = async (fileUrl) => {
  if (!cloudinary || !fileUrl) {
    return;
  }

  try {
    const parts = fileUrl.split("/");
    const fileName = parts[parts.length - 1].split(".")[0];
    await cloudinary.uploader.destroy(`resume-analyzer/${fileName}`, {
      resource_type: "raw",
    });
  } catch (error) {
    console.warn("Cloudinary delete failed:", error.message);
  }
};
