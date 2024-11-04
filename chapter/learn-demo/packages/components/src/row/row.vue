<template>
  <div :class="{ [className]: true }">
    <slot v-if="$slots.default"></slot>
  </div>
</template>
<script lang="ts" setup>
import { prefixName } from '../theme/prefix';
const className = `${prefixName}-row`;
</script>
