<script lang="ts">
import { defineComponent, toRefs } from 'vue';
import { useTextStore } from '@/stores/text/text';
import { Button } from 'ant-design-vue';

export default defineComponent({
  name: 'HomeView',
  components: { AButton: Button },
  setup() {
    const { text } = toRefs(useTextStore());

    return {
      text
    };
  }
});
</script>

<template>
  <main class="home-view">
    <div class="home-view__content">
      <h1>{{ text.home.home.title }}</h1>
      <span v-html="text.home.home.description"></span>
      <div class="home-view__actions">
        <router-link to="/auth">
          <a-button type="primary" size="large" class="home-view__button">
            {{ text.home.home.button }}
          </a-button></router-link
        >

        <router-link to="/about">
          <a-button type="ghost" size="large" class="home-view__button">
            {{ text.home.home.more }}</a-button
          ></router-link
        >
      </div>
    </div>
    <div class="home-view__image">
      <img alt="image" src="@/assets/images/Home.jpg" />
    </div>
  </main>
</template>

<style lang="scss">
.home-view {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;

  &__content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    max-width: 50%;

    button {
      margin-top: 48px;
      width: 200px;
      background-color: $actionColor !important;
    }
  }

  &__image {
    position: relative;

    img {
      z-index: 2;
      width: 600px;
      border-radius: 10px;
    }

    &:after {
      width: 100%;
      height: 100%;
      position: absolute;
      content: '';
      background-color: $actionColor;
      z-index: 1;
      bottom: -20px;
      left: -20px;
      border-radius: 8px;
    }
  }

  .ant-btn-ghost {
    background: transparent !important;
  }

  &__actions {
    display: flex;

    button {
      margin-left: 16px;
    }
  }

  h1 {
    font-size: 48px;
    font-weight: bold;
    color: $actionColor;
  }

  span {
    font-size: 18px;
    font-weight: 500;
  }
}
</style>
