import React, { useState } from 'react'
import Navbar from './components/Navbar'
import EditorPanel from './components/EditorPanel'
import OutputPanel from './components/OutputPanel'
import axios from 'axios'
import { motion } from 'framer-motion'

export default function App() {
  const [code, setCode] = useState(`function add(a, b) {\n  return a + b // missing semicolon intentionally\n}`)
  const [language, setLanguage] = useState('javascript')
  const [output, setOutput] = useState('')
  const [loading, setLoading] = useState(false)

  const analyze = async () => {
    setLoading(true)
    setOutput('Analyzing...')
    try {
      const res = await axios.post('http://localhost:5000/analyze', { prompt: code })

      setOutput(res.data.result)
    } catch (err) {
      setOutput('Analysis failed. Check server console.')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen text-white">
      <Navbar />

      <main className="max-w-6xl mx-auto px-6 py-8">
        <motion.h1
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-semibold mb-4"
        >
          ⚙️ CodeSense — AI Bug Detector
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-sm text-gray-300 mb-6"
        >
          Paste code below, choose language and press <strong>Analyze</strong>. The AI will detect syntax and logic issues and suggest minimal fixes.
        </motion.p>

        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-7 bg-[color:var(--panel)] rounded-2xl p-4 editor-wrap shadow-2xl">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <span className="w-3 h-3 bg-red-500 rounded-full" />
                <span className="w-3 h-3 bg-yellow-400 rounded-full" />
                <span className="w-3 h-3 bg-green-500 rounded-full" />
                <span className="ml-3 text-sm text-[var(--muted)]">Editor</span>
              </div>

              <div className="flex items-center gap-2">
                <select
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                  className="bg-transparent border border-gray-700 text-sm px-3 py-1 rounded"
                >
                  <option value="javascript">JavaScript</option>
                  <option value="python">Python</option>
                  <option value="c++">C++</option>
                  <option value="java">Java</option>
                </select>

                <button
                  onClick={analyze}
                  disabled={loading}
                  className="ml-3 bg-gradient-to-r from-purple-600 to-indigo-600 px-4 py-1 rounded-md text-sm shadow-md hover:scale-[1.02] active:scale-[0.99]"
                >
                  {loading ? 'Analyzing...' : 'Analyze'}
                </button>
              </div>
            </div>

            <EditorPanel code={code} setCode={setCode} />
          </div>

          <div className="col-span-5">
            <OutputPanel output={output} />
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-6 text-sm text-gray-400"
        >
          Tip: Try small buggy snippets first to see line-level hints. For better line mapping, include line numbers in your pasted code.
        </motion.div>
      </main>
    </div>
  )
}
