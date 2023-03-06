<script lang="ts">
import EmptyState from '@/components/EmptyState.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BlogView',
  components: {
    EmptyState
  },
  setup() {
    return {};
  }
});
</script>

<template>
  <empty-state />
</template>
