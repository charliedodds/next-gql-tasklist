import { Task } from '@/__generated__/graphql'
import { FC, useCallback, useMemo, useState } from 'react'
import TaskItem from '../task-item'
import { SortDirection } from '@/types'
import SortButtons from '../sort-buttons'

interface Props {
  tasks: Task[]
}

const TaskList: FC<Props> = ({ tasks }) => {
  const [sortDirection, setSortDirection] = useState<SortDirection>()

  const onAscClick = useCallback(() => {
    setSortDirection(SortDirection.Asc)
  }, [])

  const onDescClick = useCallback(() => {
    setSortDirection(SortDirection.Desc)
  }, [])

  const sortedTasks = useMemo(() => {
    switch (sortDirection) {
      case SortDirection.Asc:
        return tasks.sort((a, b) => (a.title > b.title ? 1 : -1))
      case SortDirection.Desc:
        return tasks.sort((a, b) => (b.title > a.title ? 1 : -1))
      default:
        return tasks
    }
  }, [sortDirection, tasks])

  return (
    <>
      <SortButtons onAscClick={onAscClick} onDescClick={onDescClick} />
      <ul className="md:w-1/2 mx-auto flex flex-col gap-4 my-8 px-8 md:p-0">
        {sortedTasks.map((task) => (
          <TaskItem key={task._id}>{task.title}</TaskItem>
        ))}
      </ul>
    </>
  )
}

export default TaskList
