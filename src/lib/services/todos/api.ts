import useFetch from '@/composable/use-fetch'

import type { Todo } from './index'

export const getTodo = (params?: { _limit?: number }) =>
  useFetch<Todo[]>('/todos', { params })
