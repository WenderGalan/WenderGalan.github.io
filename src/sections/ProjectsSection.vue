<template>
  <section id="projects" class="bg-white px-6 py-20 dark:bg-slate-950">
    <div class="mx-auto max-w-6xl">
      <div class="reveal text-center">
        <h2 class="text-3xl font-semibold text-slate-900 dark:text-white">{{ t('projects.title') }}</h2>
      </div>

      <div class="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <article
          v-for="project in projects"
          :key="project.name"
          class="reveal overflow-hidden rounded-2xl border border-slate-200/70 bg-white shadow-sm transition hover:-translate-y-1 hover:border-[var(--color-primary)]/60 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900"
        >
          <img :src="project.image" :alt="project.name" class="h-44 w-full object-cover" />
          <div class="p-6">
            <h3 class="text-lg font-semibold text-slate-800 dark:text-white">{{ project.name }}</h3>
            <p class="mt-2 text-sm text-slate-600 dark:text-slate-300">{{ project.description }}</p>
            <div class="mt-4 flex flex-wrap gap-2">
              <span
                v-for="tech in project.technologies"
                :key="tech"
                class="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-300"
              >
                {{ tech }}
              </span>
            </div>
            <a
              :href="project.githubUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="mt-6 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:-translate-y-0.5 hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] dark:border-slate-700 dark:bg-slate-950 dark:text-slate-200"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" class="h-4 w-4">
                <path
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.071 1.532 1.033 1.532 1.033.892 1.53 2.341 1.088 2.91.832.091-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.254-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.747-1.025 2.747-1.025.546 1.378.203 2.396.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.848-2.338 4.695-4.566 4.944.359.31.679.919.679 1.852 0 1.335-.012 2.412-.012 2.741 0 .268.18.58.688.481A10.019 10.019 0 0022 12.017C22 6.484 17.523 2 12 2z"
                />
              </svg>
              {{ t('projects.cta') }}
            </a>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { projects } from '../data/projects';

const { t } = useI18n();
</script>

