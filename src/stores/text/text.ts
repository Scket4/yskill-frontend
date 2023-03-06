import { computed } from 'vue';
import { defineStore } from 'pinia';
import { useLocalStorage } from '@vueuse/core';

import { ru } from './ru';
import { en } from './en';

import type { IText } from '@/stores/text/interface';

export const useTextStore = defineStore('text', () => {
  const languages = [
    {
      title: 'English',
      value: 'en'
    },
    {
      title: 'Русский',
      value: 'ru'
    }
  ];

  const language = useLocalStorage('language', 'ru');

  const text = computed<IText>(() => (language.value === 'ru' ? ru : en));

  const setLanguage = (lang: string) => (language.value = lang);

  return { language, languages, text, setLanguage };
});
