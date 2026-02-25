<template>
  <div class="flex flex-wrap items-center" :class="sizeClass">
    <a
      v-for="link in links"
      :key="link.label"
      :href="link.href"
      target="_blank"
      rel="noopener noreferrer"
      class="flex items-center justify-center rounded-full border border-slate-300/80 text-slate-600 transition hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] dark:border-slate-700/60 dark:text-slate-300"
      :class="buttonClass"
      :aria-label="link.label"
    >
      <span class="sr-only">{{ link.label }}</span>
      <svg :viewBox="link.viewBox" fill="currentColor" aria-hidden="true" :class="[iconClass, link.colorClass]">
        <path :d="link.path" />
      </svg>
    </a>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

interface LinkItem {
  key: 'github' | 'linkedin' | 'twitter' | 'email' | 'instagram' | 'telegram' | 'whatsapp';
  label: string;
  href: string;
  viewBox: string;
  path: string;
  colorClass: string;
}

const props = withDefaults(
  defineProps<{ size?: 'md' | 'sm'; items?: LinkItem['key'][] }>(),
  {
    size: 'md'
  }
);

const sizeClass = computed(() => (props.size === 'sm' ? 'gap-2' : 'gap-3'));
const buttonClass = computed(() => (props.size === 'sm' ? 'h-8 w-8' : 'h-10 w-10'));
const iconClass = computed(() => (props.size === 'sm' ? 'h-4 w-4' : 'h-5 w-5'));

const allLinks: LinkItem[] = [
  {
    key: 'whatsapp',
    label: 'WhatsApp',
    href: 'https://wa.me/5567981121278?text=Olá%21%20Vim%20pelo%20site%20e%20gostaria%20de%20falar%20com%20voc%C3%AA.',
    viewBox: '0 0 24 24',
    path:
      'M12.05 2C6.56 2 2.1 6.29 2.1 11.59c0 2.08.74 4.02 1.97 5.6L2 22l4.99-1.87c1.52.8 3.25 1.25 5.06 1.25 5.49 0 9.95-4.29 9.95-9.59C22 6.29 17.54 2 12.05 2zm0 17.5c-1.62 0-3.12-.43-4.42-1.18l-.31-.18-2.96 1.11.92-2.76-.21-.29a7.7 7.7 0 01-1.43-4.42c0-4.27 3.66-7.75 8.41-7.75 4.74 0 8.4 3.48 8.4 7.75 0 4.27-3.66 7.75-8.4 7.75zm4.72-5.74c-.26-.13-1.52-.75-1.76-.84-.23-.09-.4-.13-.56.13-.16.26-.64.84-.79 1.01-.15.17-.3.2-.56.07-.26-.13-1.08-.39-2.05-1.25-.76-.67-1.27-1.49-1.42-1.75-.15-.26-.02-.4.11-.53.12-.12.26-.3.39-.45.13-.15.17-.26.26-.43.09-.17.04-.32-.02-.45-.06-.13-.56-1.32-.77-1.81-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.45.06-.69.32-.24.26-.9.88-.9 2.13 0 1.25.93 2.46 1.06 2.64.13.17 1.83 2.78 4.43 3.9.62.26 1.1.42 1.48.54.62.19 1.18.16 1.62.1.49-.07 1.52-.62 1.73-1.22.21-.6.21-1.11.15-1.22-.06-.11-.23-.17-.49-.3z',
    colorClass: 'text-emerald-500'
  },
  {
    key: 'github',
    label: 'GitHub',
    href: 'https://github.com/wendergalan',
    viewBox: '0 0 24 24',
    path:
      'M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.071 1.532 1.033 1.532 1.033.892 1.53 2.341 1.088 2.91.832.091-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.254-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.747-1.025 2.747-1.025.546 1.378.203 2.396.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.848-2.338 4.695-4.566 4.944.359.31.679.919.679 1.852 0 1.335-.012 2.412-.012 2.741 0 .268.18.58.688.481A10.019 10.019 0 0022 12.017C22 6.484 17.523 2 12 2z',
    colorClass: 'text-slate-800 dark:text-slate-200'
  },
  {
    key: 'linkedin',
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/wendergalan/',
    viewBox: '0 0 24 24',
    path:
      'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.85-3.037-1.851 0-2.135 1.445-2.135 2.939v5.667H9.354V9h3.414v1.561h.047c.476-.9 1.637-1.85 3.367-1.85 3.598 0 4.262 2.368 4.262 5.451v6.29zM5.337 7.433a2.062 2.062 0 110-4.123 2.062 2.062 0 010 4.123zM6.997 20.452H3.675V9h3.322v11.452z',
    colorClass: 'text-sky-600'
  },
  {
    key: 'twitter',
    label: 'Twitter',
    href: 'https://x.com/wbenage',
    viewBox: '0 0 24 24',
    path:
      'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.63l-5.19-6.8-5.94 6.8H1.76l7.73-8.86L1.25 2.25h6.79l4.69 6.2 5.514-6.2zm-1.16 17.52h1.832L7.09 4.126H5.13l11.954 15.644z',
    colorClass: 'text-slate-900 dark:text-slate-100'
  },
  {
    key: 'instagram',
    label: 'Instagram',
    href: 'https://www.instagram.com/wendergalan/',
    viewBox: '0 0 24 24',
    path:
      'M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm10 2a3 3 0 013 3v10a3 3 0 01-3 3H7a3 3 0 01-3-3V7a3 3 0 013-3h10zm-5 3a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm4.75-2.5a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0z',
    colorClass: 'text-pink-500'
  },
  {
    key: 'telegram',
    label: 'Telegram',
    href: 'https://t.me/wendergalan',
    viewBox: '0 0 24 24',
    path:
      'M9.993 15.674l-.43 6.043c.616 0 .884-.266 1.206-.587l2.896-2.759 6.007 4.4c1.1.607 1.884.287 2.173-1.017l3.94-18.524.001-.001c.34-1.58-.57-2.202-1.63-1.81L1.266 9.21c-1.53.596-1.507 1.45-.262 1.835l6.59 2.052L19.21 5.99c.55-.363 1.05-.162.638.201L9.993 15.674z',
    colorClass: 'text-sky-500'
  },
  {
    key: 'email',
    label: 'Email',
    href: 'mailto:contato@wendergalan.com.br',
    viewBox: '0 0 24 24',
    path: 'M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z',
    colorClass: 'text-sky-500'
  }
];

const links = computed(() => {
  if (!props.items || props.items.length === 0) {
    return allLinks;
  }

  const allowed = new Set(props.items);
  return allLinks.filter((link) => allowed.has(link.key));
});
</script>
