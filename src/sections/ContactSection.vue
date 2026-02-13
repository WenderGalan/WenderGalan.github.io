<template>
  <section id="contact" class="bg-slate-50 px-6 py-20 dark:bg-slate-900">
    <div class="mx-auto max-w-5xl">
      <div class="reveal text-center">
        <h2 class="text-3xl font-semibold text-slate-900 dark:text-white">{{ t('contact.title') }}</h2>
        <p class="mt-3 text-sm text-slate-500 dark:text-slate-400">{{ t('contact.subtitle') }}</p>
      </div>

      <div class="mt-10 grid gap-4 md:grid-cols-3">
        <div class="reveal flex items-start gap-3 rounded-2xl border border-slate-200/70 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-950">
          <span class="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-[var(--color-primary)] dark:bg-slate-800">
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" class="h-4 w-4">
              <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
            </svg>
          </span>
          <div>
            <p class="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
              {{ t('contact.emailLabel') }}
            </p>
            <a
              class="mt-2 block text-base font-semibold text-slate-800 transition hover:text-[var(--color-primary)] dark:text-white"
              href="mailto:contato@wendergalan.com.br"
            >
              contato@wendergalan.com.br
            </a>
          </div>
        </div>
        <div class="reveal flex items-start gap-3 rounded-2xl border border-slate-200/70 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-950">
          <span class="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-[var(--color-primary)] dark:bg-slate-800">
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" class="h-4 w-4">
              <path d="M12.05 2C6.56 2 2.1 6.29 2.1 11.59c0 2.08.74 4.02 1.97 5.6L2 22l4.99-1.87c1.52.8 3.25 1.25 5.06 1.25 5.49 0 9.95-4.29 9.95-9.59C22 6.29 17.54 2 12.05 2zm0 17.5c-1.62 0-3.12-.43-4.42-1.18l-.31-.18-2.96 1.11.92-2.76-.21-.29a7.7 7.7 0 01-1.43-4.42c0-4.27 3.66-7.75 8.41-7.75 4.74 0 8.4 3.48 8.4 7.75 0 4.27-3.66 7.75-8.4 7.75zm4.72-5.74c-.26-.13-1.52-.75-1.76-.84-.23-.09-.4-.13-.56.13-.16.26-.64.84-.79 1.01-.15.17-.3.2-.56.07-.26-.13-1.08-.39-2.05-1.25-.76-.67-1.27-1.49-1.42-1.75-.15-.26-.02-.4.11-.53.12-.12.26-.3.39-.45.13-.15.17-.26.26-.43.09-.17.04-.32-.02-.45-.06-.13-.56-1.32-.77-1.81-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.45.06-.69.32-.24.26-.9.88-.9 2.13 0 1.25.93 2.46 1.06 2.64.13.17 1.83 2.78 4.43 3.9.62.26 1.1.42 1.48.54.62.19 1.18.16 1.62.1.49-.07 1.52-.62 1.73-1.22.21-.6.21-1.11.15-1.22-.06-.11-.23-.17-.49-.3z" />
            </svg>
          </span>
          <div>
            <p class="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
              {{ t('contact.whatsappLabel') }}
            </p>
            <a
              class="mt-2 block text-base font-semibold text-slate-800 transition hover:text-[var(--color-primary)] dark:text-white"
              :href="whatsappUrl"
              target="_blank"
              rel="noopener noreferrer"
            >
              {{ t('contact.whatsappValue') }}
            </a>
          </div>
        </div>
        <div class="reveal flex items-start gap-3 rounded-2xl border border-slate-200/70 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-950">
          <span class="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-[var(--color-primary)] dark:bg-slate-800">
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" class="h-4 w-4">
              <path d="M12 2C8.134 2 5 5.134 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.866-3.134-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" />
            </svg>
          </span>
          <div>
            <p class="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
              {{ t('contact.locationLabel') }}
            </p>
            <p class="mt-2 text-base font-semibold text-slate-800 dark:text-white">
              {{ t('contact.locationValue') }}
            </p>
          </div>
        </div>
      </div>

      <div class="reveal mt-10 flex justify-center">
        <SocialLinks size="sm" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import SocialLinks from '../components/SocialLinks.vue';

const { t } = useI18n();

const whatsappUrl = computed(() => {
  const message = encodeURIComponent(t('contact.whatsappMessage'));
  return `https://wa.me/5567981121278?text=${message}`;
});
</script>
