import 'dotenv/config';
import express from "express";
import cors from "cors";
import { createPerplexity } from "@ai-sdk/perplexity";
import { generateText } from "ai";

const app = express();

// ✅ CORS: only allow your frontend
app.use(cors({
  origin: "https://code-sense-rouge.vercel.app",
}));

app.use(express.json());

const perplexity = createPerplexity({
  apiKey: process.env.PERPLEXITY_API_KEY || "YOUR_API_KEY_HERE",
});

// ✅ /analyze endpoint
app.post("/analyze", async (req, res) => {
  try {
    const { prompt } = req.body;

    if (!prompt) {
      return res.status(400).json({ error: "Prompt is required" });
    }

    console.log("📩 Prompt received:", prompt);

    const result = await generateText({
      model: perplexity("sonar"),
      prompt,
    });

    console.log("✅ Perplexity response:", result.text);
    res.json({ result: result.text });
  } catch (err) {
    console.error("❌ Perplexity error:", err);
    res.status(500).json({ error: err.message || "Analysis error" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`✅ Server running on port ${PORT}`)
);
