import React from 'react'
import Editor from '@monaco-editor/react'

export default function EditorPanel({ code, setCode }) {
  const handleEditorChange = (value) => {
    setCode(value || '')
  }

  return (
    <div style={{ height: '480px' }}>
      <Editor
        height="100%"
        defaultLanguage="javascript"
        theme="vs-dark"
        value={code}
        onChange={handleEditorChange}
        options={{ minimap: { enabled: false }, fontSize: 14 }}
      />
    </div>
  )
}
