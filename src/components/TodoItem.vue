<template>
  <div>
    <div class="flex my-3 justify-between items-center">
      <h3 v-if="!editing" class="text-lg">{{ todo.title }}</h3>
      <div v-else class="flex items-center col">
        <input
          v-model="todoText"
          @change="todoTextChange"
          type="text"
          class="col-span-7 px-2 py-1 border rounded"
        />
        <div class="flex items-center ml-2">
          <input
            v-model="completed"
            @click="onCompleted"
            type="checkbox"
            class="mr-1"
            id="Completed"
          />
          <label class="text-sm" for="Completed">Completed</label>
        </div>
      </div>
      <div class="flex items-center">
        <button
          @click="updateTodoI(todo)"
          class="px-4 py-2 text-white bg-blue-500 rounded mx-2"
        >
          {{ editing ? "Update" : "Edit" }}
        </button>
        <button
          @click="deleteTodo(todo.id)"
          class="px-4 py-2 text-white bg-red-500 rounded"
        >
          Delete
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { ref } from "vue";
export default {
  props: {
    todo: {},
  },
  setup() {
    const store = useStore();
    const todoText = ref("");
    const editing = ref(false);
    const completed = ref(false);
    completed.value = store.state.completed;
    const onCompleted = () => {
      completed.value = !completed.value;
    };
    const updateTodoI = (todo) => {
      editing.value = !editing.value;
      if (editing.value) {
        todoText.value = todo.title;
        updateTodo(todo);
      } else {
        todo.title = todoText.value;
        todo.complete = completed.value;
      }
    };
    const deleteTodo = (id) => {
      store.dispatch("deleteTodo", id);
    };

    const updateTodo = (todo) => {
      store.dispatch("updateTodo", todo);
    };

    const changeCompleted = () => {
      store.dispatch("changeCompleted");
    };
    return {
      onCompleted,
      updateTodoI,
      todoText,
      editing,
      completed,
      deleteTodo,
      updateTodoI,
      updateTodo,
      changeCompleted,
    };
  },
};
</script>
