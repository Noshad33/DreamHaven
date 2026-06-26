/**
 * Generates realistic mock resume analysis when no AI API key is configured.
 */
const generateMockAnalysis = (resumeText = "") => {
  const wordCount = resumeText.split(/\s+/).filter(Boolean).length;
  const hasTechnicalTerms =
    /javascript|python|react|node|java|sql|mongodb|aws|docker|git/i.test(
      resumeText
    );

  const baseAts = hasTechnicalTerms ? 72 : 58;
  const atsScore = Math.min(95, baseAts + Math.floor(wordCount / 50));
  const grammarScore = Math.min(92, 65 + Math.floor(wordCount / 80));

  return {
    atsScore,
    grammarScore,
    missingSkills: [
      "Docker",
      "Kubernetes",
      "GraphQL",
      "CI/CD Pipelines",
      "System Design",
    ],
    technicalSkills: [
      "JavaScript",
      "React",
      "Node.js",
      "MongoDB",
      "REST APIs",
      "Git",
    ],
    softSkills: [
      "Communication",
      "Team Collaboration",
      "Problem Solving",
      "Time Management",
    ],
    strengths: [
      "Clear project descriptions with measurable outcomes",
      "Relevant technical stack aligned with modern development",
      "Consistent formatting and readable section structure",
    ],
    weaknesses: [
      "Missing quantifiable achievements in work experience",
      "Limited keywords for ATS optimization",
      "Professional summary could be more targeted",
    ],
    suggestions: [
      "Add metrics to each bullet point (e.g., improved performance by 30%)",
      "Include role-specific keywords from the job description",
      "Add a concise professional summary at the top",
      "List certifications and relevant coursework if applicable",
    ],
    recommendedJobRoles: [
      "Full Stack Developer",
      "Frontend Developer",
      "Backend Developer",
      "Software Engineer",
    ],
    isMock: true,
  };
};

/**
 * Calls external AI API when OPENAI_API_KEY is set; otherwise returns mock data.
 */
export const analyzeResumeWithAI = async (resumeText) => {
  const apiKey = process.env.OPENAI_API_KEY;

  if (!apiKey) {
    return generateMockAnalysis(resumeText);
  }

  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: process.env.OPENAI_MODEL || "gpt-4o-mini",
        response_format: { type: "json_object" },
        messages: [
          {
            role: "system",
            content: `You are an expert resume analyst and career coach. Analyze the resume text and return a JSON object with exactly these fields:
- atsScore (number 0-100)
- grammarScore (number 0-100)
- missingSkills (string array)
- technicalSkills (string array)
- softSkills (string array)
- strengths (string array)
- weaknesses (string array)
- suggestions (string array)
- recommendedJobRoles (string array)`,
          },
          {
            role: "user",
            content: `Analyze this resume:\n\n${resumeText.slice(0, 12000)}`,
          },
        ],
        temperature: 0.4,
      }),
    });

    if (!response.ok) {
      console.warn("AI API request failed, falling back to mock data");
      return generateMockAnalysis(resumeText);
    }

    const data = await response.json();
    const content = data.choices?.[0]?.message?.content;

    if (!content) {
      return generateMockAnalysis(resumeText);
    }

    const parsed = JSON.parse(content);

    return {
      atsScore: parsed.atsScore ?? 70,
      grammarScore: parsed.grammarScore ?? 70,
      missingSkills: parsed.missingSkills ?? [],
      technicalSkills: parsed.technicalSkills ?? [],
      softSkills: parsed.softSkills ?? [],
      strengths: parsed.strengths ?? [],
      weaknesses: parsed.weaknesses ?? [],
      suggestions: parsed.suggestions ?? [],
      recommendedJobRoles: parsed.recommendedJobRoles ?? [],
      isMock: false,
    };
  } catch (error) {
    console.warn("AI analysis error, using mock data:", error.message);
    return generateMockAnalysis(resumeText);
  }
};
