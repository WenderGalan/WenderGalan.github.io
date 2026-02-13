<template>
  <footer class="border-t border-slate-200/10 py-8 text-center text-xs text-slate-500 dark:border-slate-800">
    {{ t('footer.copyright') }}
  </footer>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>

