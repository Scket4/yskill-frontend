<script lang="ts">
import { computed, defineComponent, toRefs, PropType } from 'vue';
import LanguageSwitcher from '@/components/header/LanguagesSwitcher.vue';
import { useTextStore } from '@/stores/text/text';
import { useUserStore } from '@/stores/user';

interface IMenuItem {
  title: string;
  path: string;
}

export default defineComponent({
  name: 'HeaderComponent',
  components: { LanguageSwitcher },
  props: {
    menuItems: {
      type: Array as PropType<IMenuItem[]>,
      default: () => [],
      required: true
    }
  },
  setup() {
    const { text } = toRefs(useTextStore());
    const { isAuth, user } = toRefs(useUserStore());

    const usernameText = computed(() => (isAuth.value ? user.value.firstName : text.value.home.menu.auth));
    const usernameLink = computed(() => (isAuth.value ? '/profile' : '/auth'));

    return {
      usernameText,
      usernameLink: usernameLink.value
    };
  }
});
</script>

<template>
  <header class="header-component">
    <ul class="header-component__menu">
      <li v-for="item in menuItems" :key="item.path">
        <router-link :to="item.path" active-class="header-component__menu--active">{{ item.title }}</router-link>
      </li>
    </ul>
    <div class="header-component__tool">
      <language-switcher />
      <ul class="header-component__menu">
        <li>
          <router-link :to="usernameLink" active-class="header-component__menu--active">{{ usernameText }}</router-link>
        </li>
      </ul>
    </div>
  </header>
</template>

<style lang="scss">
@import './styles/Header';
</style>
