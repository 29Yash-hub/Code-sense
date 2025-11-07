import { useState } from "react";
import axios from "axios";
import "./App.css"; // tumhara original CSS aur animations yahan include honge

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
        "https://code-sense-d91t.onrender.com/analyze", // Render backend URL + /analyze
        { prompt: code },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
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
      <header className="app-header">
        <h1 className="app-title">Code Sense Analyzer</h1>
      </header>

      <main className="app-main">
        <textarea
          className="code-input"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="Enter your code or text..."
        />
        <button className="analyze-btn" onClick={analyze} disabled={loading}>
          {loading ? "Analyzing..." : "Analyze"}
        </button>
        <pre className="output-panel">{output}</pre>
      </main>

      <footer className="app-footer">
        <p>Powered by Code Sense</p>
      </footer>
    </div>
  );
}

export default App;
