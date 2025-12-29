'use client'

import { useState, useEffect, useRef } from 'react'
import { FaTrophy, FaRocket, FaCode, FaChartLine, FaUsers } from 'react-icons/fa'

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
      text: 'Successfully modernized legacy applications into Next.js, reducing maintenance overhead.',
      icon: FaRocket,
    },
    {
      text: 'Delivered reusable design systems that improved UI consistency across enterprise projects.',
      icon: FaCode,
    },
    {
      text: 'Optimized React.js applications for performance, improving load times and user engagement.',
      icon: FaChartLine,
    },
    {
      text: 'Collaborated across global teams ensuring smooth delivery of large-scale projects.',
      icon: FaUsers,
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
                className={`p-5 rounded-lg bg-white border border-gray-200 hover:border-teal-300 transition-all duration-300 ${isVisible ? 'fade-in' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 p-3 rounded-lg bg-teal-100 text-teal-600">
                    <achievement.icon className="text-xl" />
                  </div>
                  <div className="flex-1">
                    <p className="text-base md:text-lg text-navy-700 leading-relaxed">
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

