export interface Project {
  name: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
}

export const projects: Project[] = [
  {
    name: 'OrçaPRO',
    description: 'Sistema moderno de gestão de orçamentos, clientes e agenda de serviços, com foco em produtividade, organização e visualização estratégica de dados.',
    image: 'https://github.com/WenderGalan/orcapro/blob/main/src/assets/logo.png?raw=true',
    technologies: ['Vue 3', 'Vite', 'Tailwind CSS'],
    githubUrl: 'https://github.com/wendergalan/orcapro'
  },
  {
    name: 'Wender Galan Portfolio',
    description: 'Site de portfólio pessoal desenvolvido com Vue 3, Vite e Tailwind CSS, destacando projetos, experiência e informações de contato.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80',
    technologies: ['Vue 3', 'Vite', 'Tailwind CSS'],
    githubUrl: 'https://github.com/WenderGalan/WenderGalan.github.io'
  },
  {
    name: 'Outros Projetos',
    description: 'Explore mais projetos, experimentos e trabalhos de código aberto no meu perfil do GitHub.\n',
    image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=900&q=80',
    technologies: ['Java', 'Spring Cloud', 'MongoDB'],
    githubUrl: 'https://github.com/WenderGalan'
  }
];
