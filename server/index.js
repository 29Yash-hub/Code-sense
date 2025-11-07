import 'dotenv/config';
import express from "express";
import cors from "cors";
import { createPerplexity } from "@ai-sdk/perplexity";
import { generateText } from "ai";

const app = express();
app.use(cors());
app.use(express.json());

const perplexity = createPerplexity({
  apiKey: process.env.PERPLEXITY_API_KEY || "YOUR_API_KEY_HERE",
});

app.post("/analyze", async (req, res) => {
  try {
    const { prompt } = req.body;
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
  console.log(`✅ Server running on http://localhost:${PORT}`)
);
