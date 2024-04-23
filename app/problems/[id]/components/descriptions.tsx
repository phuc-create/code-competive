import React from 'react'
import { Badge } from '../../../../components/ui/badge'
import { CircleCheckBig } from 'lucide-react'
import { Example } from '../../stores/problem-types'
import { TSBProblem } from '../../../../supabase/squash-types'
import { problemsStore } from '../../stores/problems'

type DescriptionsPageProps = {
  children?: React.ReactNode
  title: string
  problem: TSBProblem
}
const ExampleBlock = ({
  example,
  index
}: {
  example: Example
  index: number
}) => {
  const { var_name, input, output } = example
  const inputPartern = var_name.map((varName, i) => `${varName} = ${input[i]}`)
  return (
    <div className="mb-2">
      <p>
        <strong className="example">Example {index + 1}:</strong>
      </p>

      <pre className="flex flex-col">
        <div>
          <strong>Input:</strong> {inputPartern.join(', ')}
        </div>

        <div>
          <strong>Output:</strong> {output?.toString()}
        </div>
        <div>
          {example.explaination ? (
            <>
              <strong>Explanation:</strong>
              {example.explaination}
            </>
          ) : null}
        </div>
      </pre>
    </div>
  )
}

const getProblemLocally = (name: string) => {
  const found = problemsStore[name]
  if (found) {
    return found
  }
  return null
}
const DescriptionsPage: React.FC<DescriptionsPageProps> = ({
  title,
  children,
  problem
}) => {
  const problemLocalInfor = getProblemLocally(problem.name || '')
  return (
    <div className="rounded-md relative w-full h-full flex flex-col border overflow-hidden p-2 overflow-y-scroll">
      <span className="font-medium text-2xl mb-4">{title}</span>
      <div className="w-full flex items-center justify-start mb-3">
        <Badge variant={problem.level} className="mr-4">
          <span className="capitalize">{problem.level}</span>
        </Badge>
        <CircleCheckBig className="w-5 h-5 font-bold" color="green" />
      </div>
      <section className="h-auto">
        <div
          className="w-full h-full felx flex-col gap-4"
          data-track-load="description_content"
        >
          {problem.descriptions?.map((desc, i) => {
            return <p key={i}>{desc}</p>
          })}

          <br />

          {problemLocalInfor?.examples.map((example, index) => {
            return (
              <ExampleBlock key={example.id} example={example} index={index} />
            )
          })}

          <p>&nbsp;</p>
          <strong>Constraints:</strong>
          <ul className="list-disc">
            {problem.constraints?.map((cons, i) => {
              return (
                <li
                  className="mb-2"
                  key={i}
                  dangerouslySetInnerHTML={{ __html: cons }}
                >
                  {/* {cons} */}
                </li>
              )
            })}
          </ul>
        </div>
        {children}
      </section>
      <p className="mt-4">Categories: </p>
      <div className="mt-2 flex items-center justify-start gap-4">
        {problem.categories?.map(cate => (
          <Badge key={cate} variant="secondary">
            {cate}
          </Badge>
        ))}
      </div>
    </div>
  )
}
export default DescriptionsPage
