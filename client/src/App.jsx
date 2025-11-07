import { useState } from "react";
import axios from "axios";
import Navbar from "./components/Navbar";
import EditorPanel from "./components/EditorPanel";
import OutputPanel from "./components/OutputPanel";
import "./index.css";

function App() {
  const [code, setCode] = useState("");
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);

  const analyze = async () => {
    if (!code.trim()) {
      setOutput("Please enter some code or text!");
      return;
    }

    setLoading(true);
    setOutput("Analyzing...");

    try {
      const res = await axios.post(
        "https://code-sense-d91t.onrender.com/analyze", // Backend URL
        { prompt: code },
        { headers: { "Content-Type": "application/json" } }
      );
      setOutput(res.data.result);
    } catch (err) {
      console.error(err);
      setOutput("Analysis failed. Check server console.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app-container">
      <Navbar />
      <div className="main-container">
        <EditorPanel code={code} setCode={setCode} />
        <button className="analyze-btn" onClick={analyze} disabled={loading}>
          {loading ? "Analyzing..." : "Analyze"}
        </button>
        <OutputPanel output={output} />
      </div>
    </div>
  );
}

export default App;
