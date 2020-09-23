<template>
  <li>
    <span v-bind:class="{ completed: item.completed }">
      <input type="checkbox" v-on:change="item.completed = !item.completed" />
      <strong>{{ idx }}</strong>
      {{ item.title | uppercase }}
    </span>

    <button class="rm" v-on:click="$emit('remove-item', item.id)">
      &times;
    </button>
  </li>
</template>

<script>
export default {
  filters: {
    uppercase(value) {
      return value.toUpperCase();
    },
  },
  props: {
    item: {
      type: Object,
      required: true,
    },
    idx: { type: Number },
  },
};
</script>

<style scoped>
li {
  border: 1px solid black;
  padding: 5px 20px;
  margin-bottom: 5px;
  display: flex;
  justify-content: space-between;
}

.rm {
  background-color: red;
  color: white;
  border-radius: 50%;
  font-weight: bold;
}

.completed {
  text-decoration: line-through;
}
</style>
