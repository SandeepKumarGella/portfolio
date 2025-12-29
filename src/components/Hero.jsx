import { useState, useEffect } from 'react'
import { FaPhone, FaEnvelope, FaLinkedin } from 'react-icons/fa'
import { HiCode } from 'react-icons/hi'
import { SiReact, SiNextdotjs, SiJavascript } from 'react-icons/si'

const Hero = () => {
  const [text, setText] = useState('')
  const fullText = 'Frontend Developer'
  const [isDeleting, setIsDeleting] = useState(false)
  const [typingSpeed, setTypingSpeed] = useState(150)

  useEffect(() => {
    let timeout
    if (!isDeleting && text === fullText) {
      timeout = setTimeout(() => setIsDeleting(true), 2000)
    } else if (isDeleting && text === '') {
      setIsDeleting(false)
      setTypingSpeed(150)
    } else {
      timeout = setTimeout(() => {
        setText(isDeleting ? text.slice(0, -1) : fullText.slice(0, text.length + 1))
        setTypingSpeed(isDeleting ? 75 : 150)
      }, typingSpeed)
    }
    return () => clearTimeout(timeout)
  }, [text, isDeleting, fullText, typingSpeed])

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 bg-gradient-to-b from-gray-50 to-white">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent-300 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-200 rounded-full filter blur-3xl"></div>
      </div>

      {/* Subtle Floating Icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-5">
        <SiReact className="absolute top-20 left-10 text-accent-500 text-6xl float" style={{ animationDelay: '0s' }} />
        <SiNextdotjs className="absolute top-40 right-20 text-primary-500 text-5xl float" style={{ animationDelay: '1s' }} />
        <SiJavascript className="absolute bottom-40 left-20 text-accent-500 text-6xl float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="section-container text-center relative z-10">
        <div className="max-w-5xl mx-auto fade-in">
          {/* Profile Icon */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-accent-500 to-accent-600 p-1 shadow-lg">
                <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                  <HiCode className="text-5xl md:text-6xl text-accent-600" />
                </div>
              </div>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-4">
            Gella Sandeep Kumar
          </h1>
          
          <h2 className="text-2xl md:text-4xl text-gray-700 mb-4 h-12 md:h-16 flex items-center justify-center">
            <span className="font-semibold text-accent-600">{text}</span>
            <span className="animate-pulse text-accent-600">|</span>
          </h2>
          
          <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Building <span className="font-semibold text-gray-800">scalable</span>,{' '}
            <span className="font-semibold text-gray-800">responsive</span>, and{' '}
            <span className="font-semibold text-gray-800">high-performance</span> web applications
            with React.js and Next.js
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a
              href="tel:+9398415617"
              className="group flex items-center gap-2 px-6 py-3 bg-accent-600 text-white rounded-lg hover:bg-accent-700 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              <FaPhone />
              <span>Call Me</span>
            </a>
            <a
              href="mailto:sandeepkumargella@gmail.com"
              className="group flex items-center gap-2 px-6 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-800 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              <FaEnvelope />
              <span>Email Me</span>
            </a>
            <a
              href="https://www.linkedin.com/in/sandeepkumargella/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-6 py-3 bg-accent-500 text-white rounded-lg hover:bg-accent-600 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              <FaLinkedin />
              <span>LinkedIn</span>
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 md:gap-8 max-w-2xl mx-auto mb-12">
            <div className="bg-white rounded-lg shadow-md p-6 text-center border border-gray-200">
              <div className="text-3xl md:text-4xl font-bold text-accent-600">4+</div>
              <div className="text-sm md:text-base text-gray-600 mt-1">Years Experience</div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center border border-gray-200">
              <div className="text-3xl md:text-4xl font-bold text-accent-600">10+</div>
              <div className="text-sm md:text-base text-gray-600 mt-1">Projects</div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center border border-gray-200">
              <div className="text-3xl md:text-4xl font-bold text-accent-600">100%</div>
              <div className="text-sm md:text-base text-gray-600 mt-1">Dedicated</div>
            </div>
          </div>

          <div className="mt-16">
            <a
              href="#about"
              className="inline-block animate-bounce text-accent-600 hover:text-accent-700 transition-colors"
            >
              <svg
                className="w-8 h-8 mx-auto"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
