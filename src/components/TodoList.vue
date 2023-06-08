<template>
  <div>
    <div v-for="todo in allTodos" :key="todo.id">
      <TodoItem :todo="todo" />
    </div>
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
