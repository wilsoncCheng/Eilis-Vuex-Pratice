<template>
  <div>
    <ul class="row justify-content-center my-3">
      <li>
        <button @click="changeCompleted" :class="{ active: completed }">
          Completed
        </button>
      </li>
      <li>
        <button @click="changeCompleted" :class="{ active: !completed }">
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
      store.dispatch("changeCompleted");
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
