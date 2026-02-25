<template>
  <section id="skills" class="bg-white px-6 py-20 dark:bg-slate-950">
    <div class="mx-auto max-w-6xl">
      <div class="reveal text-center">
        <h2 class="text-3xl font-semibold text-slate-900 dark:text-white">{{ t('skills.title') }}</h2>
        <p class="mt-3 text-sm text-slate-500 dark:text-slate-400 whitespace-pre-line">{{ t('hero.supporting') }}</p>
      </div>

      <div class="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <article
          v-for="item in skillCards"
          :key="item.key"
          class="reveal rounded-2xl border border-slate-200/70 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-[var(--color-primary)]/60 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900"
        >
          <h3 class="text-lg font-semibold text-slate-800 dark:text-white">
            {{ t(item.labelKey) }}
          </h3>
          <div class="mt-4 flex flex-wrap gap-2">
            <span
              v-for="skill in item.values"
              :key="skill.name"
              class="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-200"
            >
              <i
                :class="['fa-fw', skill.icon]"
                :style="{ color: skill.color }"
                aria-hidden="true"
              ></i>
              {{ skill.name }}
            </span>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { skills } from '../data/skills';

const { t } = useI18n();

const skillCards = computed(() => [
  { key: 'backend', labelKey: 'skills.categories.backend', values: skills.backend },
  { key: 'frontend', labelKey: 'skills.categories.frontend', values: skills.frontend },
  { key: 'databases', labelKey: 'skills.categories.databases', values: skills.databases },
  { key: 'devops', labelKey: 'skills.categories.devops', values: skills.devops },
  { key: 'tools', labelKey: 'skills.categories.tools', values: skills.tools },
  {
    key: 'languages',
    labelKey: 'skills.languages.title',
    values: [
      { name: t('skills.languages.items.portuguese'), color: '#22c55e', icon: 'fa-solid fa-language' },
      { name: t('skills.languages.items.english'), color: '#3b82f6', icon: 'fa-solid fa-language' }
    ]
  }
]);
</script>
