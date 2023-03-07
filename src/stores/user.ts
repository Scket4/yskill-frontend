import { computed, reactive } from 'vue';
import { defineStore } from 'pinia';
import { useLocalStorage } from '@vueuse/core';

import type VueUseTypes from '@vueuse/core';

interface IUser {
  id: number | null;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  role: string;
  token: VueUseTypes.RemovableRef<string | null>;
}

export const useUserStore = defineStore('user', () => {
  const user = reactive<IUser>({
    id: null,
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    role: '',
    token: useLocalStorage('token', null)
  });

  const isAuth = computed(() => !!user.token);

  const isEmailExist = (email: string): boolean => {
    // Запрос на сервер. Если есть - получаем пользователя и возаращаем true иначе false. Если фолс - записываем в стор email
    user.email = email;

    return email === 'alexey@mail.com';
  };

  return { user, isAuth, isEmailExist };
});
