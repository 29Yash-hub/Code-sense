function EditorPanel({ code, setCode, analyze, loading }) {
  return (
    <div className="flex-1 bg-white p-4 rounded shadow">
      <h2 className="text-xl font-bold mb-2">Enter Code or Text</h2>
      <textarea
        className="w-full h-64 border rounded p-2 mb-4 resize-none"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        placeholder="Write your code or text here..."
      />
      <button
        className={`px-4 py-2 rounded text-white ${
          loading ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
        }`}
        onClick={analyze}
        disabled={loading}
      >
        {loading ? "Analyzing..." : "Analyze"}
      </button>
    </div>
  );
}

export default EditorPanel;
