export default function EditorPanel({ code, setCode, analyze, loading }) {
  return (
    <div className="flex-1 bg-white rounded-lg shadow-lg p-6 flex flex-col">
      <h2 className="text-xl font-semibold mb-4">Enter Code / Text</h2>
      <textarea
        className="flex-1 border border-gray-300 rounded-md p-3 mb-4 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        placeholder="Write your code or text here..."
      />
      <button
        onClick={analyze}
        disabled={loading}
        className={`py-2 px-6 rounded-md text-white font-semibold transition ${
          loading
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-blue-600 hover:bg-blue-700"
        }`}
      >
        {loading ? "Analyzing..." : "Analyze"}
      </button>
    </div>
  );
}
