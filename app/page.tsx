import { Button } from '../components/ui/button'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { atelierLakesideDark } from 'react-syntax-highlighter/dist/esm/styles/hljs'

export default async function Home() {
  const codeMask = `
  class SolveIt {
    problem: string
    solution: string
    constructor(problem: string, solution:string) {
      this.problem = problem
      this.solution = solution
    }
  
    public handleSolveProblem(solution:string){
      // Implement here
    }
  
    public analyzingSolution(solution:string){
      // Implement here
    }
  }`
  const codeMask2 = `function isThisEvenEnglish(text) {
    const leetspeak = {
      a: "4", e: "3",
      o: "0", l: "1",
    };
    let result = "";
    for (let char of text) {
      result += leetspeak[char.toLowerCase()] || char;
    }
    return result + " (Is this even English?)";
  }
  
  const message = "This is a test!";
  const msg = isThisEvenEnglish(message);
  console.log(msg); // Output: Th1s 1s 4 t3st!
  `
  return (
    <main className="h-[calc(100vh-52px)] flex-1 flex-col items-center justify-between px-2 md:px-12">
      <div className="grid h-full grid-cols-2">
        <section className="flex flex-col items-start justify-center gap-4 pr-12">
          <span className="text-8xl">
            Level Up Your <span className="text-red-500">Javascript</span>{' '}
            Skills
          </span>
          <span>
            This platform is designed to enhance the developer's proficiency in
            Javascript coding and problem-solving skills. By utilizing this
            platform, developers can gain practical experience and strengthen
            their skills in a real-world context.
          </span>
          <Button className="p4 text-medium" variant={'outline'}>
            Start Solve.
          </Button>
        </section>
        <section className="relative h-full w-full">
          <article className="absolute right-0 top-0 overflow-hidden rounded-md border shadow-md">
            <SyntaxHighlighter
              style={atelierLakesideDark}
              wrapLines
              wrapLongLines
            >
              {codeMask}
            </SyntaxHighlighter>
          </article>
          <article className="absolute bottom-12 left-0 z-10 overflow-hidden rounded-md border shadow-md">
            <SyntaxHighlighter
              // language='javascript'
              style={atelierLakesideDark}
              wrapLines
              wrapLongLines
            >
              {codeMask2}
            </SyntaxHighlighter>
          </article>
        </section>
      </div>
    </main>
  )
}
