<template>
  <div
    class="min-h-screen bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100"
    :style="{ '--color-primary': themeConfig.primary }"
  >
    <Navbar />
    <main>
      <RouterView />
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router';
import Footer from './components/Footer.vue';
import Navbar from './components/Navbar.vue';
import { useTheme } from './composables/useTheme';
import { theme as themeConfig } from './theme';

useTheme();
</script>

