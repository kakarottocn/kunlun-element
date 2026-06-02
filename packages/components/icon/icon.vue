<script setup lang="ts">
import { iconProps } from './icon'
import { bem } from '@kunlun/utils/bem'

defineOptions({
  name: 'kl-icon',
})

defineProps(iconProps)

const namespace = bem('icon')
</script>

<template>
  <i :class="namespace.valueOf()" ><slot/></i>
</template>

<style lang="scss" scoped></style>