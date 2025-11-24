import { useState, useEffect } from 'react'
import { Calendar, MapPin, Github, Linkedin, Mail, Globe, BookOpen, Camera, ExternalLink } from 'lucide-react'

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

          <div className="flex flex-col items-center lg:items-start gap-6">
            <div className="avatar">
              <div className="w-48 h-48 rounded-full ring ring-primary ring-offset-base-100 ring-offset-4 overflow-hidden">
                <img
                  src="./public/img/picofme.png"
                  alt="Àlex Lopez"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="flex items-center gap-2 text-base-content/70">
              <MapPin className="w-5 h-5 text-primary" />
              <span>Vic, Barcelona</span>
            </div>
          </div>

          <div className="flex flex-col gap-8">
            <div>
              <h1 className="text-7xl lg:text-8xl font-black mb-4">
                Àlex Lopez
              </h1>
              <h2 className="text-3xl lg:text-4xl font-light text-base-content/60 tracking-wide h-16 flex items-center">
                <span
                  className={`font-semibold transition-all duration-400 ${isAnimating ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
                    }`}
                >
                  {specialties[currentIndex]}
                </span>
              </h2>
            </div>

            <div className="flex gap-4 flex-wrap">
              <a
                href="mailto:93lopez.alejandro@gmail.com"
                className="btn btn-ghost gap-2 rounded-full backdrop-blur-xl bg-base-300/30 border border-base-content/10 hover:bg-base-content/10 hover:border-primary/50 transition-all duration-300"
              >
                <Mail className="w-5 h-5" />
                Email
              </a>
              <a
                href="https://linkedin.com/in/alex-lopez-ph-d-291322a8"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost gap-2 rounded-full backdrop-blur-xl bg-base-300/30 border border-base-content/10 hover:bg-base-content/10 hover:border-primary/50 transition-all duration-300"
              >
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </a>
              <a
                href="https://github.com/Calotriton"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost gap-2 rounded-full backdrop-blur-xl bg-base-300/30 border border-base-content/10 hover:bg-base-content/10 hover:border-primary/50 transition-all duration-300"
              >
                <Github className="w-5 h-5" />
                GitHub
              </a>

              <a
                href="https://medium.com/@alexlopez"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost gap-2 rounded-full backdrop-blur-xl bg-base-300/30 border border-base-content/10 hover:bg-base-content/10 hover:border-primary/50 transition-all duration-300"
              >
                <BookOpen className="w-5 h-5" />
                Medium
              </a>
              <a
                href="https://500px.com/p/alexlopez"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost gap-2 rounded-full backdrop-blur-xl bg-base-300/30 border border-base-content/10 hover:bg-base-content/10 hover:border-primary/50 transition-all duration-300"
              >
                <Camera className="w-5 h-5" />
                500px
              </a>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-base-content/80 leading-relaxed text-lg">
                I'm Àlex López, an <span className="text-primary font-semibold">interdisciplinary ecologist (Ph.D.)</span> and <span className="text-primary font-semibold">data scientist (M.Sc.)</span> working at the intersection of biodiversity, data analysis, statistical modelling, and machine learning. My interests span <span className="text-primary font-semibold">freshwater and marine ecosystems</span>, along with a deep passion for <span className="text-primary font-semibold">herpetology</span>, and I enjoy combining ecological knowledge with modern data tools to support practical management and conservation decisions.
              </p>
            </div>

            <div className="mt-8">
              <h3 className="text-4xl font-bold mb-6">Publications</h3>

              <div className="card backdrop-blur-xl bg-base-300/30 border border-base-content/10 hover:border-primary/30 transition-all duration-300">
                <div className="card-body">
                  <div className="flex justify-between items-start flex-wrap gap-4">
                    <div>
                      <h4 className="card-title text-2xl">UX/UI Research Institute</h4>
                      <a href="#" className="text-primary hover:underline">
                        PhD Researcher & Designer
                      </a>
                    </div>
                    <span className="text-base-content/60 flex items-center gap-2">
                      2022 - <ExternalLink className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <h3 className="text-4xl font-bold mb-6">Education and credentials</h3>
              <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">

                <li>
                  <div className="timeline-middle">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="h-5 w-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="timeline-end md:mb-10">
                    <time className="font-mono italic">2024 - 2025</time>
                    <div className="text-lg font-black">Master's degree, Data Science, Big Data, Machine Learning, & AI.</div>
                    <div className="text-lg text-rose-600">universidad Complutense de Madrid</div>
                    For my thesis, I created a machine learning model that identifies frog and toad species through audio files, which can be uploaded or recorded directly in the field.
                  </div>
                  <hr />
                </li>
                <li>
                  <hr />
                  <div className="timeline-middle">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="h-5 w-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="timeline-start mb-10 md:text-end">
                    <time className="font-mono italic">2019 - 2022</time>
                    <div className="text-lg font-black">Doctor of Philosophy - PhD, Ecology</div>
                    <div className="text-lg text-blue-600">Universitat de Girona</div>
                    Assessment of the interacting impacts of damming, metal pollution and climate change on multiple structural and functional parameters of a Pyrenean headwater stream.
                  </div>
                  <hr />
                </li>
                <li>
                  <hr />
                  <div className="timeline-middle">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="h-5 w-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="timeline-end md:mb-10">
                    <time className="font-mono italic">2016 - 2017 </time>
                    <div className="text-lg text-sky-600">Universitat de València</div>
                    <div className="text-lg font-black">Master's degree in Animal Biodiversity: Conservation and Evolution</div>
                    Thesis on the impact of overfishing on the diet of the stripped dolphin (Stenella coeruleoalba).
                  </div>
                  <hr />
                </li>
                <li>
                  <hr />
                  <div className="timeline-middle">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="h-5 w-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="timeline-start mb-10 md:text-end">
                    <time className="font-mono italic">2011 - 2015</time>
                    <div className="text-lg text-primary">Universitat Autònoma de Barcelona</div>

                    <div className="text-lg font-black">Bachelor of Applied Science (B.A. Sc.) in enviormental biology</div>
                    Degree focused in Zoology, botany, ecology, and biodiversity. Also included knowledge of animal and plant physiology, environmental ecotoxicology and management, GIS, and nature conservation.
                    <div className="font-mono italic mt-5">jun 2014 - aug 2015</div>
                    <div className="text-lg text-cyan-400">Universidad de Costa Rica</div>
                    Studying abroad for the last year of my bachelor's degree
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero