<script lang="ts">
import { defineComponent, toRefs } from 'vue';
import { useTextStore } from '@/stores/text/text';

export default defineComponent({
  name: 'AboutView',
  setup() {
    const { text } = toRefs(useTextStore());
    return {
      text
    };
  }
});
</script>

<template>
  <div class="about">
    <h1>{{ text.home.about.who }}</h1>
    <p v-html="text.home.about.whoDescription"></p>
    <h2>{{ text.home.about.goals }}</h2>
    <p v-html="text.home.about.goalsDescription"></p>
  </div>
</template>

<style lang="scss">
@import './styles/AboutView';
</style>
