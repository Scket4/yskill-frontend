<script lang="ts">
import { computed, defineComponent, markRaw, toRefs } from 'vue';
import { useRoute, RouterView } from 'vue-router';
import { asyncComputed } from '@vueuse/core';
import { useCoreStore } from '@/stores/core';

export default defineComponent({
  name: 'AppLayout',
  components: {
    RouterView
  },
  setup() {
    const route = useRoute();
    const { loader, pageLoader } = toRefs(useCoreStore());

    const layout = asyncComputed(async () => {
      const layout = route?.meta?.layout;

      if (layout) {
        const component = await import(/* @vite-ignore */ `../layouts/${layout}.vue`);

        return markRaw(component.default);
      }

      return 'div';
    });

    const loaderClass = computed(() => ({
      'loader-overlay--active': loader.value,
      'loader-overlay--page': pageLoader.value
    }));

    return {
      layout,
      loaderClass,
      loader
    };
  }
});
</script>

<template>
  <div class="main-layout">
    <div class="loader-overlay" :class="loaderClass">
      <div v-show="loader" role="progressbar" aria-valuetext="Loading" aria-label="Loading" class="loader">
        <svg viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10.5" />
        </svg>
      </div>
    </div>
    <div class="main-layout__container">
      <component :is="layout">
        <router-view />
      </component>
    </div>
  </div>
</template>

<style lang="scss">
@import './styles/AppLayout';
</style>
