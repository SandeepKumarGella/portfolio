import { useState, useEffect, useRef } from 'react'
import { FaGraduationCap, FaCalendarAlt, FaUniversity } from 'react-icons/fa'

const Education = () => {
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

  const education = [
    {
      degree: 'B. Tech in Electronics and Communication Engineering',
      institution: 'GMR University',
      period: '2019-2022',
      icon: FaUniversity,
    },
    {
      degree: 'Diploma in Electronics and Communication Engineering',
      institution: 'SMVM Polytechnic',
      period: '2016-2019',
      icon: FaGraduationCap,
    },
  ]

  return (
    <section id="education" className="section-container bg-gray-50">
      <div ref={sectionRef} className="relative z-10">
        <h2 className="section-title">Education</h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {education.map((edu, index) => (
            <div
              key={index}
              className={`card group ${isVisible ? 'fade-in' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 p-4 rounded-lg bg-accent-600 text-white shadow-md">
                  <edu.icon className="text-3xl" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 leading-tight">
                    {edu.degree}
                  </h3>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-2 h-2 rounded-full bg-accent-600"></div>
                    <p className="font-bold text-accent-600 text-lg">
                      {edu.institution}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <FaCalendarAlt className="text-accent-600" />
                    <span className="font-medium">{edu.period}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education
