import { computed, ref, watch } from 'vue';

const STORAGE_KEY = 'wg-theme';
const initial = (localStorage.getItem(STORAGE_KEY) as 'dark' | 'light') || 'dark';
const theme = ref<'dark' | 'light'>(initial);

const applyThemeClass = (value: 'dark' | 'light') => {
  const root = document.documentElement;
  if (value === 'dark') {
    root.classList.add('dark');
  } else {
    root.classList.remove('dark');
  }
};

applyThemeClass(theme.value);

watch(theme, (value) => {
  localStorage.setItem(STORAGE_KEY, value);
  applyThemeClass(value);
});

export const useTheme = () => {
  const isDark = computed(() => theme.value === 'dark');
  const toggleTheme = () => {
    theme.value = theme.value === 'dark' ? 'light' : 'dark';
  };

  return {
    theme,
    isDark,
    toggleTheme
  };
};

