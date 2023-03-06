<script lang="ts">
import { computed, defineComponent, toRefs } from 'vue';
import { useTextStore } from '@/stores/text/text';
import { DownOutlined } from '@ant-design/icons-vue';
import { useCoreStore } from '@/stores/core';
import { Dropdown, Button, Menu } from 'ant-design-vue';

export default defineComponent({
  name: 'LanguageSwitcher',
  components: {
    DownOutlined,
    ADropdown: Dropdown,
    AButton: Button,
    AMenu: Menu,
    AMenuItem: Menu.Item
  },
  setup() {
    const { languages, language, setLanguage } = toRefs(useTextStore());
    const { setLoader } = useCoreStore();

    const selectedName = computed(() => languages.value.find((lang) => lang.value === language.value)?.title);

    const onChange = (lang: string) => {
      setLoader(true);

      setTimeout(() => {
        setLanguage.value(lang);
      }, 100);

      setTimeout(() => {
        setLoader(false);
      }, 500);
    };

    return {
      selectedName,
      language,
      languages,
      onChange
    };
  }
});
</script>

<template>
  <div class="language__dropdown">
    <a-dropdown>
      <a class="ant-dropdown-link" @click.prevent>
        {{ selectedName }}
        <down-outlined />
      </a>
      <template #overlay>
        <a-menu>
          <a-menu-item v-for="lang in languages" :key="lang.value">
            <a-button type="link" @click="onChange(lang.value)">
              {{ lang.title }}
            </a-button>
          </a-menu-item>
        </a-menu>
      </template>
    </a-dropdown>
  </div>
</template>

<style lang="scss">
.language__dropdown {
  width: 110px;

  a {
    color: black;
    font-size: 17px;
    font-weight: 500;
    position: relative;
    font-family: 'Montserrat', sans-serif;

    &:hover {
      color: $actionColor;
      opacity: 0.7;
    }

    svg {
      margin-left: 6px;
    }
  }

  span {
    margin-left: 8px;
    font-size: 17px;
  }
}
</style>
