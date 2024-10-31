<template>
  <div @click="open">open12132</div>
</template>

<script setup>
import Message from '../src/message';

const open = () => {
  // 自动关闭
  Message.open({
    text: '这是一个success类型的消息提醒组件，5秒后自动关闭',
    type: 'success',
    duration: 5000
  });
};

// const msg = Message.open({
//   text: '这是一个success类型的消息提醒组件，不会自动关闭',
//   type: 'success',
//   duration: 0
// });
// 如果要关闭，就执行 msg.close() 来关闭这个组件
</script>

<style lang="scss" scoped></style>
