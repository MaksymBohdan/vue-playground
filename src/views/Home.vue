<template>
  <div>
    <NewItem @add-item="addItem" />
    <List v-bind:items="items" @remove-item="removeItem" />
  </div>
</template>

<script>
import List from '../components/List.vue';
import NewItem from '../components/NewItem.vue';

export default {
  name: 'app',
  components: {
    List,
    NewItem,
  },

  data() {
    return {
      items: [],
    };
  },
  mounted() {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=3')
      .then((response) => response.json())
      .then((todos) => {
        this.items = todos;
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
