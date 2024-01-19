import { Task } from '@/__generated__/graphql'
import createApolloClient from '@/api'
import TaskList from '@/components/task-list'
import { convertFilterToReadableText, convertUrlToFilter } from '@/helpers'
import { Status, TaskListResponse } from '@/types'
import { ApolloError, gql } from '@apollo/client'
import { GetStaticPropsContext } from 'next'
import { FC } from 'react'

const FILTERED_TASKS = gql(`
  query GetTasks($filter: FilterFindManyTaskInput) {
    taskList(filter: $filter) {
      _id
      title
    }
  }
`)

interface Props {
  data: { taskList: Task[] }
  loading: boolean
  error: ApolloError | null
  status: Status
}

const StatusPage: FC<Props> = ({ data, loading, error, status }) => {
  const readableStatus = convertFilterToReadableText(status)

  if (loading) return 'Loading...'

  if (error) return `Error ${error.name}: ${error.message}`

  return (
    <main>
      <h2 className="text-center text-lg">Showing {readableStatus} tasks</h2>
      <TaskList tasks={data.taskList} />
    </main>
  )
}

export default StatusPage

export async function getStaticProps(ctx: GetStaticPropsContext) {
  const statusParam = ctx.params?.status
  const status = statusParam ? convertUrlToFilter(statusParam) : ''

  const client = createApolloClient()
  const { data, loading, error } = await client.query<TaskListResponse>({
    query: FILTERED_TASKS,
    variables: {
      filter: {
        status,
      },
    },
  })

  return {
    props: {
      status,
      data,
      loading,
      error: error ?? null,
    },
  }
}

export function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          status: 'new',
        },
      },
      {
        params: {
          status: 'completed',
        },
      },
      {
        params: {
          status: 'offer-accepted',
        },
      },
    ],
  }
}
