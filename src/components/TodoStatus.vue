<template>
  <div>
    <ul class="flex justify-center my-3">
      <li>
        <button
          @click="changeCompleted"
          :class="{
            'bg-blue-500 ': completed,
            'bg-gray-200': !completed,
          }"
          class="px-4 py-2 rounded"
        >
          Completed
        </button>
      </li>
      <li>
        <button
          @click="changeCompleted"
          :class="{
            'bg-blue-500': !completed,
            'bg-gray-200': completed,
          }"
          class="px-4 py-2 rounded"
        >
          Not Completed
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "vue";
export default {
  setup() {
    const store = useStore();
    const changeCompleted = () => {
      store.commit("change_complete");
    };
    const completed = computed(() => store.getters.completed);
    return {
      changeCompleted,
      completed,
    };
  },
};
</script>

<style scoped>
ul {
  list-style-type: none;
  display: flex;
}
button {
  outline: none;
  border: none;
  padding: 10px 20px;
  color: #000;
}
button:hover {
  outline: none;
  background-color: rgb(194, 243, 227);
}
.active {
  outline: none;
  color: white;
  background-color: rgb(0, 202, 135);
}
.active:hover {
  outline: none;
  border: none;
  padding: 10px 20px;
  color: white;
  background-color: rgb(0, 202, 135);
}
</style>
