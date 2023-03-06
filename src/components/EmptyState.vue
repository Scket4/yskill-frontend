<script lang="ts">
import { defineComponent, toRefs } from 'vue';
import { useTextStore } from '@/stores/text/text';

export default defineComponent({
  name: 'EmptyState',
  setup() {
    const { text } = toRefs(useTextStore());

    return {
      text
    };
  }
});
</script>

<template>
  <div class="empty-state">
    <div class="empty-state__image"></div>
    <h2 class="empty-state__title">{{ text.empty.title }}</h2>
    <p class="empty-state__description">{{ text.empty.description }}</p>
  </div>
</template>

<style lang="scss">
.empty-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &__image {
    background-image: url('@/assets/images/EmptyState.svg');
    width: 300px;
    height: 400px;
    background-size: cover;
    background-repeat: no-repeat;
  }

  &__title {
    font-size: 48px;
    font-weight: bold;
    color: $actionColor;
  }

  &__description {
    font-size: 24px;
    font-weight: 600;
  }
}
</style>
