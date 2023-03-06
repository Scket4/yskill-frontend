<script lang="ts">
import { computed, defineComponent, toRefs } from 'vue';
import { useTextStore } from '@/stores/text/text';
import { useRoute } from 'vue-router';
import HeaderComponent from '@/components/header/Header.vue';

export default defineComponent({
  name: 'HomeLayout',
  components: { HeaderComponent },
  setup() {
    const text = useTextStore();
    const route = toRefs(useRoute());

    const classes = computed(() => ({
      'home-layout--image': !!route?.meta?.value.decoration
    }));

    const menuItems = computed(() => [
      {
        title: text.text.home.menu.home,
        path: '/'
      },
      {
        title: text.text.home.menu.about,
        path: '/about'
      },
      {
        title: text.text.home.menu.blog,
        path: '/blog'
      },
      {
        title: text.text.home.menu.contacts,
        path: '/contacts'
      }
    ]);

    return {
      menuItems,
      classes
    };
  }
});
</script>

<template>
  <section class="home-layout" :class="classes">
    <header-component :menu-items="menuItems" />
    <div style="width: 100%; height: 100%; display: flex; align-items: center; justify-content: center">
      <slot />
    </div>
  </section>
</template>

<style lang="scss">
@import './styles/HomeLayout';
</style>
