<template>
  <div id="app">
    <!-- <router-view /> -->
    <NewItem @add-item="addItem" />
    <List v-bind:items="items" @remove-item="removeItem" />
  </div>
</template>

<script>
import List from './views/List.vue';
import NewItem from './views/NewItem.vue';

export default {
  name: 'app',
  components: {
    List,
    NewItem,
  },
  data() {
    return {
      items: [
        { id: 1, name: 'aaaaa', status: false },
        { id: 2, name: 'bbbbb', status: false },
        { id: 3, name: 'ccccc ', status: false },
      ],
    };
  },
  methods: {
    removeItem(id) {
      console.log('id', id);
      this.items = this.items.filter((i) => i.id !== id);
    },
    addItem(newItem) {
      this.items.unshift(newItem);
    },
  },
};
</script>

<style></style>
