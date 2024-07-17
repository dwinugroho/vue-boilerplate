import { createEnv } from '@t3-oss/env-core'
import { z } from 'zod'

export const env = createEnv({
  client: {
    VITE_PUBLIC_API_URL: z.string().optional()
  },
  runtimeEnv: import.meta.env,
  skipValidation: import.meta.env.DEV,
  clientPrefix: 'VITE_PUBLIC_'
})
