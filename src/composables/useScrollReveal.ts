import { onBeforeUnmount, onMounted } from 'vue';

export const useScrollReveal = () => {
  let observer: IntersectionObserver | null = null;

  const handleIntersect: IntersectionObserverCallback = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer?.unobserve(entry.target);
      }
    });
  };

  onMounted(() => {
    observer = new IntersectionObserver(handleIntersect, {
      threshold: 0.15
    });

    document.querySelectorAll('.reveal').forEach((element) => {
      observer?.observe(element);
    });
  });

  onBeforeUnmount(() => {
    observer?.disconnect();
  });
};

