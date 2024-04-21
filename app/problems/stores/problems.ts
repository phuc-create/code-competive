import { zig_zag_conversion_problem } from './list/zig-zag-conversion'
import { Problem } from './problem-types'
type ProblemBasePathMock = {
  [key: string]: Problem
}
export const problems: Problem[] = [zig_zag_conversion_problem]

export const problemsBasepathMock: ProblemBasePathMock = {
  'zig-zag-conversion': zig_zag_conversion_problem
}
