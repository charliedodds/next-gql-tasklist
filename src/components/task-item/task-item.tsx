import { FC, ReactNode } from 'react'

interface Props {
  children: ReactNode
}

const TaskItem: FC<Props> = ({ children }) => {
  return <li>{children}</li>
}

export default TaskItem
