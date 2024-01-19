import { Task } from '@/__generated__/graphql'

export type Status = 'NEW' | 'COMPLETED' | 'OFFER_ACCEPTED'

export interface TaskListResponse {
  taskList: Task[]
}