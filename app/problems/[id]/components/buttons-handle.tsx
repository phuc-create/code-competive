'use client'
import React, { useEffect } from 'react'
import { Button } from '../../../../components/ui/button'
import { CloudUploadIcon, PlayIcon } from 'lucide-react'
import { useProblem } from '../context'
import { createSupabaseBrowerClient } from '../../../../supabase/supabaseClient'
import { getUserClient } from '../../../../supabase/requests/user'
import { toast } from 'sonner'

interface ButtonHandleProps {
  onTabChange: (tab: string) => void
}
const ButtonHandle: React.FC<ButtonHandleProps> = ({ onTabChange }) => {
  const {
    problem,
    problemLocal,
    codeValue,
    results,
    resultsSubmission,
    handleProcessSolution,
    handleProcessSubmission,
    handleChangeTracker
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
    const rs = handleProcessSubmission(
      codeValue,
      problemLocal?.handleSubmitSolution,
      problem?.starter_func_name || ''
    )
    onTabChange('submission')
    if (rs.length && rs.filter(v => v.success).length === rs.length) {
      const handleSave = async () => {
        toast('Submitting...', { duration: 3000, id: 'submit-solution-event' })
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
          toast.dismiss('submit-solution-event')
          toast.success('Solution submitted', { duration: 3000 })
          // Optionally return the inserted solution ID for further use
          handleChangeTracker()
          return insertedSolutionId
        } catch (error) {
          handleChangeTracker()
          console.error('Error submitting solution:', error)
          toast.error('An error occured: ' + error, { duration: 3000 })

          throw error // Re-throw the error for handling in the calling code
        }
      }
      handleSave()
    }
  }
  const disableSubmitBtn =
    results.length && results.filter(r => r.success).length === results.length

  return (
    <div className="relavite flex items-center justify-center gap-1 rounded-md border p-1">
      <Button onClick={handleTestSolution}>
        <PlayIcon className="mr-2 h-4 w-4" />
        Run
      </Button>
      <Button onClick={handleSubmitSolution} disabled={!disableSubmitBtn}>
        <CloudUploadIcon className="mr-2 h-5 w-5" />
        Submit
      </Button>
    </div>
  )
}
export default ButtonHandle
