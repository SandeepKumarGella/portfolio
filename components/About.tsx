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
            Frontend Developer with <span className="font-bold text-teal-600 text-2xl">4 years of experience</span> delivering 
            scalable, responsive, and high-performance web applications. Specialized in{' '}
            <span className="font-bold text-navy-900">React.js</span>,{' '}
            <span className="font-bold text-navy-900">Next.js</span> and{' '}
            <span className="font-bold text-navy-900">micro frontend architecture</span>. Adept at collaborating with cross-functional teams, 
            optimizing performance, and ensuring seamless user experiences. Skilled in Agile methodologies, CI/CD practices, 
            and application support with a proven track record of modernizing legacy systems and enhancing enterprise applications.
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

