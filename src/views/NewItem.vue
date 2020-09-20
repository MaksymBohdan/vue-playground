<template>
  <div>
    <form class="new-item" @submit.prevent="addItem">
      <input type="text" placeholder="add item" v-model="text" />
      <button type="submit">Create</button>
    </form>
    <br />
  </div>
</template>

<script>
export default {
  name: 'new-item',
  data() {
    return {
      text: '',
    };
  },
  methods: {
    addItem() {
      console.log('form data', this.text);

      if (this.text.trim()) {
        const newItem = { id: Date.now(), name: this.text, status: false };

        this.$emit('add-item', newItem);

        this.text = '';
      }
    },
  },
};
</script>

<style scoped>
.new-item {
  border: 1px solid black;
  padding: 20px;
  display: flex;
  justify-content: center;
}
</style>
