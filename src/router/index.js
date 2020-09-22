import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },

  {
    path: '/second-page',
    name: 'SecondPage',
    component: () =>
      // eslint-disable-next-line implicit-arrow-linebreak
      import(/* webpackChunkName: "page" */ '../views/SecondPage.vue'),

    // component: () =>
    //   import(/* webpackChunkName: "new-item" */ '../views/Home.vue'),
  },

  // {
  //   path: '/item:id',
  //   name: 'Item',
  //   component: () => import(/* webpackChunkName: "page" */ '../views/Item.vue'),
  // },
];

const router = new VueRouter({
  routes,
});

export default router;
