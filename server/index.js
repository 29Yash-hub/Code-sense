import 'dotenv/config';
import express from "express";
import cors from "cors";
import { createPerplexity } from "@ai-sdk/perplexity";

const app = express();

// ✅ CORS: only allow your frontend URL
app.use(cors({
  origin: "https://code-sense-rouge.vercel.app" // frontend URL
}));

app.use(express.json());

// ✅ Create Perplexity client
const client = createPerplexity({
  apiKey: process.env.PERPLEXITY_API_KEY || "YOUR_API_KEY_HERE",
});

app.post("/analyze", async (req, res) => {
  try {
    const { prompt } = req.body;

    if (!prompt) {
      return res.status(400).json({ error: "Prompt is required" });
    }

    console.log("📩 Prompt received:", prompt);

    // ✅ Generate text using Perplexity
    const result = await client.generate({
      prompt,
      model: "sonar" // ya "sonar-pro"
    });

    console.log("✅ Perplexity response:", result.text);

    res.json({ result: result.text });
  } catch (err) {
    console.error("❌ Perplexity error:", err);
    res.status(500).json({ error: err.message || "Analysis error" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
