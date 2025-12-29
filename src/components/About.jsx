import { useEffect, useRef, useState } from 'react'
import { FaRocket, FaUsers, FaCode, FaChartLine } from 'react-icons/fa'

const About = () => {
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

  const highlights = [
    { icon: FaRocket, text: 'Scalable Applications', color: 'text-accent-600' },
    { icon: FaCode, text: 'Modern Tech Stack', color: 'text-accent-600' },
    { icon: FaUsers, text: 'Team Collaboration', color: 'text-accent-600' },
    { icon: FaChartLine, text: 'Performance Optimization', color: 'text-accent-600' },
  ]

  return (
    <section id="about" className="section-container bg-white">
      <div ref={sectionRef} className="relative z-10">
        <h2 className="section-title">Professional Summary</h2>
        <div className="max-w-5xl mx-auto">
          <div className={`card ${isVisible ? 'fade-in' : 'opacity-0'}`}>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
              Frontend Developer with <span className="font-bold text-accent-600 text-2xl">4 years of experience</span> delivering 
              scalable, responsive, and high-performance web applications. Specialized in{' '}
              <span className="font-bold text-gray-800">React.js</span>,{' '}
              <span className="font-bold text-gray-800">Next.js</span> and{' '}
              <span className="font-bold text-gray-800">micro frontend architecture</span>. Adept at collaborating with cross-functional teams, 
              optimizing performance, and ensuring seamless user experiences. Skilled in Agile methodologies, CI/CD practices, 
              and application support with a proven track record of modernizing legacy systems and enhancing enterprise applications.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              {highlights.map((highlight, index) => (
                <div
                  key={index}
                  className={`flex flex-col items-center p-4 bg-gray-50 rounded-lg border border-gray-200 hover:border-accent-300 transition-all duration-300 hover:shadow-md ${isVisible ? 'fade-in' : 'opacity-0'}`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <highlight.icon className={`text-3xl ${highlight.color} mb-2`} />
                  <span className="text-sm font-semibold text-gray-700 text-center">{highlight.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
