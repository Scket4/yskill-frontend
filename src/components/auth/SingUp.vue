<script lang="ts">
import { defineComponent } from 'vue';
import { Button } from 'ant-design-vue';

export default defineComponent({
  name: 'SignUp',
  components: { AButton: Button },
  emits: ['go-back'],
  setup(_, { emit }) {
    const goBack = () => emit('go-back');

    return {
      goBack
    };
  }
});
</script>

<template>
  <div>
    <h1>signUp</h1>
    <a-button @click="goBack">Go back</a-button>
  </div>
</template>
