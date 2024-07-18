<script setup lang="ts">
import { useHead } from '@unhead/vue'
import { RouterView } from 'vue-router'

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
