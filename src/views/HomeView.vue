<template>
  <div>
    <HeroSection />
    <AboutSection />
    <SkillsSection />
    <ExperienceSection />
    <ProjectsSection />
    <ContactSection />
  </div>
</template>

<script setup lang="ts">
import AboutSection from '../sections/AboutSection.vue';
import ContactSection from '../sections/ContactSection.vue';
import ExperienceSection from '../sections/ExperienceSection.vue';
import HeroSection from '../sections/HeroSection.vue';
import ProjectsSection from '../sections/ProjectsSection.vue';
import SkillsSection from '../sections/SkillsSection.vue';
import { useScrollReveal } from '../composables/useScrollReveal';

useScrollReveal();
</script>
