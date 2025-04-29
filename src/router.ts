
import { createRouter, createWebHistory } from 'vue-router';

// views
import Home_view from './views/Home.vue';

import Services_card from './components/Services_card.vue';
  
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home_view,
    props: {},
    meta: { title: 'Accueil - silvercore' }
  },

  {
    path: '/dd',
    name: 'Services_card',
    component: Services_card,
    props: {},
    meta: { title: 'Services_card - silvercore' }
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
