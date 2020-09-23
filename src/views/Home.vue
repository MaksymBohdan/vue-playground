<template>
  <div>
    <router-link to="/second-page">go to second page</router-link>
    <NewItem @add-item="addItem" />
    <select v-model="filter">
      <option value="all">all</option>
      <option value="completed">completed</option>
      <option value="not-completed">not-completed</option>
    </select>
    <Loader v-if="loading" />
    <List
      v-bind:items="filteredTodo"
      @remove-item="removeItem"
      v-else-if="items.length"
    />
    <h1 v-else>No items</h1>
  </div>
</template>

<script>
import List from '../components/List.vue';
import NewItem from '../components/NewItem.vue';
import Loader from '../components/Loader.vue';

export default {
  name: 'app',
  components: {
    List,
    NewItem,
    Loader,
  },
  computed: {
    filteredTodo() {
      if (this.filter === 'all') {
        return this.items;
      }
      if (this.filter === 'completed') {
        return this.items.filter((i) => i.completed);
      }

      return this.items.filter((i) => !i.completed);
    },
  },
  // watch: {
  //   filter(value) {
  //     console.log(value);
  //   },
  // },
  data() {
    return {
      items: [],
      loading: false,
      filter: 'all',
    };
  },
  mounted() {
    this.loading = true;
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=3')
      .then((response) => response.json())
      .then((todos) => {
        setTimeout(() => {
          this.items = todos;
          this.loading = false;
        }, 1000);
      });
  },
  methods: {
    removeItem(id) {
      this.items = this.items.filter((i) => i.id !== id);
    },
    addItem(newItem) {
      this.items.unshift(newItem);
    },
  },
};
</script>

<style></style>
