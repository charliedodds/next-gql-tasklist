import { Task } from '@/__generated__/graphql'
import createApolloClient from '@/api'
import { ApolloError, gql } from '@apollo/client'
import { FC } from 'react'

const TASKS = gql(`
  query GetTasks {
    taskList {
      _id
      title
    }
  }
`)

interface Props {
  data: { taskList: Task[] }
  loading: boolean
  error: ApolloError | null
}

const Home: FC<Props> = ({ data, loading, error }) => {
  if (loading) return 'Loading...'

  if (error) return `Error ${error.name}: ${error.message}`

  return (
    <main>
      <ul>
        {data.taskList.map((task) => (
          <li key={task._id}>{task.title}</li>
        ))}
      </ul>
    </main>
  )
}

export default Home

export async function getStaticProps() {
  const client = createApolloClient()

  const { data, loading, error } = await client.query<Task[]>({
    query: TASKS,
  })

  return {
    props: {
      data,
      loading,
      error: error ?? null,
    },
  }
}
