<template>
  <section id="about" class="bg-slate-50 px-6 py-20 dark:bg-slate-900">
    <div class="reveal mx-auto max-w-4xl text-center">
      <h2 class="text-3xl font-semibold text-slate-900 dark:text-white">{{ t('about.title') }}</h2>
      <p class="mt-6 text-base leading-relaxed text-slate-600 dark:text-slate-300">
        {{ t('about.paragraphOne') }}
      </p>
      <p class="mt-4 text-base leading-relaxed text-slate-500 dark:text-slate-400">
        {{ t('about.paragraphTwo') }}
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>

