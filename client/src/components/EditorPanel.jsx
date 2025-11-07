function EditorPanel({ code, setCode }) {
  return (
    <textarea
      className="editor-panel"
      value={code}
      onChange={(e) => setCode(e.target.value)}
      placeholder="Enter your code or text here..."
    />
  );
}

export default EditorPanel;
