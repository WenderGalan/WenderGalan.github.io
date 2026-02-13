<template>
  <section id="hero" class="min-h-screen bg-white px-6 pb-16 pt-28 dark:bg-slate-950">
    <div class="mx-auto flex max-w-4xl flex-col items-center text-center">
      <div class="reveal space-y-8">
        <img
          src="/wender.jpeg"
          alt="Wender Galan"
          class="mx-auto h-36 w-36 rounded-full border border-slate-200/20 object-cover shadow-lg dark:border-slate-800 md:h-40 md:w-40"
        />
        <div class="space-y-4">
          <p class="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
            {{ t('hero.greeting') }}
          </p>
          <h1 class="text-4xl font-semibold leading-tight text-slate-900 dark:text-white md:text-5xl">
            {{ t('hero.name') }}
          </h1>
          <p class="text-xl font-semibold text-[var(--color-primary)] md:text-2xl">
            {{ t('hero.subtitle') }}
          </p>
          <p class="text-base text-slate-500 dark:text-slate-400 whitespace-pre-line">
            {{ t('hero.supporting') }}
          </p>
        </div>

        <div class="flex justify-center pt-2">
          <SocialLinks />
        </div>

        <div class="flex flex-wrap items-center justify-center gap-4 pt-2">
          <a
            href="#projects"
            class="rounded-full bg-[var(--color-primary)] px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/30 transition hover:-translate-y-0.5 hover:bg-blue-500"
          >
            {{ t('hero.primaryCta') }}
          </a>
          <a
            :href="resumeUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="rounded-full border border-slate-300 px-8 py-3 text-sm font-semibold text-slate-700 transition hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] dark:border-slate-700 dark:text-slate-200"
          >
            {{ t('hero.resumeCta') }}
          </a>
        </div>
      </div>
    </div>

    <div class="mt-16 flex justify-center">
      <div class="flex flex-col items-center gap-2 text-xs uppercase tracking-[0.2em] text-slate-500">
        <span>{{ t('hero.scroll') }}</span>
        <span class="animate-bounce text-lg">↓</span>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import SocialLinks from '../components/SocialLinks.vue';

const { t } = useI18n();

const resumeUrl = computed(() => t('hero.resumeUrl'));
</script>
