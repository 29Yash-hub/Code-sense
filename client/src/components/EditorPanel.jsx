import React from "react";

function EditorPanel({ code, setCode }) {
  return (
    <textarea
      className="editor-panel"
      value={code}
      onChange={(e) => setCode(e.target.value)}
      placeholder="Paste or write your code here..."
    />
  );
}

export default EditorPanel;
