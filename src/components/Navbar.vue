<template>
  <header class="sticky top-0 z-50 border-b border-slate-200/10 bg-white/70 backdrop-blur dark:border-slate-800/80 dark:bg-slate-950/70">
    <nav class="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
      <a href="#hero" class="text-lg font-semibold tracking-wide">WG.</a>

      <div class="hidden items-center gap-8 md:flex">
        <a
          v-for="link in navLinks"
          :key="link.id"
          :href="`#${link.id}`"
          class="text-sm font-medium text-slate-600 transition hover:text-[var(--color-primary)] dark:text-slate-300"
        >
          {{ t(link.labelKey) }}
        </a>
      </div>

      <div class="hidden items-center gap-3 md:flex">
        <button
          type="button"
          class="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-700 transition hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] dark:border-slate-700 dark:text-slate-200"
          @click="toggleLanguage"
        >
          {{ language.toUpperCase() }} / {{ language === 'en' ? 'PT' : 'EN' }}
        </button>
        <button
          type="button"
          class="flex items-center gap-2 rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-700 transition hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] dark:border-slate-700 dark:text-slate-200"
          @click="toggleTheme"
        >
          <span class="sr-only">Toggle theme</span>
          <span>{{ isDark ? 'Dark' : 'Light' }}</span>
          <span class="text-sm">{{ isDark ? '☾' : '☀' }}</span>
        </button>
      </div>

      <button
        type="button"
        class="flex items-center justify-center rounded-md border border-slate-200 p-2 text-slate-700 dark:border-slate-700 dark:text-slate-200 md:hidden"
        @click="isMenuOpen = !isMenuOpen"
      >
        <span class="sr-only">Toggle menu</span>
        <span v-if="!isMenuOpen">☰</span>
        <span v-else>✕</span>
      </button>
    </nav>

    <div v-if="isMenuOpen" class="border-t border-slate-200/10 bg-white/90 px-6 py-4 dark:border-slate-800 dark:bg-slate-950/90 md:hidden">
      <div class="flex flex-col gap-4">
        <a
          v-for="link in navLinks"
          :key="link.id"
          :href="`#${link.id}`"
          class="text-sm font-medium text-slate-700 transition hover:text-[var(--color-primary)] dark:text-slate-200"
          @click="closeMenu"
        >
          {{ t(link.labelKey) }}
        </a>
        <div class="flex items-center gap-3 pt-2">
          <button
            type="button"
            class="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-700 transition hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] dark:border-slate-700 dark:text-slate-200"
            @click="toggleLanguage"
          >
            {{ language.toUpperCase() }} / {{ language === 'en' ? 'PT' : 'EN' }}
          </button>
          <button
            type="button"
            class="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-700 transition hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] dark:border-slate-700 dark:text-slate-200"
            @click="toggleTheme"
          >
            {{ isDark ? 'Dark' : 'Light' }}
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { useLanguage } from '../composables/useLanguage';
import { useTheme } from '../composables/useTheme';

const { t } = useI18n();
const { language, toggleLanguage } = useLanguage();
const { isDark, toggleTheme } = useTheme();
const isMenuOpen = ref(false);

const navLinks = [
  { id: 'about', labelKey: 'nav.about' },
  { id: 'skills', labelKey: 'nav.skills' },
  { id: 'experience', labelKey: 'nav.experience' },
  { id: 'projects', labelKey: 'nav.projects' },
  { id: 'contact', labelKey: 'nav.contact' }
];

const closeMenu = () => {
  isMenuOpen.value = false;
};
</script>

