<script setup lang="ts">
import { useHead } from '@unhead/vue'
import { useQueryProvider } from 'vue-query'
import { RouterView } from 'vue-router'

useQueryProvider()

useHead({
  titleTemplate(title) {
    if (title) {
      return `${title} - Vue Boilerplate by Krafan`
    }
    return 'Vue Boilerplate by Krafan'
  }
})
</script>

<template>
  <RouterView />
</template>
