<script lang="ts" setup>
import VLazyImage from 'v-lazy-image'
import { ImgHTMLAttributes, ref } from 'vue'

import { cn } from '@/lib/utils'

interface Props {
  'src-placeholder'?: String
  srcset?: String
  'intersection-options'?: String
  'use-picture'?: Boolean
}

const props = defineProps<Props & /* @vue-ignore */ ImgHTMLAttributes>()

const loading = ref(true)
</script>

<template>
  <VLazyImage
    v-bind="props"
    :class="
      cn('bg-neutral-100 transition-[scale,filter] duration-700', {
        'scale-[1.02] animate-pulse blur-lg grayscale': loading
      })
    "
    @load="() => (loading = false)"
  ></VLazyImage>
</template>
