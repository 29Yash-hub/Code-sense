import { useState } from "react";
import axios from "axios";
import Navbar from "./components/Navbar";
import EditorPanel from "./components/EditorPanel";
import OutputPanel from "./components/OutputPanel";

function App() {
  const [code, setCode] = useState("");
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);

  const analyze = async () => {
    if (!code.trim()) return; // empty input check
    setLoading(true);
    setOutput("Analyzing...");
    try {
      const res = await axios.post(
        "https://code-sense-d91t.onrender.com/analyze", // your Render backend URL
        { prompt: code } // backend expects { prompt }
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
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row gap-6">
        <EditorPanel
          code={code}
          setCode={setCode}
          analyze={analyze}
          loading={loading}
        />

        <OutputPanel output={output} />
      </div>
    </div>
  );
}

export default App;
