<script setup lang="ts">
import type { ButtonGroupProps } from "./Button";
import { provide, reactive, toRef } from "vue";
import { BUTTON_GROUP_CTX_KEY } from "./constants";

defineOptions({
  name: "kl-button-group",
});
const props = defineProps<ButtonGroupProps>();

provide(
  BUTTON_GROUP_CTX_KEY,
  reactive({
    size: toRef(props, "size"),
    type: toRef(props, "type"),
    disabled: toRef(props, "disabled"),
  })
);
</script>

<template>
  <div class="kl-button-group">
    <slot></slot>
  </div>
</template>

<style scoped>
@import "./style.css";
</style>
