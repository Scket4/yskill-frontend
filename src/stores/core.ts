import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useCoreStore = defineStore('core', () => {
  const loader = ref(false);
  const pageLoader = ref(false);

  const setLoader = (value: boolean) => {
    loader.value = value;
  };

  const setPageLoader = (value: boolean) => {
    pageLoader.value = value;
  };

  return { loader, pageLoader, setLoader, setPageLoader };
});
