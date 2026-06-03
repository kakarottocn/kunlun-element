<script setup lang="ts">
import { type IconProps } from './Icon'
import { bem } from '@xirang/utils/bem'
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
    fontSize: Number(props.size) == props.size ? `${props.size}px` : props.size,
    color: props.color,
  }
})
</script>

<template>
  <font-awesome-icon v-if="props.faIcon" :class="namespace.valueOf()" :icon="props.faIcon" v-bind="$attrs" />
  <i v-else :class="namespace.valueOf()" :style="style"><slot/></i>
</template>

<style lang="scss" scoped></style>