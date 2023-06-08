<template>
  <div>
    <div class="row">
      <input v-model="todoText" class="col form-control mr-2" type="text" />
      <button @click="addTodoI" class="btn btn-primary">Add</button>
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
      console.log(todoText.value.trim().length);
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
.read-the-docs {
  color: #888;
}
</style>
