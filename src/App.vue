<template>
  <div id="app">
    <div class="taks" v-for="task in tasks" :key="task.id">
      <h1>{{ task.name }}</h1>
      <p>{{ task.description }}</p>
    </div>

    <!-- <router-view /> -->
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      tasks: [
        { id: 1, name: 'task 1', description: 'lorem lorem something about task 1' },
        { id: 2, name: 'task 2', description: 'lorem lorem something about task 2' },
        { id: 3, name: 'task 2', description: 'lorem lorem something about task 3' },
      ],
    };
  },
};
</script>

<style></style>
