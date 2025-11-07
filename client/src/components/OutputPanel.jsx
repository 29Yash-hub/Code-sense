import React from 'react'
import { motion } from 'framer-motion'

export default function OutputPanel({ output }) {
  return (
    <motion.div
      initial={{ scale: 0.98, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="bg-[color:var(--panel)] rounded-2xl p-4 shadow-2xl h-full flex flex-col"
    >
      <div className="flex items-center justify-between mb-3">
        <div className="text-sm text-[var(--muted)]">AI Analysis</div>
        <div className="text-xs text-gray-400">Confidence: High</div>
      </div>

      <div className="flex-1 overflow-auto">
        <pre className="output-pre text-sm text-gray-100">{output || 'No analysis yet. Paste code and click Analyze.'}</pre>
      </div>

      <div className="mt-4 flex gap-2 justify-end">
        <button className="text-xs px-3 py-1 border border-gray-700 rounded">Copy Result</button>
        <button className="text-xs px-3 py-1 bg-gradient-to-r from-purple-600 to-indigo-600 rounded">Save</button>
      </div>
    </motion.div>
  )
}
