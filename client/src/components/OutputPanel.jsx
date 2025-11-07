import React from "react";

function OutputPanel({ output }) {
  return (
    <pre className="output-panel">{output || "Analysis result will appear here..."}</pre>
  );
}

export default OutputPanel;
