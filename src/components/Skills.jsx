import { useState, useEffect, useRef } from 'react'
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaGitAlt } from 'react-icons/fa'
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiRedux, SiJest } from 'react-icons/si'
import { TbBrandBootstrap } from 'react-icons/tb'

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React.js', icon: FaReact, color: 'text-accent-600' },
        { name: 'Next.js', icon: SiNextdotjs, color: 'text-gray-700' },
        { name: 'HTML', icon: FaHtml5, color: 'text-accent-600' },
        { name: 'CSS', icon: FaCss3Alt, color: 'text-accent-600' },
        { name: 'JavaScript', icon: FaJs, color: 'text-accent-600' },
        { name: 'TypeScript', icon: SiTypescript, color: 'text-accent-600' },
        { name: 'Bootstrap', icon: TbBrandBootstrap, color: 'text-gray-700' },
        { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-accent-600' },
        { name: 'Material UI', icon: null, color: 'text-gray-700' },
        { name: 'Micro Frontend', icon: null, color: 'text-gray-700' },
      ],
    },
    {
      title: 'State Management',
      skills: [
        { name: 'Redux', icon: SiRedux, color: 'text-accent-600' },
        { name: 'Zustand', icon: null, color: 'text-gray-700' },
      ],
    },
    {
      title: 'Testing',
      skills: [
        { name: 'Jest', icon: SiJest, color: 'text-accent-600' },
      ],
    },
    {
      title: 'Tools & Technologies',
      skills: [
        { name: 'Git', icon: FaGitAlt, color: 'text-gray-700' },
        { name: 'VS Code', icon: null, color: 'text-gray-700' },
        { name: 'JIRA', icon: null, color: 'text-gray-700' },
        { name: 'Postman', icon: null, color: 'text-gray-700' },
        { name: 'CI/CD', icon: null, color: 'text-gray-700' },
      ],
    },
  ]

  return (
    <section id="skills" className="section-container bg-gray-50">
      <div ref={sectionRef} className="relative z-10">
        <h2 className="section-title">Technical Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={`card group ${isVisible ? 'fade-in' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-xl font-bold text-gray-900 mb-6 pb-3 border-b border-gray-200">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="flex items-center gap-2 px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg hover:border-accent-300 hover:bg-white transition-all duration-300 cursor-default"
                  >
                    {skill.icon && (
                      <skill.icon className={`text-lg ${skill.color}`} />
                    )}
                    {!skill.icon && (
                      <div className="w-4 h-4 rounded-full bg-accent-500"></div>
                    )}
                    <span className="font-medium text-gray-700">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 max-w-6xl mx-auto">
          <div className={`card ${isVisible ? 'fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
            <h3 className="text-xl font-bold text-gray-900 mb-6 pb-3 border-b border-gray-200">
              Methodologies & Soft Skills
            </h3>
            <div className="flex flex-wrap gap-3">
              {['Agile (SCRUM)', 'CI/CD', 'Problem Solving', 'Communication', 'Collaboration', 'Adaptability'].map((skill, index) => (
                <div
                  key={index}
                  className="px-4 py-2 bg-accent-50 border border-accent-200 text-accent-700 rounded-lg font-medium hover:bg-accent-100 transition-colors cursor-default"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 max-w-6xl mx-auto">
          <div className={`card ${isVisible ? 'fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.5s' }}>
            <h3 className="text-xl font-bold text-gray-900 mb-6 pb-3 border-b border-gray-200">
              AI Tools
            </h3>
            <div className="flex flex-wrap gap-3">
              {['GitHub Copilot', 'Chat GPT', 'Gemini AI', 'Cursor'].map((tool, index) => (
                <div
                  key={index}
                  className="px-4 py-2 bg-gray-100 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-colors cursor-default"
                >
                  {tool}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
