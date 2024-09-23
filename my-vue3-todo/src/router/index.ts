import { createRouter, createWebHistory } from 'vue-router';

import MainTodo from '@/views/MainTodo.vue';

const router = createRouter({
  history : createWebHistory(),
  routes: [
  {
    path: '/',
    name: 'top',
    component: MainTodo
  },
  {
    path: '/mainTodo',
    name: 'mainTodo',
    component: MainTodo
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/About.vue')
  },
  {
    path: '/blog',
    name: 'blog',
    component: () => import('@/views/Blog.vue')
  },
  {
    path: '/blog/:id',
    name: 'blogDtl',
    component: () => import('@/views/BlogDtl.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'notFound',
    component: () => import('@/views/NotFound.vue')
  }
]
});

export default router;