'use client'
import React from 'react'
import { TabsTrigger } from '../../../../components/ui/tabs'
import { useProblem } from '../context'

const TestCasesTab: React.FC = () => {
  const { results } = useProblem()

  return results.map((c, i) => (
    <TabsTrigger
      key={c.case}
      value={c.case.toString()}
      className={`mr-4 border ${c.success ? 'border-green-500' : 'border-destructive'}`}
    >
      Case {i + 1}
    </TabsTrigger>
  ))
}
export default TestCasesTab
