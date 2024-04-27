'use client'
import React, { useEffect } from 'react'
import { Button } from '../../../../components/ui/button'
import { CloudUploadIcon, PlayIcon } from 'lucide-react'
import { useProblem } from '../context'
import { createSupabaseBrowerClient } from '../../../../supabase/supabaseClient'
import {
  getUserClient,
  getUserCredentialsClient
} from '../../../../supabase/requests/user'

interface ButtonHandleProps {
  onTabChange: (tab: string) => void
}
const ButtonHandle: React.FC<ButtonHandleProps> = ({ onTabChange }) => {
  const {
    problem,
    problemLocal,
    codeValue,
    resultsSubmission,
    handleProcessSolution,
    handleProcessSubmission
  } = useProblem()

  const handleTestSolution = () => {
    if (!problemLocal) return
    handleProcessSolution(
      codeValue,
      problemLocal.handleFunction,
      problem?.starter_func_name || ''
    )
  }

  const handleSubmitSolution = () => {
    if (!problemLocal) return
    handleProcessSubmission(
      codeValue,
      problemLocal?.handleSubmitSolution,
      problem?.starter_func_name || ''
    )
    onTabChange('submission')
  }
  useEffect(() => {
    if (
      resultsSubmission.length &&
      resultsSubmission.filter(v => v.success).length ===
        resultsSubmission.length
    ) {
      console.log(
        resultsSubmission,
        resultsSubmission.filter(v => v.success === true).length ===
          resultsSubmission.length
      )
      const handleSave = async () => {
        const supabase = createSupabaseBrowerClient()
        try {
          // Begin database transaction
          const { data } = await getUserClient()
          const { data: newRecord, error } = await supabase
            .from('problem_overview')
            .insert([
              {
                solutions: codeValue || '',
                user_id: data?.id || '',
                problem_id: problem?.id ? problem.id : 0,
                disliked: false,
                liked: false,
                status: 'solved'
              }
            ])
            .select()
            .maybeSingle()

          if (error) {
            throw new Error(
              `Error saving solution to problem_overview: ${error.message}`
            )
          }
          console.log(newRecord)

          const insertedSolutionId = newRecord?.id // Get the ID of the inserted record

          // Update the problem table in the same transaction
          const { data: updateData, error: updateError } = await supabase.rpc(
            'increment_completed',
            { problem_id: problem?.id || 0, x: 1 }
          )

          if (updateError) {
            throw new Error(
              `Error updating problem table: ${updateError.message}`
            )
          }

          console.log(
            'Solution submitted and problem completed count updated successfully!'
          )

          // Optionally return the inserted solution ID for further use
          return insertedSolutionId
        } catch (error) {
          console.error('Error submitting solution:', error)
          throw error // Re-throw the error for handling in the calling code
        }
      }
      handleSave()
    }
  }, [codeValue, problem?.id, resultsSubmission])

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
