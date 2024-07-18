import useFetch from '@/composable/use-fetch'

import type { Todo } from './index'

export const getTodos = (params?: { _limit?: number }) =>
  useFetch<Todo[]>('/todos', { params })
