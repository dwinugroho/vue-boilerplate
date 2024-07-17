import { env } from '@/env'

type FetchOptions = {
  method?: string
  headers?: HeadersInit
  body?: BodyInit | null
  params?: Record<string, string | number>
}

const defaultHeaders = {
  'Content-Type': 'application/json'
}

const useFetch = async <T>(
  endPoint: string,
  options: FetchOptions = {}
): Promise<T> => {
  const url = new URL(env.VITE_PUBLIC_API_URL + endPoint)

  if (options.params) {
    Object.keys(options.params).forEach((key) => {
      url.searchParams.append(key, options.params![key].toString())
    })
  }

  const init: RequestInit = {
    method: options.method || 'GET',
    headers: {
      ...defaultHeaders,
      ...options.headers
    },
    body: options.body || null
  }

  const response = await fetch(url, init)

  if (!response.ok) {
    return Promise.reject({
      status: response.status
    })
  }

  return Promise.resolve(response.json())
}

export default useFetch
