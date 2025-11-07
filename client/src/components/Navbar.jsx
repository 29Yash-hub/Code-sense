import React from 'react'
import { motion } from 'framer-motion'

export default function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="w-full bg-transparent px-6 py-4 flex justify-between items-center"
    >
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-md bg-gradient-to-br from-purple-600 to-indigo-500 flex items-center justify-center shadow-lg">
          <span className="font-bold">CS</span>
        </div>
        <div>
          <div className="text-sm font-semibold">CodeSense</div>
          <div className="text-xs text-gray-400">AI Bug Detector</div>
        </div>
      </div>

      <div className="text-sm text-gray-300">
        Built with ❤️ — Demo for Tech Team
      </div>
    </motion.nav>
  )
}
