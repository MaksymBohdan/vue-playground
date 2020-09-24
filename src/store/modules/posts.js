export default {
  state: {
    posts: [],
  },

  actions: {
    async fetchPost(ctx) {
      const res = await fetch(
        'https://jsonplaceholder.typicode.com/posts?_limit=10',
      );

      const posts = await res.json();

      ctx.commit('updatePosts', posts);
    },
  },
  mutations: {
    updatePosts(state, posts) {
      state.posts = posts;
    },
  },
  getters: {
    allPosts(state) {
      return state.posts;
    },
  },
  modules: {},
};
