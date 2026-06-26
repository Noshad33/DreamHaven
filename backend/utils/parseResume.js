import fs from "fs/promises";
import pdfParse from "pdf-parse";
import mammoth from "mammoth";

/**
 * Extract plain text from uploaded PDF or DOCX resume files.
 */
export const extractTextFromResume = async (filePath, mimeType) => {
  const buffer = await fs.readFile(filePath);

  if (mimeType === "application/pdf") {
    const pdfData = await pdfParse(buffer);
    return pdfData.text || "";
  }

  if (
    mimeType ===
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document" ||
    mimeType === "application/msword"
  ) {
    const result = await mammoth.extractRawText({ buffer });
    return result.value || "";
  }

  throw new Error("Unsupported file type for text extraction");
};
