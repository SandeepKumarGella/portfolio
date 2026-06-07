'use client'

import { useState, useEffect, useRef } from 'react'
import { FaTrophy, FaRocket, FaCode, FaBug, FaSync, FaAward } from 'react-icons/fa'

export default function Achievements() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

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

  const achievements = [
    {
      text: "Eliminated 40% of AT&T's frontend technical debt by leading a full JSP-to-Next.js migration across 5+ production modules.",
      icon: FaRocket,
      color: 'bg-indigo-100 text-indigo-600 border-indigo-200'
    },
    {
      text: 'Elevated unit test coverage from 60% to 85% using Jest and React Testing Library, directly reducing production bugs by 25%.',
      icon: FaCode,
      color: 'bg-teal-100 text-teal-600 border-teal-200'
    },
    {
      text: 'Standardized UI consistency by 40% at KFC Global through a reusable component design system, tracked by QA defect rate reduction.',
      icon: FaTrophy,
      color: 'bg-yellow-100 text-yellow-600 border-yellow-200'
    },
    {
      text: 'Resolved 200+ SonarQube code quality issues, measurably reducing security vulnerabilities and improving overall codebase health scores.',
      icon: FaBug,
      color: 'bg-red-100 text-red-600 border-red-200'
    },
    {
      text: 'Owned end-to-end CI/CD pipeline implementation on GitLab, reducing deployment errors by 30% across all release cycles.',
      icon: FaSync,
      color: 'bg-blue-100 text-blue-600 border-blue-200'
    },
    {
      text: 'Recognized as Associate of the Month and recipient of multiple client appreciation awards for delivering high-quality solutions under tight deadlines.',
      icon: FaAward,
      color: 'bg-purple-100 text-purple-600 border-purple-200'
    },
  ]

  return (
    <section id="achievements" ref={sectionRef} className="section-container bg-gray-50">
      <h2 className="section-title">Key Achievements</h2>
      <div className="max-w-5xl mx-auto">
        <div className={`card ${isVisible ? 'fade-in' : 'opacity-0'}`}>
          <div className="flex items-center gap-4 mb-8 pb-6 border-b border-gray-200">
            <div className="p-4 rounded-lg bg-gradient-to-r from-teal-600 to-indigo-600 text-white shadow-md">
              <FaTrophy className="text-3xl" />
            </div>
            <h3 className="text-3xl font-bold text-navy-900 font-display">Notable Accomplishments</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className={`p-6 rounded-lg bg-white border border-gray-200 hover:border-teal-300 hover:shadow-md transition-all duration-300 ${isVisible ? 'fade-in' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 0.12}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className={`flex-shrink-0 p-3.5 rounded-lg border ${achievement.color}`}>
                    <achievement.icon className="text-xl" />
                  </div>
                  <div className="flex-1">
                    <p className="text-navy-700 leading-relaxed font-medium text-sm md:text-base">
                      {achievement.text}
                    </p>
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
