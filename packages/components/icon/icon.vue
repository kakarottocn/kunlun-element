<script setup lang="ts">
import { iconProps } from './icon'
import { bem } from '@kunlun/utils/bem'

defineOptions({
  name: 'k-icon',
})

defineProps(iconProps)

const namespace = bem('icon')
</script>

<template>
  <i :class="namespace.valueOf()" ></i>
</template>

<style lang="scss" scoped></style>