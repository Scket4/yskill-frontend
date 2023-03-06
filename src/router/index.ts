import { createRouter, createWebHistory } from 'vue-router';
import { useUserStore } from '@/stores/user';
import { useCoreStore } from '@/stores/core';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/home/HomeView.vue'),
      meta: {
        layout: 'HomeLayout'
      }
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/home/AboutView.vue'),
      meta: {
        layout: 'HomeLayout',
        decoration: true
      }
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: () => import('../views/home/ContactsView.vue'),
      meta: {
        layout: 'HomeLayout'
      }
    },
    {
      path: '/blog',
      name: 'blog',
      component: () => import('../views/home/BlogView.vue'),
      meta: {
        layout: 'HomeLayout'
      }
    },
    {
      path: '/auth',
      name: 'auth',
      component: () => import('../views/home/AuthView.vue'),
      meta: {
        layout: 'HomeLayout'
      },
      beforeEnter: () => {
        const { isAuth } = useUserStore();

        if (isAuth) {
          return { name: 'home' };
        }
      }
    }
  ]
});

router.beforeEach(async (to) => {
  const { setPageLoader } = useCoreStore();
  const { isAuth } = useUserStore();

  setPageLoader(true);

  setTimeout(() => {
    setPageLoader(false);
  }, 300);

  if (
    !isAuth &&
    to.name !== 'auth' &&
    to.name !== 'home' &&
    to.name !== 'about' &&
    to.name !== 'contacts' &&
    to.name !== 'blog'
  ) {
    return { name: 'auth' };
  }
});

export default router;
