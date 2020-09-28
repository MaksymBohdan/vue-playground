export default {
  state: {
    posts: [],
  },

  actions: {
    async fetchPost(ctx, limit = 3) {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_limit=${limit}`,
      );
      const posts = await res.json();
      // const { commit, getters, dispath } = ctx;
      ctx.commit('updatePosts', posts);
    },
  },
  mutations: {
    updatePosts(state, posts) {
      state.posts = posts;
    },
    createPost(state, newPost) {
      state.posts.unshift(newPost);
    },
  },
  getters: {
    allPosts(state) {
      return state.posts;
    },

    getPostsAmount({ posts }, getters) {
      return { actual: posts.length, validate: getters.validPost.length };
    },

    validPost({ posts }) {
      return posts.filter(({ title, body }) => title && body);
    },
  },
  modules: {},
};
