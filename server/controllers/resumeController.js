import fs from "fs";
import { createRequire } from "module";

const require = createRequire(import.meta.url);
const pdf = require("pdf-parse");

export const uploadResume = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "No resume uploaded",
      });
    }

    const buffer = fs.readFileSync(req.file.path);

    const pdfData = await pdf(buffer);

    const resumeText = pdfData.text;

    const prompt = `
You are an ATS Resume Analyzer.

Analyze this resume.

Return ONLY valid JSON in this format:

{
  "atsScore": 0,
  "strengths": [],
  "weaknesses": [],
  "suggestions": []
}

Keep each array to a maximum of 5 items.

Resume:

${resumeText}
`;

    const response = await fetch(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "google/gemini-2.5-flash",
          max_tokens: 1000,
          temperature: 0.3,
          messages: [
            {
              role: "user",
              content: prompt,
            },
          ],
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      return res.status(500).json(data);
    }

   const analysis = data.choices[0].message.content
  .replace(/```json/g, "")
  .replace(/```/g, "")
  .trim();

res.json({
  success: true,
  analysis,
});
  } catch (err) {
    console.error(err);

    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};