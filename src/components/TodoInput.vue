<template>
  <div>
    <div class="flex header">
      <input
        v-model="todoText"
        class="w-full mr-2 px-2 py-1 border rounded"
        type="text"
        placeholder="請輸入您的代辦事項"
      />
      <button
        @click="addTodoI"
        class="px-4 py-2 text-white bg-blue-500 rounded"
      >
        Add
      </button>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";
import { v1 } from "uuid";
export default {
  setup() {
    const todoText = ref("");
    const store = useStore();
    const addTodoI = () => {
      if (todoText.value.length == 0) return;
      if (store.state.completed) {
        store.dispatch("changeCompleted");
      }
      store.dispatch("addTodo", {
        id: v1(),
        title: todoText.value,
        complete: false,
      });
      todoText.value = "";
    };
    return {
      todoText,
      addTodoI,
    };
  },
};
</script>

<style scoped>
.header {
  background-color: #eee;
  border-radius: 6px;
  padding: 20px;
  display: flex;
  align-items: center;
}
</style>
