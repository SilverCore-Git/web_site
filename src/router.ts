import { createRouter, createWebHistory } from 'vue-router'

import Home from './views/Home.vue'
import Confidential from './views/Confidential.vue';
import Mentions_legales from './views/Mentions_legales.vue';

const routes = [
  { 
    path: '/', 
    name: 'Home', 
    component: Home,
    props: {},
    meta: { title: 'Silvercore' }
  },

  { 
    path: '/politique-de-confidentialite', 
    name: 'confidential', 
    component: Confidential,
    props: {},
    meta: { title: 'Silvercore - confidentialité' }
  },
  { 
    path: '/mentions-legales', 
    name: 'mentions-legales', 
    component: Mentions_legales,
    props: {},
    meta: { title: 'Silvercore - mentions legales' }
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  from;
  const title = to.meta.title as string;
  if (title) {
    document.title = title;
  }
  next();
});

export default router
