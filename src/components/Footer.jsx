import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import { HiCode } from 'react-icons/hi'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 rounded-lg bg-accent-600 text-white">
                <HiCode className="text-xl" />
              </div>
              <span className="text-xl font-bold">Sandeep Kumar</span>
            </div>
            <p className="text-gray-400 text-sm">
              Frontend Developer building modern, scalable web applications with React.js and Next.js.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-400 hover:text-accent-400 transition-colors text-sm">
                  About
                </a>
              </li>
              <li>
                <a href="#skills" className="text-gray-400 hover:text-accent-400 transition-colors text-sm">
                  Skills
                </a>
              </li>
              <li>
                <a href="#experience" className="text-gray-400 hover:text-accent-400 transition-colors text-sm">
                  Experience
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-accent-400 transition-colors text-sm">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/in/sandeepkumargella/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-700 hover:bg-accent-600 flex items-center justify-center transition-all duration-300"
              >
                <FaLinkedin className="text-lg" />
              </a>
              <a
                href="mailto:sandeepkumargella@gmail.com"
                className="w-10 h-10 rounded-full bg-gray-700 hover:bg-accent-600 flex items-center justify-center transition-all duration-300"
              >
                <FaEnvelope className="text-lg" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-400 text-sm mb-2">
            © {currentYear} Gella Sandeep Kumar. All rights reserved.
          </p>
          <p className="text-gray-500 text-xs">
            Built with <span className="text-accent-400">React.js</span> and <span className="text-accent-400">Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
