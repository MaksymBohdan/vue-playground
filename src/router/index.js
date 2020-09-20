import Vue from 'vue';
import VueRouter from 'vue-router';
import List from '../views/List.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'List',
    component: List,
  },

  {
    path: '/new-item',
    name: 'NewItem',
    component: () => import(/* webpackChunkName: "new-item" */ '../views/NewItem.vue'),
  },

  {
    path: '/item:id',
    name: 'Item',
    component: () => import(/* webpackChunkName: "page" */ '../views/Item.vue'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
