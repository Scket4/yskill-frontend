<script lang="ts">
import { defineComponent, ref, toRefs } from 'vue';
import { Form, Input, Button } from 'ant-design-vue';
import SignIn from '@/components/auth/SingIn.vue';
import { useUserStore } from '@/stores/user';
import SignUp from '@/components/auth/SingUp.vue';

export default defineComponent({
  name: 'AuthView',
  components: {
    SignUp,
    SignIn,
    AForm: Form,
    AInput: Input,
    AFormItem: Form.Item,
    AButton: Button
  },
  setup() {
    const { isEmailExist, user } = toRefs(useUserStore());
    // Модель инпута
    const emailInput = ref('');
    // При сабмите формы отсылается запрос на сервер, возвращает boolean.
    const emailExist = ref(false);
    // Заполнили ли мы поле email
    const emailCompleted = ref(false);

    const submitForm = () => {
      emailExist.value = isEmailExist.value(emailInput.value);
      emailCompleted.value = true;
    };

    // Восстанавливаем из стора введенный имеил и сбрасываем контанты
    const goBack = () => {
      emailInput.value = user.value.email;
      emailCompleted.value = false;
      emailExist.value = false;
    };

    return {
      emailInput,
      emailExist,
      emailCompleted,
      submitForm,
      goBack
    };
  }
});
</script>

<template>
  <div class="auth-view">
    <div class="auth-view__form">
      <div class="auth-view__form-container">
        <h2>Welcome back</h2>
        <p>Let start with your email. Please complete field</p>
        <template v-if="!emailCompleted">
          <a-form layout="vertical" @submit="submitForm">
            <a-form-item label="Email">
              <a-input v-model:value="emailInput" placeholder="Enter your Email" />
            </a-form-item>
          </a-form>
          <div class="auth-view__actions">
            <a-button type="primary">Continue with email</a-button>
            <a-button>Sign in with Google</a-button>
          </div>
        </template>
        <sign-in v-else-if="emailExist" @go-back="goBack" />
        <sign-up v-else @go-back="goBack" />
      </div>
    </div>
    <div class="auth-view__image">
      <span class="auth-view__image--circle" />
      <span class="auth-view__image--overlay" />
    </div>
  </div>
</template>

<style lang="scss">
.auth-view {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 0;

  h2 {
    font-size: 24px;
    font-weight: 600;
  }

  p {
    color: $descriptionColor;
    font-weight: 500;
    margin-bottom: 32px;
  }

  &__form {
    width: 50%;
    height: 80%;
    display: flex;
    align-items: center;
    justify-content: center;

    label {
      color: #344054;
      font-weight: 500;
      font-size: 16px;
    }

    input,
    .ant-form-item-control,
    .ant-form-vertical {
      width: 100%;
    }

    &-container {
      width: 360px;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
    }
  }

  &__actions {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 18px;

    button {
      width: 100%;
      height: 44px;

      &:first-child {
        margin-bottom: 16px;
      }
    }
  }

  &__image {
    width: 50%;
    height: 80%;
    background-color: #f1f2f3;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    &--circle {
      width: 200px;
      height: 200px;
      border-radius: 50%;
      background-color: $actionColor;
    }

    &--overlay {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 50%;
      backdrop-filter: blur(10px);
    }
  }
}
</style>
