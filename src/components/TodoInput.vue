<template>
  <div>
    <div class="row">
      <input
        @change="todoTextChange"
        v-model="todoText"
        class="col form-control mr-2"
        type="text"
      />
      <button @click="addTodoI" class="btn btn-primary">Add</button>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { useStore } from "vuex";
import { v1 } from "uuid";

const todoText = ref("");
const store = useStore();
const addTodoI = () => {
  store.dispatch("addTodo", {
    id: v1(),
    title: todoText.value,
    complete: false,
  });
  todoText.value = "";
};

const todoTextChange = (e) => {
  todoText.value = e.target.value;
};
</script>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
