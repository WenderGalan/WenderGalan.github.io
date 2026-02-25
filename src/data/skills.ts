export type SkillItem = {
  name: string;
  color: string;
  icon: string;
};

export const skills: Record<string, SkillItem[]> = {
  backend: [
    { name: 'Java', color: '#f97316', icon: 'fa-brands fa-java' },
    { name: 'Spring Boot', color: '#22c55e', icon: 'fa-solid fa-leaf' },
    { name: 'Spring Framework', color: '#16a34a', icon: 'fa-solid fa-seedling' },
    { name: 'Kafka', color: '#64748b', icon: 'fa-solid fa-diagram-project' },
    { name: 'RabbitMQ', color: '#f43f5e', icon: 'fa-solid fa-message' }
  ],
  frontend: [
    { name: 'Vue.js', color: '#10b981', icon: 'fa-brands fa-vuejs' },
    { name: 'TypeScript', color: '#3b82f6', icon: 'fa-solid fa-code' },
    { name: 'JavaScript', color: '#f59e0b', icon: 'fa-brands fa-js' },
    { name: 'HTML5', color: '#f97316', icon: 'fa-brands fa-html5' },
    { name: 'CSS3', color: '#0ea5e9', icon: 'fa-brands fa-css3-alt' },
    { name: 'Bootstrap', color: '#8b5cf6', icon: 'fa-brands fa-bootstrap' }
  ],
  databases: [
    { name: 'PostgreSQL', color: '#2563eb', icon: 'fa-solid fa-database' },
    { name: 'MongoDB', color: '#22c55e', icon: 'fa-solid fa-layer-group' },
    { name: 'MySQL', color: '#0ea5e9', icon: 'fa-solid fa-database' },
    { name: 'Firebase Firestore', color: '#f59e0b', icon: 'fa-solid fa-fire' }
  ],
  devops: [
    { name: 'Azure', color: '#0ea5e9', icon: 'fa-brands fa-microsoft' },
    { name: 'AWS', color: '#f59e0b', icon: 'fa-brands fa-aws' },
    { name: 'CI/CD', color: '#6366f1', icon: 'fa-solid fa-gears' },
    { name: 'Jenkins', color: '#ef4444', icon: 'fa-brands fa-jenkins' },
    { name: 'Docker', color: '#3b82f6', icon: 'fa-brands fa-docker' },
    { name: 'Kubernetes', color: '#2563eb', icon: 'fa-brands fa-kubernetes' }
  ],
  tools: [
    { name: 'IntelliJ IDEA', color: '#9333ea', icon: 'fa-solid fa-laptop-code' },
    { name: 'VS Code', color: '#0ea5e9', icon: 'fa-solid fa-code' },
    { name: 'Scrum', color: '#f97316', icon: 'fa-solid fa-people-group' },
    { name: 'Kanban', color: '#f59e0b', icon: 'fa-solid fa-table-columns' },
    { name: 'Versionamento de Código (Git)', color: '#ef4444', icon: 'fa-brands fa-git-alt' }
  ]
};
