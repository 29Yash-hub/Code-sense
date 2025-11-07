import { useState } from "react";
import Navbar from "./components/Navbar";
import EditorPanel from "./components/EditorPanel";
import OutputPanel from "./components/OutputPanel";
import axios from "axios";

export default function App() {
  const [code, setCode] = useState("");
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);

  const analyze = async () => {
    if (!code.trim()) return;
    setLoading(true);
    setOutput("Analyzing...");
    try {
      const res = await axios.post(
        "https://code-sense-d91t.onrender.com/analyze",
        { prompt: code }
      );
      setOutput(res.data.result);
    } catch (err) {
      setOutput("Analysis failed. Check server console.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />

      <main className="flex-1 container mx-auto px-6 py-8 flex flex-col md:flex-row gap-8">
        <EditorPanel
          code={code}
          setCode={setCode}
          analyze={analyze}
          loading={loading}
        />
        <OutputPanel output={output} />
      </main>

      <footer className="text-center py-4 text-gray-500">
        © 2025 Code Sense Analyzer
      </footer>
    </div>
  );
}
