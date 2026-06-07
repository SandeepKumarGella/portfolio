'use client'

import { 
  FaReact, 
  FaHtml5, 
  FaCss3Alt, 
  FaJs, 
  FaGitAlt, 
  FaNodeJs, 
  FaJava, 
  FaAws, 
  FaGithub, 
  FaGitlab, 
  FaSass 
} from 'react-icons/fa'
import { 
  SiNextdotjs, 
  SiTypescript, 
  SiTailwindcss, 
  SiRedux, 
  SiJest, 
  SiMongodb, 
  SiSpringboot, 
  SiMui 
} from 'react-icons/si'
import { TbBrandBootstrap } from 'react-icons/tb'

import FadeIn from './ui/FadeIn'

export default function Skills() {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React.js', icon: FaReact, color: 'text-teal-600' },
        { name: 'Next.js', icon: SiNextdotjs, color: 'text-indigo-600' },
        { name: 'JavaScript (ES6+)', icon: FaJs, color: 'text-indigo-600' },
        { name: 'TypeScript', icon: SiTypescript, color: 'text-teal-600' },
        { name: 'HTML5', icon: FaHtml5, color: 'text-teal-600' },
        { name: 'CSS3', icon: FaCss3Alt, color: 'text-teal-600' },
        { name: 'Sass', icon: FaSass, color: 'text-indigo-600' },
        { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-teal-600' },
        { name: 'Bootstrap', icon: TbBrandBootstrap, color: 'text-navy-700' },
        { name: 'Material UI', icon: SiMui, color: 'text-indigo-600' },
      ],
    },
    {
      title: 'Architecture & State',
      skills: [
        { name: 'Micro Frontend (MFE)', icon: null, color: 'text-navy-700' },
        { name: 'Redux', icon: SiRedux, color: 'text-indigo-600' },
        { name: 'Zustand', icon: null, color: 'text-navy-700' },
        { name: 'Context API', icon: null, color: 'text-navy-700' },
        { name: 'Component-Driven Development', icon: null, color: 'text-navy-700' },
        { name: 'Single Page Applications (SPA)', icon: null, color: 'text-navy-700' },
      ],
    },
    {
      title: 'Backend & APIs',
      skills: [
        { name: 'Node.js', icon: FaNodeJs, color: 'text-teal-600' },
        { name: 'Express.js', icon: null, color: 'text-navy-700' },
        { name: 'MongoDB', icon: SiMongodb, color: 'text-teal-600' },
        { name: 'REST API Integration', icon: null, color: 'text-navy-700' },
        { name: 'Spring Boot', icon: SiSpringboot, color: 'text-teal-600' },
        { name: 'Java', icon: FaJava, color: 'text-indigo-600' },
        { name: 'JWT Authentication', icon: null, color: 'text-navy-700' },
        { name: 'Postman', icon: null, color: 'text-navy-700' },
      ],
    },
    {
      title: 'Testing & Quality',
      skills: [
        { name: 'Jest', icon: SiJest, color: 'text-teal-600' },
        { name: 'React Testing Library', icon: null, color: 'text-navy-700' },
        { name: 'SonarQube', icon: null, color: 'text-navy-700' },
        { name: 'BrowserStack', icon: null, color: 'text-navy-700' },
        { name: 'Unit Testing', icon: null, color: 'text-navy-700' },
        { name: 'Integration Testing', icon: null, color: 'text-navy-700' },
        { name: 'Code Reviews', icon: null, color: 'text-navy-700' },
      ],
    },
    {
      title: 'DevOps & Tools',
      skills: [
        { name: 'Git', icon: FaGitAlt, color: 'text-navy-700' },
        { name: 'GitHub', icon: FaGithub, color: 'text-navy-700' },
        { name: 'GitLab', icon: FaGitlab, color: 'text-indigo-600' },
        { name: 'CI/CD Pipelines', icon: null, color: 'text-navy-700' },
        { name: 'Agile/Scrum', icon: null, color: 'text-navy-700' },
        { name: 'JIRA', icon: null, color: 'text-navy-700' },
        { name: 'Rally', icon: null, color: 'text-navy-700' },
        { name: 'Kibana', icon: null, color: 'text-navy-700' },
        { name: 'AWS', icon: FaAws, color: 'text-navy-700' },
      ],
    },
    {
      title: 'AI-Assisted Dev',
      skills: [
        { name: 'GitHub Copilot', icon: null, color: 'text-navy-700' },
        { name: 'Cursor', icon: null, color: 'text-navy-700' },
        { name: 'VS Code', icon: null, color: 'text-navy-700' },
        { name: 'IntelliJ IDEA', icon: null, color: 'text-navy-700' },
      ],
    },
  ]

  return (
    <section id="skills" className="section-container bg-white">
      <FadeIn>
        <h2 className="section-title">Technical Skills</h2>
      </FadeIn>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {skillCategories.map((category, index) => (
          <FadeIn key={index} delay={index * 0.08} fullWidth>
            <div className="card group h-full hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-bold text-navy-900 mb-6 pb-3 border-b border-gray-200 font-display">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="flex items-center gap-2 px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg hover:border-teal-300 hover:bg-white transition-all duration-300 cursor-default group-hover:shadow-sm"
                  >
                    {skill.icon && (
                      <skill.icon className={`text-lg ${skill.color}`} />
                    )}
                    {!skill.icon && (
                      <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-teal-500 to-indigo-600"></div>
                    )}
                    <span className="font-medium text-navy-700 text-sm">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
