<template>
  <TodoInput />
  <TodoStatus />
  <TodoList />
</template>
<script setup>
import TodoInput from "./components/TodoInput.vue";
import TodoStatus from "./components/TodoStatus.vue";
import TodoList from "./components/TodoList.vue";
</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
