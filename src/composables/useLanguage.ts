import { ref, watch } from 'vue';
import { i18n } from '../i18n';

const STORAGE_KEY = 'wg-lang';
const initial = (localStorage.getItem(STORAGE_KEY) as 'en' | 'pt') || 'en';
const language = ref<'en' | 'pt'>(initial);

i18n.global.locale.value = language.value;

watch(language, (value) => {
  localStorage.setItem(STORAGE_KEY, value);
  i18n.global.locale.value = value;
});

export const useLanguage = () => {
  const toggleLanguage = () => {
    language.value = language.value === 'en' ? 'pt' : 'en';
  };

  return {
    language,
    toggleLanguage
  };
};

