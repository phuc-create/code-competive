'use client'
import { Editor } from '@monaco-editor/react'
import { Code2 } from 'lucide-react'
import { useTheme } from 'next-themes'
import React from 'react'

type PlaygroundProps = {
  code?: string
  language: string
}

const Playground: React.FC<PlaygroundProps> = ({ code, language }) => {
  const { theme } = useTheme()
  return (
    <div className="rounded-md relative w-full h-full border overflow-hidden">
      <div className="relative h-9 w-full border-b">
        <div className="h-9 absolute top-0 left-0 w-full capitalize flex items-center justify-start p-2">
          <Code2 className="w-5 h-5 mr-2" /> {language}
        </div>
      </div>
      <div className="relative overflow-hidden">
        <Editor
          className="overflow-hidden"
          height={'90vh'}
          value={code}
          language={language}
          theme={theme === 'dark' ? 'vs-dark' : theme}
          defaultLanguage="typescript"
          options={{
            fontSize: 14,
            hover: { enabled: false },
            lineNumbers: 'on',
            tabSize: 2,
            minimap: {
              enabled: false
            },
            suggest: {
              preview: false,
              showInterfaces: false,
              shareSuggestSelections: false,
              showConstants: false,
              showClasses: false,
              showConstructors: false,
              showEvents: false
            },
            quickSuggestions: false,
            inlayHints: {
              enabled: 'off'
            },
            parameterHints: {
              enabled: false
            }
          }}
        />
      </div>
      {/* <div className="relative h-9 w-full ">
        <div className="absolute bottom-0 left-0 w-full h-9">
          {'</>'} Detect code from panel
        </div>
      </div> */}
    </div>
  )
}
export default Playground
