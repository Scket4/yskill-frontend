<script lang="ts">
import AppLayout from '@/layouts/AppLayout.vue';
import { defineComponent, toRefs, watch } from 'vue';
import { useTitle } from '@vueuse/core';
import { useTextStore } from '@/stores/text/text';

export default defineComponent({
  name: 'App',
  components: {
    AppLayout
  },
  setup() {
    const { text } = toRefs(useTextStore());

    watch(
      () => text.value.title,
      (val: string) => {
        useTitle(val);
      },
      {
        immediate: true
      }
    );
  }
});
</script>

<template>
  <AppLayout />
</template>
