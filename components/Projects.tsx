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
      name: 'Verizon Project',
      company: 'Cognizant Technology Solutions',
      duration: 'Oct 2024 – Present',
      description: 'Developed modular, scalable React.js components for a large-scale micro frontend application.',
      technologies: ['React.js', 'Micro Frontend', 'JavaScript', 'Redux'],
      highlights: [
        'Developed modular, scalable React.js components for a large-scale micro frontend application',
        'Contributed to both development and support activities ensuring system stability',
        'Enhanced performance and user experience through optimization and best practices',
        'Collaborated with cross-functional teams to deliver features on time'
      ],
      icon: SiReact,
      gradient: 'from-teal-500 to-teal-600'
    },
    {
      name: 'AT&T Internal Project',
      company: 'Cognizant Technology Solutions',
      duration: 'Nov 2024 – Sept 2025',
      description: 'Migrated legacy JSP applications to Next.js, improving performance and maintainability.',
      technologies: ['Next.js', 'React.js', 'TypeScript', 'Tailwind CSS'],
      highlights: [
        'Migrated legacy JSP applications to Next.js improving performance and maintainability',
        'Delivered responsive, scalable UI solutions using Next.js best practices',
        'Partnered with onshore/offshore teams for timely delivery and issue resolution'
      ],
      icon: SiNextdotjs,
      gradient: 'from-indigo-500 to-indigo-600'
    },
    {
      name: 'KFC Global Project',
      company: 'Cognizant Technology Solutions',
      duration: 'Jul 2022 – Oct 2024',
      description: 'Enhanced food ordering website with responsive designs and seamless integrations.',
      technologies: ['React.js', 'Redux', 'JavaScript', 'CSS'],
      highlights: [
        'Enhanced food ordering website with responsive designs and seamless integrations',
        'Built reusable design system components ensuring UI consistency',
        'Collaborated with backend teams for API integration',
        'Improved digital experience and application performance using React.js and Redux'
      ],
      icon: SiReact,
      gradient: 'from-teal-500 to-teal-600'
    },
    {
      name: 'Diagnostic Medical Centre',
      company: 'Cognizant Technology Solutions (Intern)',
      duration: 'Feb 2022 – Jun 2022',
      description: 'Developed full-stack web application using Spring Boot and SQL with modern UI.',
      technologies: ['Spring Boot', 'SQL', 'HTML', 'CSS', 'JavaScript'],
      highlights: [
        'Developed Diagnostic Medical Centre web application using Spring Boot and SQL',
        'Designed user-friendly interfaces with HTML, CSS, and JavaScript',
        'Gained hands-on experience in full-stack development'
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
          <FadeIn key={index} delay={index * 0.15} fullWidth>
            <div className="card group hover:scale-[1.02] hover:shadow-xl transition-all duration-300 h-full">
              <div className="flex items-start justify-between mb-4">
                <div className={`p-4 rounded-lg bg-gradient-to-r ${project.gradient} text-white mb-4 shadow-md`}>
                  <project.icon className="text-3xl" />
                </div>
                <div className="flex items-center gap-2 text-sm text-navy-600 bg-white px-3 py-1 rounded-full border border-gray-100 shadow-sm">
                  <FaCalendarAlt className="text-teal-600" />
                  <span className="font-medium">{project.duration}</span>
                </div>
              </div>

              <div className="mb-4">
                <h3 className="text-2xl font-bold text-navy-900 mb-2 font-display">{project.name}</h3>
                <div className="flex items-center gap-2 text-teal-600 mb-2">
                  <FaBriefcase className="text-sm" />
                  <span className="font-semibold">{project.company}</span>
                </div>
              </div>

              <p className="text-navy-600 mb-6 leading-relaxed bg-gray-50 p-3 rounded-lg border border-gray-100 text-sm">
                {project.description}
              </p>

              <div className="mb-4">
                <h4 className="text-sm font-semibold text-navy-700 mb-2 uppercase tracking-wider text-xs">Technologies:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-white text-navy-700 rounded-full text-xs font-semibold border border-gray-200 shadow-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <ul className="space-y-2 mt-auto pt-4 border-t border-gray-100">
                {project.highlights.map((highlight, highlightIndex) => (
                  <li key={highlightIndex} className="flex items-start gap-2 text-sm text-navy-600">
                    <span className="text-teal-600 mt-1">▸</span>
                    <span>{highlight}</span>
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
