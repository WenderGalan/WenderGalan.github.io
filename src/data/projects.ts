export interface Project {
  name: string;
  description: string;
  image: string;
  technologies: {
    name: string;
    color: string;
    icon: string;
  }[];
  githubUrl: string;
}

export const projects: Project[] = [
  {
    name: 'OrçaPRO',
    description: 'Sistema moderno de gestão de orçamentos, clientes e agenda de serviços, com foco em produtividade, organização e visualização estratégica de dados.',
    image: 'https://github.com/WenderGalan/orcapro/blob/main/src/assets/logo.png?raw=true',
    technologies: [
      { name: 'Vue 3', color: '#10b981', icon: 'fa-brands fa-vuejs' },
      { name: 'Vite', color: '#f59e0b', icon: 'fa-solid fa-bolt' },
      { name: 'Tailwind CSS', color: '#0ea5e9', icon: 'fa-solid fa-wind' }
    ],
    githubUrl: 'https://github.com/wendergalan/orcapro'
  },
  {
    name: 'Wender Galan Portfolio',
    description: 'Site de portfólio pessoal desenvolvido com Vue 3, Vite e Tailwind CSS, destacando projetos, experiência e informações de contato.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80',
    technologies: [
      { name: 'Vue 3', color: '#10b981', icon: 'fa-brands fa-vuejs' },
      { name: 'Vite', color: '#f59e0b', icon: 'fa-solid fa-bolt' },
      { name: 'Tailwind CSS', color: '#0ea5e9', icon: 'fa-solid fa-wind' }
    ],
    githubUrl: 'https://github.com/WenderGalan/WenderGalan.github.io'
  },
  {
    name: 'Outros Projetos',
    description: 'Explore mais projetos, experimentos e trabalhos de código aberto no meu perfil do GitHub.\n',
    image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=900&q=80',
    technologies: [
      { name: 'Java', color: '#f97316', icon: 'fa-brands fa-java' },
      { name: 'Spring Cloud', color: '#22c55e', icon: 'fa-solid fa-cloud' },
      { name: 'MongoDB', color: '#22c55e', icon: 'fa-solid fa-leaf' },
      { name: 'PostgreSQL', color: '#2563eb', icon: 'fa-solid fa-database' },
      { name: 'Kafka', color: '#64748b', icon: 'fa-solid fa-diagram-project' },
      { name: 'TypeScript', color: '#3b82f6', icon: 'fa-solid fa-code' }
    ],
    githubUrl: 'https://github.com/WenderGalan'
  }
];
