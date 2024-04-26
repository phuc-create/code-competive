'use client'
import React from 'react'
import { Button } from '../../../../components/ui/button'
import { CloudUploadIcon, PlayIcon } from 'lucide-react'
import { useProblem } from '../context'

interface ButtonHandleProps {
  onTabChange: (tab: string) => void
}
const ButtonHandle: React.FC<ButtonHandleProps> = ({ onTabChange }) => {
  const {
    problem,
    problemLocal,
    codeValue,
    handleProcessSolution,
    handleProcessSubmission
  } = useProblem()

  if (!problemLocal?.testcases.length) return null

  const handleTestSolution = () => {
    handleProcessSolution(
      codeValue,
      problemLocal.handleFunction,
      problem?.starter_func_name || ''
    )
  }

  const handleSubmitSolution = () => {
    handleProcessSubmission(
      codeValue,
      problemLocal.handleSubmitSolution,
      problem?.starter_func_name || ''
    )
    onTabChange('submission')
  }
  return (
    <div className="relavite flex items-center justify-center gap-1 rounded-md border p-1">
      <Button onClick={handleTestSolution}>
        <PlayIcon className="mr-2 h-4 w-4" />
        Run
      </Button>
      <Button onClick={handleSubmitSolution}>
        <CloudUploadIcon className="mr-2 h-5 w-5" />
        Submit
      </Button>
    </div>
  )
}
export default ButtonHandle
