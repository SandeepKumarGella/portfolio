import { useState, useEffect, useRef } from 'react'
import { FaBriefcase, FaCalendarAlt, FaCode, FaRocket, FaUsers } from 'react-icons/fa'

const Experience = () => {
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

  const experiences = [
    {
      title: 'Jr. Software Developer',
      company: 'Cognizant Technology Solutions',
      location: 'Hyderabad',
      period: 'Jul 2022 – Present',
      icon: FaBriefcase,
      projects: [
        {
          name: 'Verizon Project',
          duration: 'Oct 2024 – Present',
          icon: FaRocket,
          responsibilities: [
            'Developed modular, scalable React.js components for a large-scale micro frontend application.',
            'Contributed to both development and support activities ensuring system stability.',
            'Enhanced performance and user experience through optimization and best practices.',
            'Collaborated with cross-functional teams to deliver features on time.',
          ],
        },
        {
          name: 'AT&T Internal Project',
          duration: 'Nov 2024 – Sept 2025',
          icon: FaCode,
          responsibilities: [
            'Migrated legacy JSP applications to Next.js improving performance and maintainability.',
            'Delivered responsive, scalable UI solutions using Next.js best practices.',
            'Partnered with onshore/offshore teams for timely delivery and issue resolution.',
          ],
        },
        {
          name: 'KFC Global Project',
          duration: 'Jul 2022 – Oct 2024',
          icon: FaUsers,
          responsibilities: [
            'Enhanced food ordering website with responsive designs and seamless integrations.',
            'Built reusable design system components ensuring UI consistency.',
            'Collaborated with backend teams for API integration.',
            'Improved digital experience and application performance using React.js and Redux.',
          ],
        },
      ],
    },
    {
      title: 'Intern',
      company: 'Cognizant Technology Solutions',
      location: '',
      period: 'Feb 2022 – Jun 2022',
      icon: FaCode,
      projects: [
        {
          name: 'Diagnostic Medical Centre Web Application',
          duration: 'Feb 2022 – Jun 2022',
          icon: FaCode,
          responsibilities: [
            'Developed Diagnostic Medical Centre web application using Spring Boot and SQL.',
            'Designed user-friendly interfaces with HTML, CSS, and JavaScript.',
            'Gained hands-on experience in full-stack development.',
          ],
        },
      ],
    },
  ]

  return (
    <section id="experience" className="section-container bg-white">
      <div ref={sectionRef} className="relative z-10">
        <h2 className="section-title">Work Experience</h2>
        <div className="max-w-6xl mx-auto">
          <div className="relative">
            {/* Professional Timeline line */}
            <div className="absolute left-8 md:left-12 top-0 bottom-0 w-0.5 bg-gray-300 hidden md:block"></div>

            {experiences.map((exp, expIndex) => (
              <div
                key={expIndex}
                className={`relative mb-12 ${isVisible ? 'fade-in' : 'opacity-0'}`}
                style={{ animationDelay: `${expIndex * 0.2}s` }}
              >
                <div className="flex flex-col md:flex-row">
                  {/* Timeline dot */}
                  <div className="hidden md:flex absolute left-4 md:left-8 w-8 h-8 items-center justify-center">
                    <div className="w-4 h-4 bg-accent-600 rounded-full border-4 border-white shadow-md"></div>
                  </div>

                  <div className="md:ml-20">
                    <div className="card">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 pb-4 border-b border-gray-200">
                        <div className="flex items-start gap-4">
                          <div className="p-3 rounded-lg bg-accent-600 text-white shadow-md">
                            <exp.icon className="text-xl" />
                          </div>
                          <div>
                            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                              {exp.title}
                            </h3>
                            <div className="flex items-center gap-2 text-accent-600 font-semibold mb-1">
                              <FaBriefcase className="text-sm" />
                              <span>{exp.company}</span>
                              {exp.location && <span className="text-gray-600">• {exp.location}</span>}
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600 mt-2 md:mt-0">
                          <FaCalendarAlt />
                          <span className="text-sm font-medium">{exp.period}</span>
                        </div>
                      </div>

                      <div className="space-y-6">
                        {exp.projects.map((project, projIndex) => (
                          <div
                            key={projIndex}
                            className="p-4 bg-gray-50 rounded-lg border border-gray-200 hover:border-accent-300 transition-all duration-300"
                          >
                            <div className="flex items-center gap-3 mb-3">
                              <project.icon className="text-lg text-accent-600" />
                              <h4 className="text-xl font-bold text-gray-800">
                                {project.name}
                              </h4>
                            </div>
                            <p className="text-sm text-gray-600 mb-4 font-medium">{project.duration}</p>
                            <ul className="space-y-2.5">
                              {project.responsibilities.map((responsibility, respIndex) => (
                                <li key={respIndex} className="flex items-start gap-3 text-gray-700">
                                  <span className="text-accent-600 mt-2">▸</span>
                                  <span className="leading-relaxed">{responsibility}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
