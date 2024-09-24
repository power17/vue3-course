<template>
  <button
    :class="{
      [baseClassName]: true,
      [btnClassName]: true
    }"
  >
    <slot v-if="$slots.default"></slot>
  </button>
</template>

<script setup lang="ts">
import { prefixName } from '../theme/prefix';
import type { ButtonType, ButtonVariant } from './types';
const props = withDefaults(
  defineProps<{
    type?: ButtonType;
    variant?: ButtonVariant;
  }>(),
  {
    type: 'default',
    variant: 'contained',
    disabled: false
  }
);

const baseClassName = `${prefixName}-button`;
const btnClassName = `${baseClassName}-${props.type}-${props.variant}`;
</script>
