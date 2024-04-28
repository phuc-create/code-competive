'use client'
import React from 'react'
import { useProblem } from '../context'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '../../../../components/ui/accordion'
import { docco, vs2015 } from 'react-syntax-highlighter/dist/esm/styles/hljs'

import SyntaxHighlighter from 'react-syntax-highlighter'
import { useTheme } from 'next-themes'
import { ThumbsDown, ThumbsUp } from 'lucide-react'
import { Button } from '../../../../components/ui/button'

const SolutionsPage = () => {
  const { theme } = useTheme()
  const { problem } = useProblem()
  return (
    <div className="flex flex-col">
      <Accordion
        type="single"
        collapsible
        className="grid grid-cols-[100%] gap-2"
      >
        {problem?.problem_overview.map(item => {
          return (
            <AccordionItem
              key={item.id}
              value={item.id.toString()}
              className={`relative rounded-md border px-4`}
            >
              <AccordionTrigger className="">
                Solution {item.created_at}
              </AccordionTrigger>
              <AccordionContent className="flex flex-col break-all">
                <section className="mb-3 flex items-center gap-4">
                  <Button className="flex cursor-pointer items-center">
                    <ThumbsUp
                      className={`h-4 w-4 ${item.liked ? 'text-green-500' : 'text-base'}`}
                    />
                  </Button>
                  <Button className="flex cursor-pointer items-center">
                    <ThumbsDown
                      className={`h-4 w-4 ${item.liked ? 'text-red-500' : 'text-base'}`}
                    />
                  </Button>
                </section>
                <SyntaxHighlighter
                  language="javascript"
                  style={theme === 'dark' ? vs2015 : docco}
                >
                  {item.solutions + ''}
                </SyntaxHighlighter>
                {/* <span className="mb-4">
                  Expected: {item.expected?.toString()}
                </span>
                <span>Got: {item.output + ''}</span> */}
              </AccordionContent>
            </AccordionItem>
          )
        })}
      </Accordion>
    </div>
  )
}

export default SolutionsPage
