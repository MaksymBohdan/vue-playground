import Vue from 'vue';
import VueRouter from 'vue-router';
import NewTask from '../views/NewTask.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'NewTask',
    component: NewTask,
  },
  {
    path: '/list',
    name: 'List',
    component: () => import(/* webpackChunkName: "list" */ '../views/List.vue'),
  },
  {
    path: '/page:id',
    name: 'Page',
    component: () => import(/* webpackChunkName: "page" */ '../views/Page.vue'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
