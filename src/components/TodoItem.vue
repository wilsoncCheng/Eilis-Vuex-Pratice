<template>
  <div>
    <div class="row my-3 justify-content-between align-items-center">
      <h3 v-if="!editing">{{ todo.title }}</h3>
      <div
        v-else
        class="mr-2 row justify-content-between align-items-center col"
      >
        <input
          v-model="todoText"
          @change="todoTextChange"
          type="text"
          class="col-7 form-control"
        />
        <div>
          <input
            v-model="completed"
            class="mr-1"
            @click="onCompleted"
            type="checkbox"
          />
          <label class>Completed</label>
        </div>
      </div>
      <div class="flex row align-items-center">
        <button @click="updateTodoI(todo)" class="btn btn-primary mx-2">
          {{ editing ? "Update" : "Edit" }}
        </button>
        <button @click="deleteTodo(todo.id)" class="btn btn-danger">
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
