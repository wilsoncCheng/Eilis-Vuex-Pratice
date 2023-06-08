<template>
  <div class="form_body">
    <TodoItem v-for="todo in allTodos" :key="todo.id" :todo="todo"> </TodoItem>
  </div>
</template>
<script>
import TodoItem from "./TodoItem.vue";
import { computed } from "vue";
import { useStore } from "vuex";
export default {
  components: {
    TodoItem,
  },
  setup() {
    const store = useStore();
    const allTodos = computed(() =>
      store.getters.allTodos.filter(
        (todo) => todo.complete == store.state.completed
      )
    );
    return {
      allTodos,
    };
  },
};
</script>
<style>
.form_body {
  background-color: #eee;
  border-radius: 6px;
  padding: 20px;
}
</style>
