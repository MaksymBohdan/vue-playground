<template>
  <div>
    <NewPost />
    <h1>Amount of actual posts: {{ getPostsAmount.actual }}</h1>
    <h1>Amount of validated posts: {{ getPostsAmount.validate }}</h1>

    <ul class="list">
      <li class="item" :key="post.id" v-for="post of validPost">
        <h1>{{ post.title }}</h1>
        <p>{{ post.body }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import NewPost from '../components/NewPost.vue';

export default {
  name: 'home',
  components: { NewPost },
  computed: mapGetters(['allPosts', 'getPostsAmount', 'validPost']),
  watch: {},
  methods: mapActions(['fetchPost']),
  mounted() {
    this.fetchPost(4);
  },
  // WITHOUT GETTERS
  // computed: {
  // allPosts() {
  //   return this.$store.getters.getAllPosts;
  // },
  // },

  // data() {}, local data
  // mounted() {
  //   this.$store.dispatch('fetchPost');
  // },
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
