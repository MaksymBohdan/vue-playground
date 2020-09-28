<template>
  <form @submit.prevent="createNewPost">
    <input type="text" v-model="title" />
    <input type="text" v-model="body" />
    <button type="submit">Create</button>
  </form>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  name: 'newpost',
  data() {
    return {
      title: '',
      body: '',
    };
  },

  methods: {
    ...mapMutations(['createPost']),
    createNewPost() {
      const newPost = {
        title: this.title,
        body: this.body,
        id: Date.now(),
      };

      console.log('newPost', newPost);
      this.createPost(newPost);
      this.title = '';
      this.body = '';
    },
  },
};
</script>

<style scoped>
form {
  background: burlywood;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
}
</style>
