<template>
  <ul>
    <Item
      :key="item.id"
      v-for="(item, idx) of items"
      v-bind:idx="idx"
      v-bind:item="item"
      v-on:remove-item="removeItem"
    />
  </ul>
</template>

<script>
import Item from './Item.vue';

export default {
  name: 'list',
  props: ['items'],
  components: {
    Item,
  },
  methods: {
    removeItem(id) {
      this.$emit('remove-item', id);
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
