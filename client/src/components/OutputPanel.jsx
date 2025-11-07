function OutputPanel({ output }) {
  return (
    <div className="flex-1 bg-white p-4 rounded shadow">
      <h2 className="text-xl font-bold mb-2">Analysis Result</h2>
      <pre className="whitespace-pre-wrap break-words">{output}</pre>
    </div>
  );
}

export default OutputPanel;
