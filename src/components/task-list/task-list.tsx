import { Task } from '@/__generated__/graphql'
import { FC, useMemo, useState } from 'react'
import TaskItem from '../task-item'
import { SortDirection } from '@/types'

interface Props {
  tasks: Task[]
}

const TaskList: FC<Props> = ({ tasks }) => {
  const [sortDirection, setSortDirection] = useState<SortDirection>()

  const onAscClick = () => {
    setSortDirection('asc')
  }

  const onDescClick = () => {
    setSortDirection('desc')
  }

  const sortedTasks = useMemo(() => {
    switch (sortDirection) {
      case 'asc':
        return tasks.sort((a, b) => (a.title > b.title ? 1 : -1))
      case 'desc':
        return tasks.sort((a, b) => (b.title > a.title ? 1 : -1))
      default:
        return tasks
    }
  }, [sortDirection, tasks])

  return (
    <>
      <div>
        <button onClick={onAscClick}>Sort asc</button>
        <button onClick={onDescClick}>Sort desc</button>
      </div>
      <ul>
        {sortedTasks.map((task) => (
          <TaskItem key={task._id}>{task.title}</TaskItem>
        ))}
      </ul>
    </>
  )
}

export default TaskList
