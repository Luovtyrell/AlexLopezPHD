import { useState } from 'react'
import { Github, ExternalLink, ArrowRight, Layers, Database } from 'lucide-react'
import { projects } from '../data/projects'

const ProjectsShowcase = () => {
  const [activeTab, setActiveTab] = useState(0)
  const activeProject = projects[activeTab]

  return (
    <div className="mt-16 w-full max-w-5xl mx-auto">
      <div className="flex items-center gap-3 mb-8">
        <h3 className="text-4xl font-bold">Projects</h3>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 bg-base-100/30 backdrop-blur-xl border border-white/10 rounded-3xl p-2 lg:p-3 shadow-2xl">

        <div className="lg:w-1/3 flex lg:flex-col gap-2 p-1 overflow-x-auto lg:overflow-visible">
          {projects.map((project, index) => (
            <button
              key={project.id}
              onClick={() => setActiveTab(index)}
              className={`flex items-center gap-4 p-4 rounded-xl transition-all duration-300 text-left group min-w-[200px] lg:min-w-0 ${activeTab === index
                  ? 'bg-base-100 shadow-lg scale-[1.02] ring-1 ring-white/20'
                  : 'hover:bg-white/5 text-base-content/60 hover:text-base-content'
                }`}
            >
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${activeTab === index ? 'bg-primary/10 text-primary' : 'bg-base-content/5 text-base-content/40 group-hover:bg-base-content/10'
                }`}>
                {index === 0 ? <Database className="w-5 h-5" /> : <Layers className="w-5 h-5" />}
              </div>
              <div className="flex flex-col">
                <span className={`font-bold transition-colors ${activeTab === index ? 'text-base-content' : ''}`}>
                  {project.title}
                </span>
                <span className="text-xs text-base-content/50 font-medium uppercase tracking-wider">
                  {project.subtitle}
                </span>
              </div>
            </button>
          ))}
        </div>

        <div className="lg:w-2/3 bg-base-100/50 rounded-2xl p-6 lg:p-8 flex flex-col relative overflow-hidden group">

          <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br opacity-10 blur-3xl rounded-full -mr-16 -mt-16 transition-colors duration-500 ${activeTab === 0 ? 'from-blue-500 to-purple-500' : 'from-green-500 to-emerald-500'
            }`} />

          <div className="relative z-10 flex flex-col h-full">
            <div className="mb-6">
              <h4 className="text-3xl font-black mb-2 flex items-center gap-3">
                {activeProject.title}
                <div className={`h-1.5 w-1.5 rounded-full ${activeTab === 0 ? 'bg-blue-500' : 'bg-green-500'}`} />
              </h4>
              <p className="text-lg text-base-content/80 leading-relaxed font-light">
                {activeProject.description}
              </p>
            </div>

            <div className="mt-auto">
              <div className="flex flex-wrap gap-2 mb-8">
                {activeProject.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-full text-sm font-medium bg-base-content/5 border border-base-content/5 text-base-content/70"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-4 pt-6 border-t border-base-content/10">
                {activeProject.link && (
                  <a
                    href={activeProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-sm md:btn-md gap-2 shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-0.5 transition-all"
                  >
                    View Project
                    <ArrowRight className="w-4 h-4" />
                  </a>
                )}

                {activeProject.github && activeProject.link !== activeProject.github && (
                  <a
                    href={activeProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-ghost btn-sm md:btn-md gap-2 hover:bg-base-content/5"
                  >
                    <Github className="w-4 h-4" />
                    Source Code
                  </a>
                )}
                {activeProject.github && !activeProject.link && (
                  <a
                    href={activeProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-sm md:btn-md gap-2 shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-0.5 transition-all"
                  >
                    <Github className="w-4 h-4" />
                    View on GitHub
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectsShowcase
