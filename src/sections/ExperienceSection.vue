<template>
  <section id="experience" class="bg-slate-50 px-6 py-20 dark:bg-slate-900">
    <div class="mx-auto max-w-6xl">
      <div class="reveal text-center">
        <h2 class="text-3xl font-semibold text-slate-900 dark:text-white">{{ t('experience.title') }}</h2>
      </div>

      <div class="relative mt-12 space-y-10 md:space-y-0">
        <div class="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-slate-200 dark:bg-slate-700 z-0"></div>
        <div
          v-for="(item, index) in timeline"
          :key="item.roleKey"
          class="reveal relative md:grid md:grid-cols-2 md:gap-8"
        >
          <span
            class="absolute left-1/2 top-0 z-20 h-3 w-3 -translate-x-1/2 rounded-full bg-[var(--color-primary)] shadow-sm shadow-blue-500/40"
            aria-hidden="true"
          ></span>
          <div
            class="relative pb-10 md:pb-0"
            :class="index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:order-2 md:pl-8'"
          >
            <div
              class="relative z-10 mx-auto max-w-md rounded-2xl border border-slate-200/70 bg-white p-6 text-left shadow-sm dark:border-slate-800 dark:bg-slate-950"
              :class="index % 2 === 0 ? 'md:ml-auto' : 'md:mr-auto'"
            >
              <p class="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-primary)]">
                {{ item.startDate }} - {{ item.endDate ?? t('experience.present') }}
              </p>
              <h3 class="mt-3 text-lg font-semibold text-slate-800 dark:text-white">{{ t(item.roleKey) }}</h3>
              <p class="text-sm font-medium text-slate-500 dark:text-slate-400">
                {{ t(item.companyKey) }} · {{ t(item.locationKey) }}
              </p>
              <p class="mt-3 w-full text-justify text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                {{ t(item.descriptionKey) }}
              </p>
            </div>
          </div>
          <div class="hidden md:block"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { experience } from '../data/experience';

const { t } = useI18n();
const timeline = computed(() => [...experience]);
</script>
