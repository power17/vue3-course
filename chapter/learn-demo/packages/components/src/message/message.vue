import { onMounted } from 'vue';
<template>
  <div v-if="show" :class="[baseClassName, typeClassName]">
    <p>{{ props.text }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { prefixName } from '../theme/prefix';
const show = ref<boolean>(false);
const baseClassName = `${prefixName}-message`;
const props = withDefaults(
  defineProps<{
    type?: string;
    text?: string;
  }>(),
  {
    type: 'info'
  }
);
const typeClassName = `${baseClassName}-${props.type}`;
onMounted(() => {
  show.value = true;
});
const closeMessage = () => {
  show.value = false;
};

defineExpose<{
  closeMessage: () => void;
}>({
  closeMessage: closeMessage
});
</script>

<style lang="scss" scoped></style>
