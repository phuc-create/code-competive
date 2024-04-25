'use client'
import React from 'react'
import { Editor } from '@monaco-editor/react'
import { Code2 } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useProblem } from '../context'

type PlaygroundProps = {
  language: string
}

const Playground: React.FC<PlaygroundProps> = ({ language }) => {
  const { theme } = useTheme()
  const { codeValue, handleChangeCodeValue } = useProblem()
  return (
    <div className="relative h-full w-full overflow-hidden rounded-md border">
      <div className="relative h-9 w-full border-b">
        <div className="absolute left-0 top-0 flex h-9 w-full items-center justify-start p-2 capitalize">
          <Code2 className="mr-2 h-5 w-5" /> {language}
        </div>
      </div>
      <div className="relative overflow-hidden">
        <Editor
          className="overflow-hidden"
          height={'90vh'}
          value={codeValue}
          language={language}
          onChange={handleChangeCodeValue}
          theme={theme === 'dark' ? 'vs-dark' : theme}
          defaultLanguage="javascript"
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
              showEvents: false,
              showInlineDetails: false,
              showProperties: false,
              showFunctions: false,
              showOperators: false,
              showKeywords: false,
              showReferences: false,
              showMethods: false,
              showSnippets: false,
              showStructs: false,
              showTypeParameters: false,
              showWords: false,
              showColors: false,
              showVariables: false,
              showValues: false,
              showEnums: false,
              showFields: false
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
