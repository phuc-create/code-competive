'use client'
import React from 'react'
import { Button } from '../../../../components/ui/button'
import { CloudUploadIcon, PlayIcon } from 'lucide-react'
import { useProblem } from '../context'

const ButtonHandle: React.FC = () => {
  const { problem, problemLocal, codeValue, handleProcessSolution } =
    useProblem()

  if (!problemLocal?.testcases.length) return null
  console.log(problemLocal)
  const handleSubmitSolution = () => {
    console.log(codeValue)
    handleProcessSolution(
      codeValue,
      problemLocal.handleFunction,
      problem?.starter_func_name || ''
    )
  }
  return (
    <div className="relavite flex items-center justify-center gap-1 rounded-md border p-1">
      <Button onClick={handleSubmitSolution}>
        <PlayIcon className="mr-2 h-4 w-4" />
        Run
      </Button>
      <Button>
        <CloudUploadIcon className="mr-2 h-5 w-5" />
        Submit
      </Button>
    </div>
  )
}
export default ButtonHandle
