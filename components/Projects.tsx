'use client'

import { FaCode, FaCalendarAlt, FaBriefcase } from 'react-icons/fa'
import { SiNextdotjs, SiReact } from 'react-icons/si'

interface Project {
  name: string
  company: string
  duration: string
  description: string
  technologies: string[]
  highlights: string[]
  icon: React.ComponentType<{ className?: string }>
  gradient: string
}

import FadeIn from './ui/FadeIn'

export default function Projects() {
  const projects: Project[] = [
    {
      name: 'Verizon Assisted Sales Platform',
      company: 'Cognizant Technology Solutions',
      duration: 'Jun 2022 – Present',
      description: "Enterprise Single Page Application (SPA) supporting Verizon's Retail, Care, Tele Sales, BYOD, and Trade-In flows built on Micro Frontend (MFE) architecture.",
      technologies: ['React.js', 'Redux', 'PrimeReact', 'Micro Frontend', 'JWT', 'Kibana', 'JIRA'],
      highlights: [
        "Built reusable React and PrimeReact components aligned with Verizon's design system, accelerating feature delivery across multiple sales flows.",
        'Architected Redux state management for compensation and customer hierarchy modules, improving data predictability and cutting related bug count by 30%.',
        'Integrated 10+ REST APIs across SOE, CXP, and CJCM cross-functional teams, bridging frontend and Java backends for end-to-end data reliability.',
        'Resolved 20+ JIRA-tracked defects across sprint cycles, maintaining release stability and earning direct client appreciation.'
      ],
      icon: SiReact,
      gradient: 'from-red-500 to-red-600'
    },
    {
      name: 'AT&T Internal Tools Migration',
      company: 'Cognizant Technology Solutions',
      duration: 'Jun 2022 – Present',
      description: 'Full-scale migration of legacy JSP-based dashboards to a modern Next.js architecture to enhance scalability and maintainability.',
      technologies: ['Next.js', 'React.js', 'Zustand', 'Tailwind CSS', 'Java', 'GitHub', 'Rally'],
      highlights: [
        'Migrated 5+ production modules from legacy JSP to Next.js, reducing technical debt by 40% measured against backlog reduction and maintainability benchmarks.',
        'Designed a Zustand state management layer for complex dashboard views, ensuring predictable client-side data handling and eliminating redundant re-renders.',
        'Resolved 50+ Rally-tracked issues while integrating 10+ Java REST APIs, consistently delivering features on schedule across all sprint cycles.',
        'Collaborated directly with AT&T client stakeholders in daily Agile/Scrum ceremonies, driving iterative requirement refinement across 5+ migrated modules.'
      ],
      icon: SiNextdotjs,
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      name: 'KFC Global Ordering PWA',
      company: 'Cognizant Technology Solutions',
      duration: 'Jun 2022 – Present',
      description: 'Progressive Web App (PWA) for KFC food ordering deployed across 6 international markets with full multi-language (i18n) support.',
      technologies: ['React.js', 'Redux', 'Node.js', 'Express.js', 'MongoDB', 'Bootstrap', 'Sass', '.NET', 'GitLab CI/CD'],
      highlights: [
        'Engineered a multi-language PWA using React and Redux, deploying across 6 international markets with full i18n support and region-specific content management.',
        'Built a reusable component design system that reduced QA design defects by 40% and standardized UI consistency across all markets.',
        'Developed a Node.js and Express.js admin dashboard backed by MongoDB, enabling internal teams to manage menus, promotions, coupons, and content at scale.',
        'Integrated 10+ third-party and internal APIs spanning ordering flows, payment processing, and real-time delivery tracking across all regions.',
        'Resolved 100+ JIRA issues in partnership with CMS and .NET teams, maintaining dynamic content accuracy across all markets.',
        'Implemented GitLab CI/CD pipelines that cut deployment errors by 30% and shortened release cycle times, reducing DevOps dependency.'
      ],
      icon: SiReact,
      gradient: 'from-teal-500 to-teal-600'
    },
    {
      name: 'Diagnostic Medical Centre Web App',
      company: 'Cognizant Technology Solutions (Intern)',
      duration: 'Feb 2022 – Jun 2022',
      description: 'Full-stack patient records and appointment management system with secure access controls and modern UI.',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Spring Boot', 'SQL'],
      highlights: [
        'Designed responsive UI using HTML5, CSS3, and JavaScript for patient records and appointment management.',
        'Developed RESTful backend with Spring Boot and SQL, implementing CRUD operations, role-based authentication, and secure access controls.'
      ],
      icon: FaCode,
      gradient: 'from-navy-500 to-navy-600'
    },
  ]

  return (
    <section id="projects" className="section-container bg-gray-50">
      <FadeIn>
        <h2 className="section-title">Projects & Experience</h2>
      </FadeIn>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <FadeIn key={index} delay={index * 0.1} fullWidth>
            <div className="card group hover:scale-[1.01] hover:shadow-xl transition-all duration-300 h-full flex flex-col justify-between">
              <div>
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-4 rounded-lg bg-gradient-to-r ${project.gradient} text-white mb-4 shadow-md`}>
                    <project.icon className="text-3xl" />
                  </div>
                  <div className="flex items-center gap-2 text-sm text-navy-600 bg-white px-3 py-1 rounded-full border border-gray-100 shadow-sm">
                    <FaCalendarAlt className="text-teal-600 animate-pulse" />
                    <span className="font-semibold">{project.duration}</span>
                  </div>
                </div>

                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-navy-900 mb-2 font-display">{project.name}</h3>
                  <div className="flex items-center gap-2 text-teal-600 mb-2">
                    <FaBriefcase className="text-sm" />
                    <span className="font-bold">{project.company}</span>
                  </div>
                </div>

                <p className="text-navy-600 mb-6 leading-relaxed bg-gray-50 p-4 rounded-lg border border-gray-100 text-sm">
                  {project.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-xs font-bold text-navy-500 mb-2.5 uppercase tracking-wider">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-white text-navy-700 rounded-full text-xs font-semibold border border-gray-200 shadow-sm hover:border-teal-500 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <ul className="space-y-3 pt-4 border-t border-gray-100">
                {project.highlights.map((highlight, highlightIndex) => (
                  <li key={highlightIndex} className="flex items-start gap-2.5 text-sm text-navy-600">
                    <span className="text-teal-600 mt-1 font-bold">▸</span>
                    <span className="leading-relaxed">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
