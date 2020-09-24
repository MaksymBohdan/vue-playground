<template>
  <ul class="list">
    <li class="item" :key="post.id" v-for="post of allPosts">
      <h1>{{ post.title }}</h1>
      <p>{{ post.body }}</p>
    </li>
  </ul>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'home',
  components: {},
  // WITHOUT GETTERS
  // computed: {
  // allPosts() {
  //   return this.$store.getters.getAllPosts;
  // },
  // },

  computed: mapGetters(['allPosts']),
  watch: {},
  // data() {}, local data
  mounted() {
    this.$store.dispatch('fetchPost');
  },
  methods: {},
};
</script>

<style>
.list {
  list-style: none;
  margin: 0;
  padding: 0;
}

.item {
  width: 400px;
  border: 1px solid black;
  padding: 20px 5px;
  text-align: center;
  margin: 0 auto 10px;
}
</style>
