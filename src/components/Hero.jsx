import { useState, useEffect } from 'react'
import { Github, Linkedin, Mail, BookOpen, Camera, GraduationCap } from 'lucide-react'
import Timeline from './Timeline'
import Publications from './Publications'

const Hero = () => {
  const specialties = [
    'Ecologist',
    'Data Scientist',
    'Biodiversity Conservation',
    'Herpetology',
    'Biostatistics',
    'Machine Learning'
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(false)
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % specialties.length)
        setIsAnimating(true)
      }, 300)
    }, 2500)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-base-100 via-base-200 to-base-300 flex items-center justify-center px-6 py-20">
      <div className="max-w-6xl w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-12 items-start">

          <div className="flex flex-col gap-6">
            <div className="avatar">
              <div className="w-32 h-32 lg:w-48 lg:h-48 rounded-full ring ring-primary ring-offset-base-100 ring-offset-4 overflow-hidden">
                <img
                  src="./public/img/picofme.png"
                  alt="Àlex Lopez"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="flex gap-2 text-base-content/70">

              <div className="flex flex-row flex-wrap lg:flex-col gap-4">
                <a href="mailto:93lopez.alejandro@gmail.com" className="flex items-center gap-2 text-base-content hover:text-primary transition-colors">
                  <Mail className="w-5 h-5" />
                  Email
                </a>

                <a href="https://linkedin.com/in/alex-lopez-ph-d-291322a8" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-base-content hover:text-primary transition-colors">
                  <Linkedin className="w-5 h-5" />
                  LinkedIn
                </a>
                <a href="https://github.com/Calotriton" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-base-content hover:text-primary transition-colors">
                  <Github className="w-5 h-5" />
                  GitHub
                </a>

                <a
                  href="https://scholar.google.com/citations?user=4PW4KAUAAAAJ&hl=es"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-base-content hover:text-primary transition-colors"
                >
                  <GraduationCap className="w-5 h-5" />
                  Google Scholar
                </a>
                <a href="https://medium.com/@StatsBio" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-base-content hover:text-primary transition-colors">
                  <BookOpen className="w-5 h-5" />
                  Medium
                </a>

                <a href="https://500px.com/p/Alex_LS?view=photos" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-base-content hover:text-primary transition-colors">
                  <Camera className="w-5 h-5" />
                  500px
                </a>

              </div>
            </div>

          </div>

          <div className="flex flex-col gap-8">
            <div>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-4">
                Àlex López
              </h1>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-base-content/60 tracking-wide h-16 flex items-center">
                <span
                  className={`font-semibold transition-all duration-400 ${isAnimating ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
                    }`}
                >
                  {specialties[currentIndex]}
                </span>
              </h2>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-base-content/80 leading-relaxed text-lg">
                I'm Àlex López, an <span className="text-primary font-semibold">interdisciplinary ecologist (Ph.D.)</span> and <span className="text-primary font-semibold">data scientist (M.Sc.)</span> working at the intersection of biodiversity, data analysis, statistical modelling, and machine learning. My interests span <span className="text-primary font-semibold">freshwater and marine ecosystems</span>, along with a deep passion for <span className="text-primary font-semibold">herpetology</span>, and I enjoy combining ecological knowledge with modern data tools to support practical management and conservation decisions.
              </p>
            </div>
            <Publications />
            <Timeline />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero