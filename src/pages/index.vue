<script setup lang="ts">
import { useHead } from '@unhead/vue'
import { useQuery } from 'vue-query'

import { Button } from '@/components/ui/button'
import { getTodo } from '@/lib/services/todos'

useHead({
  title: 'Home'
})

const { data, isFetching, isError, refetch } = useQuery(
  'todos',
  () => getTodo({ _limit: 10 }),
  {
    refetchOnWindowFocus: false
  }
)
</script>

<template>
  <main
    class="flex min-h-screen flex-col items-center justify-center space-y-6"
  >
    <Button @click="() => refetch()"> Refetch </Button>
    <p v-if="isFetching">loading....</p>
    <p v-else-if="isError">Error</p>

    <div class="container w-full">
      <p v-for="item in data || []" :key="item.id">
        {{ item.title }}
      </p>
    </div>
  </main>
</template>
