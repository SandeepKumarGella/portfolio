import { useState, useEffect, useRef } from 'react'
import { FaPhone, FaEnvelope, FaLinkedin, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa'

const Contact = () => {
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

  const contactMethods = [
    {
      icon: FaPhone,
      label: 'Phone',
      value: '+91 9398415617',
      href: 'tel:+9398415617',
    },
    {
      icon: FaEnvelope,
      label: 'Email',
      value: 'sandeepkumargella@gmail.com',
      href: 'mailto:sandeepkumargella@gmail.com',
    },
    {
      icon: FaLinkedin,
      label: 'LinkedIn',
      value: 'Connect with me',
      href: 'https://www.linkedin.com/in/sandeepkumargella/',
      external: true,
    },
    {
      icon: FaMapMarkerAlt,
      label: 'Location',
      value: 'Hyderabad, India',
      href: null,
    },
  ]

  return (
    <section id="contact" className="section-container bg-gray-50">
      <div ref={sectionRef} className="relative z-10">
        <h2 className="section-title">Get In Touch</h2>
        <div className="max-w-5xl mx-auto">
          <div className={`card ${isVisible ? 'fade-in' : 'opacity-0'}`}>
            <div className="text-center mb-10">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent-600 text-white mb-4 shadow-md">
                <FaPaperPlane className="text-2xl" />
              </div>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-2xl mx-auto">
                I'm always open to discussing new opportunities and interesting projects.
                Feel free to reach out!
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {contactMethods.map((method, index) => {
                const content = (
                  <div
                    className={`flex items-center gap-4 p-5 rounded-lg border-2 border-gray-200 bg-white hover:border-accent-300 hover:shadow-md transition-all duration-300 ${
                      method.href ? 'cursor-pointer' : ''
                    } ${isVisible ? 'fade-in' : 'opacity-0'}`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex-shrink-0 w-14 h-14 rounded-lg bg-accent-600 text-white flex items-center justify-center shadow-md">
                      <method.icon className="text-xl" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-600 mb-1">{method.label}</p>
                      <p className="text-lg font-bold text-gray-900">{method.value}</p>
                    </div>
                  </div>
                )

                return method.href ? (
                  <a
                    key={index}
                    href={method.href}
                    target={method.external ? '_blank' : undefined}
                    rel={method.external ? 'noopener noreferrer' : undefined}
                    className="block"
                  >
                    {content}
                  </a>
                ) : (
                  <div key={index}>{content}</div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
