import {
  CheckCircledIcon,
  CircleIcon,
  CrossCircledIcon,
  QuestionMarkCircledIcon,
  StopwatchIcon
} from '@radix-ui/react-icons'
export const statuses = [
  {
    value: 'backlog',
    label: 'Backlog',
    icon: QuestionMarkCircledIcon
  },
  {
    value: 'todo',
    label: 'Todo',
    icon: CircleIcon
  },
  {
    value: 'in progress',
    label: 'In Progress',
    icon: StopwatchIcon
  },
  {
    value: 'done',
    label: 'Done',
    icon: CheckCircledIcon
  },
  {
    value: 'canceled',
    label: 'Canceled',
    icon: CrossCircledIcon
  }
]
type Level = {
  label: string
  value: 'easy' | 'medium' | 'hard'
}
export const levels: Level[] = [
  {
    label: 'Easy',
    value: 'easy'
    // icon: <Badge variant="easy">Easy</Badge>
  },
  {
    label: 'Medium',
    value: 'medium'
    // icon: <Badge variant="medium">Medium</Badge>
  },
  {
    label: 'Hard',
    value: 'hard'
    // icon: <Badge variant="hard">Hard</Badge>
  }
]
