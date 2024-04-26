import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '../../../../components/ui/accordion'
import { useProblem } from '../context'

const SubmissionStatus = () => {
  const { resultsSubmission } = useProblem()
  if (!resultsSubmission.length)
    return (
      <div className="mx-auto my-0 flex flex-col justify-center">
        Result not found
      </div>
    )
  return (
    <div>
      <Accordion
        type="single"
        collapsible
        className="grid grid-cols-[100%] gap-2"
      >
        {resultsSubmission.map(item => {
          return (
            <AccordionItem
              key={item.case}
              value={item.case.toString()}
              className={`relative rounded-md border px-4 ${item.success ? 'border-green-500' : 'border-destructive'}`}
            >
              <AccordionTrigger className="">
                test case{' '}
                {item.case + ' ' + (item.success ? 'PASSED' : 'FAILED')}
              </AccordionTrigger>
              <AccordionContent className="flex flex-col break-all">
                <span className="mb-4">
                  Expected: {item.expected?.toString()}
                </span>
                <span>Got: {item.output?.toString()}</span>
              </AccordionContent>
            </AccordionItem>
          )
        })}
      </Accordion>
    </div>
  )
}

export default SubmissionStatus
