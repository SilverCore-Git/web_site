import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/Home/Home.vue';
import JSONVueRenderer from './components/StructuredContent/StructuredContent-component.vue';
import mention_legales_config from './config/mentions_legales_config.json';
import politique_config from "./config/politique_de_confidentialite.json";


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { title: 'Accueil - Silvercore' }
  },
  {
    path: '/mentions-legales',
    name: 'mentions_legales',
    component: JSONVueRenderer,
    props: {
      config: mention_legales_config
    },
    meta: { title: 'Mentions legales - Silvercore' }
  },
  {
    path: '/politique-de-confidentialite',
    name: 'politique',
    component: JSONVueRenderer,
    props: {
      config: politique_config
    },
    meta: { title: 'Politique de confidentialite - Silvercore' }
  }
]



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      const el = document.querySelector(to.hash);
      if (el) return { top: (el as HTMLElement).offsetTop, behavior: 'smooth' };
    }
    return { top: 0 };
  }
});

router.beforeEach((to: any, _from: any, next: any) => {
  const title = to.meta.title as string;

  if (title) {
    document.title = title;

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', title);
    } else {
      const meta = document.createElement('meta');
      meta.setAttribute('property', 'og:title');
      meta.setAttribute('content', title);
      document.head.appendChild(meta);
    }
  }

  next();
});



export default router
