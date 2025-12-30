'use client'

import { useState, useEffect } from 'react'
import { FaPhone, FaEnvelope, FaLinkedin, FaDownload } from 'react-icons/fa'
import { HiCode } from 'react-icons/hi'
import { motion } from 'framer-motion'
import FadeIn from './ui/FadeIn'
import AnimatedBackground from './ui/AnimatedBackground'

export default function Hero() {
  const [text, setText] = useState('')
  const fullText = 'Frontend Developer'
  const [isDeleting, setIsDeleting] = useState(false)
  const [typingSpeed, setTypingSpeed] = useState(150)

  useEffect(() => {
    let timeout: NodeJS.Timeout
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
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-50 via-white to-gray-50 -z-20" />
      <AnimatedBackground />

      <div className="section-container text-center relative z-10 w-full">
        <div className="max-w-5xl mx-auto px-4">
          <FadeIn delay={0.2} direction="down">
            <div className="mb-8 flex justify-center">
              <div className="relative group">
                <div className="absolute inset-0 bg-teal-400 rounded-full blur opacity-70 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
                <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full bg-white p-1 shadow-xl ring-4 ring-white/50 backdrop-blur-sm">
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-navy-900 to-navy-700 flex items-center justify-center overflow-hidden">
                    <HiCode className="text-5xl md:text-6xl text-teal-400" />
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.4}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-navy-900 mb-6 font-display tracking-tight">
              Sandeep <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-indigo-600">Kumar</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.6}>
            <h2 className="text-2xl md:text-4xl text-navy-700 mb-8 h-12 md:h-16 flex items-center justify-center font-display">
              <span className="font-semibold">{text}</span>
              <span className="animate-pulse text-teal-600 ml-1">|</span>
            </h2>
          </FadeIn>

          <FadeIn delay={0.8}>
            <p className="text-lg md:text-xl text-navy-600 mb-12 max-w-2xl mx-auto leading-relaxed">
              Building <span className="font-semibold text-navy-900">scalable</span>,{' '}
              <span className="font-semibold text-navy-900">responsive</span>, and{' '}
              <span className="font-semibold text-navy-900">high-performance</span> web applications
              with React.js and Next.js.
            </p>
          </FadeIn>

          <FadeIn delay={1.0}>
            <div className="flex flex-wrap justify-center gap-4 mb-16">
              <a
                href="/Sandeep_Resume.pdf"
                download="Sandeep_Resume.pdf"
                className="group flex items-center gap-2 px-8 py-4 bg-navy-900 text-white rounded-full hover:bg-navy-800 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                <FaDownload className="relative z-10" />
                <span className="relative z-10 font-semibold">Download Resume</span>
              </a>
              <a
                href="https://www.linkedin.com/in/sandeepkumargella/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-8 py-4 bg-white text-navy-900 border border-gray-200 rounded-full hover:border-indigo-500 hover:text-indigo-600 transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-1"
              >
                <FaLinkedin className="text-xl" />
                <span className="font-semibold">LinkedIn</span>
              </a>
              <a
                href="mailto:sandeepkumargella@gmail.com"
                className="group flex items-center gap-2 px-6 py-4 bg-white text-navy-900 border border-gray-200 rounded-full hover:border-teal-500 hover:text-teal-600 transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-1"
              >
                <FaEnvelope className="text-xl" />
              </a>
            </div>
          </FadeIn>

          <FadeIn delay={1.2} direction="up">
            <div className="grid grid-cols-3 gap-8 md:gap-12 max-w-3xl mx-auto">
              {[
                { number: '4+', label: 'Years Exp' },
                { number: '10+', label: 'Projects' },
                { number: '100%', label: 'Dedicated' },
              ].map((stat, index) => (
                <div key={index} className="text-center group cursor-default">
                  <div className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-indigo-600 font-display mb-1 group-hover:scale-110 transition-transform duration-300">
                    {stat.number}
                  </div>
                  <div className="text-sm md:text-base text-navy-500 font-medium uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </FadeIn>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          >
            <a
              href="#about"
              className="flex flex-col items-center gap-2 text-navy-400 hover:text-teal-600 transition-colors duration-300"
              aria-label="Scroll to about section"
            >
              <span className="text-sm font-medium tracking-widest uppercase">Scroll</span>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <svg
                  className="w-6 h-6"
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
              </motion.div>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
