'use client'

import { useEffect, useRef, useState } from 'react'
import { FaRocket, FaUsers, FaCode, FaChartLine } from 'react-icons/fa'

export default function About() {
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

  const highlights = [
    { icon: FaRocket, text: 'Scalable Applications', color: 'text-teal-600' },
    { icon: FaCode, text: 'Modern Tech Stack', color: 'text-indigo-600' },
    { icon: FaUsers, text: 'Team Collaboration', color: 'text-teal-600' },
    { icon: FaChartLine, text: 'Performance Optimization', color: 'text-indigo-600' },
  ]

  return (
    <section id="about" ref={sectionRef} className="section-container bg-white">
      <h2 className="section-title">About Me</h2>
      <div className="max-w-5xl mx-auto">
        <div className={`card ${isVisible ? 'fade-in' : 'opacity-0'}`}>
          <p className="text-lg md:text-xl text-navy-700 leading-relaxed mb-8">
            Software Developer with <span className="font-bold text-teal-600 text-2xl">4+ years of experience</span> delivering 
            enterprise-grade web applications for Fortune 500 clients — <span className="font-bold text-navy-900">Verizon</span> and <span className="font-bold text-navy-900">AT&T</span> using React.js, Next.js, and Micro Frontend (MFE) architecture.
            Proven track record of migrating legacy JSP systems to Next.js, reducing technical debt by <span className="font-bold text-teal-600">40%</span>, and scaling a Progressive Web App across <span className="font-bold text-indigo-600">6 international markets</span> with full i18n support for KFC.
            Adept at driving quality, achieving <span className="font-bold text-navy-900">85% unit test coverage</span>, resolving 200+ SonarQube quality issues, and reducing deployment errors by 30% via GitLab CI/CD pipelines.
            Targeting engineering roles where performance optimization, clean architecture, and measurable product impact are priorities.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className={`flex flex-col items-center p-4 bg-gray-50 rounded-lg border border-gray-200 hover:border-teal-300 transition-all duration-300 hover:shadow-md ${isVisible ? 'fade-in' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <highlight.icon className={`text-3xl ${highlight.color} mb-2`} />
                <span className="text-sm font-semibold text-navy-700 text-center">{highlight.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

