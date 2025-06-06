
import { createRouter, createWebHistory } from 'vue-router';

// views
import Home_view from './views/Home.vue';
  
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home_view,
    props: {},
    meta: { title: 'Accueil - silvercore' }
  },
];

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

export default router;
