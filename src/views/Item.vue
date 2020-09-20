<template>
  <li>
    <span v-bind:class="{ completed: item.status }">
      <input type="checkbox" v-on:change="item.status = !item.status" />
      <strong>{{ idx }}</strong>
      {{ item.name }}
    </span>

    <button class="rm" v-on:click="$emit('remove-item', item.id)">
      &times;
    </button>
  </li>
</template>

<script>
export default {
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
