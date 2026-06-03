<script setup lang="ts">
import { iconProps } from './icon'
import { bem } from '@kunlun/utils/bem'
import { computed } from 'vue'

defineOptions({
  name: 'kl-icon',
})

const props = defineProps(iconProps)

const namespace = bem('icon')

const style = computed(() => {
  return {
    fontSize: `${props.size}px`,
    color: props.color,
  }
})
</script>

<template>
  <i :class="namespace.valueOf()" :style="style"><slot/></i>
</template>

<style lang="scss" scoped></style>