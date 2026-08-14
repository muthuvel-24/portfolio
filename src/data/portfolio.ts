export const personalInfo = {
  name: 'Muthuvel S.',
  title: 'Frontend Developer & AI-Driven Software Engineer',
  location: 'Karur, Tamil Nadu, India',
  bio: 'Final-year B.E. Computer Science student specializing in building responsive web applications and AI-integrated developer tools, with a solid grounding in Java, Data Structures, and relational databases.',
  email: 'msmuthuvel2004@gmail.com',
  phone: '+91 93612 58300',
  links: {
    github: 'https://github.com/muthuvel-24',
    linkedin: 'https://www.linkedin.com/in/muthuvel2004',
    leetcode: 'https://leetcode.com/u/Muthuvel_S',
    email: 'mailto:msmuthuvel2004@gmail.com',
    phone: 'tel:+919361258300',
  },
}

export interface Project {
  id: number
  title: string
  description: string
  techStack: string[]
  github: string
  status?: string
  featured?: boolean
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'AI Software Engineering Assistant',
    description:
      'Multi-agent autonomous developer workspace inspired by Cursor AI and Copilot Workspace. Unifies requirement analysis, automated schema design, full-stack code generation, and automated code reviews using LangGraph and Gemini API.',
    techStack: ['React', 'TypeScript', 'TailwindCSS', 'Spring Boot', 'PostgreSQL', 'pgvector', 'LangGraph', 'Gemini API'],
    github: 'https://github.com/muthuvel-24/AI-Software-Engineering',
    status: 'Active Development',
    featured: true,
  },
  {
    id: 2,
    title: 'Fake News Detection System',
    description:
      'Real-time NLP classification pipeline with confidence scoring to identify misleading articles using TF-IDF vectorization and Naive Bayes classifier (~88% accuracy).',
    techStack: ['Python', 'Scikit-learn', 'NLTK', 'TF-IDF', 'Pandas'],
    github: 'https://github.com/muthuvel-24/Fake-News-Detection-Sysyem',
  },
  {
    id: 3,
    title: 'Healthcare Management System',
    description:
      'Relational database-backed hospital management software implementing complete CRUD workflows, appointment scheduling logic, and doctor/billing management.',
    techStack: ['Java', 'MySQL', 'JDBC', 'OOP Design Patterns'],
    github: 'https://github.com/muthuvel-24/Health-care-management-system',
  },
  {
    id: 4,
    title: 'Currency Converter',
    description:
      'Lightweight and responsive currency conversion application featuring dynamic exchange rate calculation, clean input validation, and real-time computation.',
    techStack: ['Java', 'HTML', 'CSS', 'REST APIs'],
    github: 'https://github.com/muthuvel-24/Currency-Converer',
  },
  {
    id: 5,
    title: 'Custom Web Browser',
    description:
      'Desktop web browsing interface featuring URL routing, tab navigation, page rendering capabilities, and customized controls.',
    techStack: ['Java', 'Swing', 'JavaFX', 'Networking'],
    github: 'https://github.com/muthuvel-24/browser',
  },
]

export interface SkillCategory {
  category: string
  icon: string
  skills: string[]
}

export const skillCategories: SkillCategory[] = [
  {
    category: 'Frontend Development',
    icon: '🖥️',
    skills: ['React', 'TypeScript', 'Tailwind CSS', 'HTML5', 'CSS3', 'Responsive Design'],
  },
  {
    category: 'Languages & Backend',
    icon: '⚙️',
    skills: ['Java', 'Python', 'Spring Boot', 'JDBC', 'RESTful APIs'],
  },
  {
    category: 'Database & Architecture',
    icon: '🗄️',
    skills: ['SQL', 'MySQL', 'PostgreSQL', 'Joins', 'Indexing', 'Query Optimization'],
  },
  {
    category: 'Core CS & Problem Solving',
    icon: '🧠',
    skills: ['Data Structures', 'Algorithms', 'OOP Concepts', 'DBMS', 'OS Fundamentals', 'Computer Networks'],
  },
  {
    category: 'Developer Tools',
    icon: '🛠️',
    skills: ['Git', 'GitHub', 'VS Code', 'IntelliJ IDEA'],
  },
]

export interface TimelineItem {
  id: number
  type: 'education' | 'experience' | 'certification'
  title: string
  subtitle: string
  period: string
  detail?: string
  grade?: string
}

export const timeline: TimelineItem[] = [
  {
    id: 1,
    type: 'education',
    title: 'B.E. in Computer Science & Engineering',
    subtitle: 'V.S.B. Engineering College, Karur, Tamil Nadu',
    period: '2023 – 2027',
    grade: 'CGPA: 7.75 / 10.0',
  },
  {
    id: 2,
    type: 'experience',
    title: 'Data Structures & Algorithms Training Intern',
    subtitle: 'Intensive DSA Program',
    period: '2024',
    detail: 'Implemented 20+ algorithmic solutions in Java across trees, graphs, dynamic programming, and greedy algorithms.',
  },
  {
    id: 3,
    type: 'education',
    title: 'Higher Secondary School Certificate (Class XII)',
    subtitle: 'Malar Matric Higher Secondary School',
    period: '2022 – 2023',
    grade: 'Percentage: 71%',
  },
  {
    id: 4,
    type: 'certification',
    title: 'Java Foundation Certification',
    subtitle: 'Oracle / Infosys Springboard',
    period: '2024',
  },
  {
    id: 5,
    type: 'certification',
    title: 'Data Structures Internship Completion Certificate',
    subtitle: 'DSA Training Program',
    period: '2024',
  },
]
