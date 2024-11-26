import { useAuthStore } from '~/composables/stores/useAuthStore';

export default defineNuxtRouteMiddleware((to, from) => {
  console.log('defineNuxtRouteMiddleware');
  const store = useAuthStore();

  if (to.name === 'sign-up' || to.name === 'signup') {
  } else {
    if (!store.getAccessToken) {
      // return navigateTo('/signup');
    }

    if (to.name?.toString()?.indexOf('admin') !== -1) {
      return navigateTo('/');
    }

  }
});
