import axios from "axios";
import { useState } from "react";

function App() {
  const [code, setCode] = useState("");
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);

  const analyze = async () => {
    setLoading(true);
    setOutput("Analyzing...");
    try {
      const res = await axios.post(
        "https://code-sense-d91t.onrender.com/analyze", // Backend URL + /analyze
        { prompt: code } // input text
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
    <div>
      <h1>Code Sense Analyzer</h1>
      <textarea
        value={code}
        onChange={(e) => setCode(e.target.value)}
        placeholder="Enter code or text..."
      />
      <button onClick={analyze} disabled={loading}>
        {loading ? "Analyzing..." : "Analyze"}
      </button>
      <pre>{output}</pre>
    </div>
  );
}

export default App;
