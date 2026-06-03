<script setup lang="ts">
import { type IconProps } from './icon'
import { bem } from '@kunlun/utils/bem'
import { computed } from 'vue'
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

defineOptions({
  name: 'kl-icon',
})

const props = withDefaults(defineProps<IconProps>(), {
  size: 16,
})

const namespace = bem('icon')

const style = computed(() => {
  return {
    fontSize: typeof props.size === 'number' ? `${props.size}px` : props.size,
    color: props.color,
  }
})
</script>

<template>
  <font-awesome-icon v-if="props.faIcon" :class="namespace.valueOf()" :icon="props.faIcon" v-bind="$attrs" />
  <i v-else :class="namespace.valueOf()" :style="style"><slot/></i>
</template>

<style lang="scss" scoped></style>