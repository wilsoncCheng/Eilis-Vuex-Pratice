import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      completed: true,
      todos: [
        {
          id: 1,
          title: "假資料一",
          complete: true,
        },
        {
          id: 2,
          title: "假資料二",
          complete: true,
        },
        {
          id: 3,
          title: "假資料三",
          complete: false,
        },
      ],
    };
  },
  getters: {
    allTodos: (state) => state.todos,
    completed: (state) => state.completed,
  },
  actions: {
    changeCompleted({ commit }) {
      commit("change_complete");
    },
    addTodo({ commit }, todo) {
      commit("add_todo", todo);
    },
    deleteTodo({ commit }, id) {
      commit("delete_todo", id);
    },
    updateTodo({ commit }, todo) {
      commit("update_todo", todo);
    },
  },
  mutations: {
    add_todo(state, todo) {
      state.todos.push(todo);
    },
    delete_todo(state, id) {
      state.todos = state.todos.filter((todo) => todo.id !== id);
    },
    update_todo(state, todo) {
      const index = state.todos.findIndex((t) => t.id === todo.id);
      if (index !== -1) {
        state.todos[index] = todo;
      }
    },
    change_complete(state) {
      state.completed = !state.completed;
    },
  },
  modules: {},
});

export default store;
