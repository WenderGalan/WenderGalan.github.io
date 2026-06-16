import { computed, watch } from 'vue';
import { i18n } from '../i18n';
import { useLanguage } from './useLanguage';

const SITE_URL = 'https://wendergalan.com.br/';
const IMAGE_URL = `${SITE_URL}wender.jpeg`;

const SOCIAL_URLS = [
  'https://github.com/wendergalan',
  'https://www.linkedin.com/in/wendergalan/',
  'https://x.com/wbenage',
  'https://www.instagram.com/wendergalan/',
  'https://t.me/wendergalan'
];

const upsertMeta = (selector: string, attributes: Record<string, string>) => {
  let element = document.head.querySelector<HTMLMetaElement>(selector);

  if (!element) {
    element = document.createElement('meta');
    document.head.appendChild(element);
  }

  Object.entries(attributes).forEach(([key, value]) => {
    element?.setAttribute(key, value);
  });
};

const upsertLink = (selector: string, attributes: Record<string, string>) => {
  let element = document.head.querySelector<HTMLLinkElement>(selector);

  if (!element) {
    element = document.createElement('link');
    document.head.appendChild(element);
  }

  Object.entries(attributes).forEach(([key, value]) => {
    element?.setAttribute(key, value);
  });
};

const upsertJsonLd = (id: string, payload: unknown) => {
  let element = document.head.querySelector<HTMLScriptElement>(`script[data-seo="${id}"]`);

  if (!element) {
    element = document.createElement('script');
    element.type = 'application/ld+json';
    element.dataset.seo = id;
    document.head.appendChild(element);
  }

  element.textContent = JSON.stringify(payload);
};

export const useSeo = () => {
  const { language } = useLanguage();
  const locale = computed(() => language.value);

  watch(
    locale,
    () => {
      const englishSeo = i18n.global.getLocaleMessage('en').seo as {
        description: string;
        jobTitle: string;
        imageAlt: string;
      };

      const title = 'Wender Galan | Full Stack Developer';
      const description = englishSeo.description;
      const siteName = 'Wender Galan';
      const jobTitle = englishSeo.jobTitle;

      document.title = title;
      document.documentElement.lang = 'en';

      upsertLink('link[rel="canonical"]', { rel: 'canonical', href: SITE_URL });
      upsertMeta('meta[name="description"]', { name: 'description', content: description });
      upsertMeta('meta[name="robots"]', { name: 'robots', content: 'index, follow' });
      upsertMeta('meta[name="author"]', { name: 'author', content: 'Wender Galan' });
      upsertMeta('meta[property="og:type"]', { property: 'og:type', content: 'website' });
      upsertMeta('meta[property="og:locale"]', { property: 'og:locale', content: 'en_US' });
      upsertMeta('meta[property="og:site_name"]', { property: 'og:site_name', content: siteName });
      upsertMeta('meta[property="og:title"]', { property: 'og:title', content: title });
      upsertMeta('meta[property="og:description"]', { property: 'og:description', content: description });
      upsertMeta('meta[property="og:url"]', { property: 'og:url', content: SITE_URL });
      upsertMeta('meta[property="og:image"]', { property: 'og:image', content: IMAGE_URL });
      upsertMeta('meta[property="og:image:alt"]', { property: 'og:image:alt', content: englishSeo.imageAlt });
      upsertMeta('meta[name="twitter:card"]', { name: 'twitter:card', content: 'summary_large_image' });
      upsertMeta('meta[name="twitter:title"]', { name: 'twitter:title', content: title });
      upsertMeta('meta[name="twitter:description"]', { name: 'twitter:description', content: description });
      upsertMeta('meta[name="twitter:image"]', { name: 'twitter:image', content: IMAGE_URL });

      upsertJsonLd('website', {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: siteName,
        alternateName: 'Wender Galã',
        url: SITE_URL
      });

      upsertJsonLd('person', {
        '@context': 'https://schema.org',
        '@type': 'Person',
        '@id': `${SITE_URL}#person`,
        name: 'Wender Galan',
        alternateName: ['Wender Galã'],
        url: SITE_URL,
        image: IMAGE_URL,
        jobTitle,
        description,
        sameAs: SOCIAL_URLS,
        knowsAbout: [
          'Java',
          'Spring Boot',
          'Spring Cloud',
          'TypeScript',
          'JavaScript',
          'Vue.js',
          'Microservices',
          'PostgreSQL',
          'Docker',
          'Jenkins'
        ],
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Campo Grande',
          addressRegion: 'MS',
          addressCountry: 'BR'
        }
      });
    },
    { immediate: true }
  );
};
