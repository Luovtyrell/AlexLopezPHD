import { useState } from 'react'
import { Github, ExternalLink, Terminal, Code2, Play } from 'lucide-react'
import { projects } from '../data/projects'

const ProjectsTerminal = () => {
  const [activeTab, setActiveTab] = useState(0)
  const activeProject = projects[activeTab]

  return (
    <div className="mt-16 w-full max-w-4xl">
      <div className="flex items-center gap-3 mb-8">
        <h3 className="text-4xl font-bold">Projects</h3>
      </div>

      <div className="w-full rounded-xl overflow-hidden bg-[#1e1e1e]/90 backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/50 font-mono">
        {/* Title Bar */}
        <div className="flex items-center px-4 py-3 bg-[#252526] border-b border-white/5">
          <div className="flex gap-2 mr-4">
            <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
            <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
            <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
          </div>
          <div className="flex text-xs text-white/50 gap-4 overflow-x-auto no-scrollbar">
            {projects.map((project, index) => (
              <button
                key={project.id}
                onClick={() => setActiveTab(index)}
                className={`px-3 py-1 rounded-t-md transition-colors flex items-center gap-2 ${activeTab === index
                    ? 'bg-[#1e1e1e] text-blue-400 border-t border-blue-400'
                    : 'hover:bg-white/5 text-white/40'
                  }`}
              >
                <Code2 className="w-3 h-3" />
                {project.title.toLowerCase()}.{project.technologies[0] === 'R' ? 'r' : 'py'}
              </button>
            ))}
          </div>
        </div>

        {/* Content Area */}
        <div className="p-6 md:p-8 min-h-[400px] flex flex-col relative text-[15px] leading-relaxed">
          {/* Line Numbers Background */}
          <div className="absolute left-4 top-8 bottom-8 text-right text-white/20 select-none font-mono text-sm hidden md:block">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i}>{i + 1}</div>
            ))}
          </div>

          <div className="md:pl-8 flex flex-col h-full">
            <div className="text-gray-400 mb-2">
              <span className="text-purple-400">const</span> <span className="text-blue-400">{activeProject.title}</span> = <span className="text-yellow-300">{'{'}</span>
            </div>

            <div className="pl-6 flex-grow space-y-2">
              <div>
                <span className="text-blue-300">type:</span> <span className="text-green-400">"{activeProject.subtitle}"</span>,
              </div>
              <div className="flex gap-2">
                <span className="text-blue-300">description:</span>
                <span className="text-orange-300">"{activeProject.description}"</span>,
              </div>
              <div>
                <span className="text-blue-300">tech_stack:</span> <span className="text-yellow-300"> [</span>
              </div>
              <div className="pl-6 grid grid-cols-2 md:grid-cols-3 gap-2 py-1">
                {activeProject.technologies.map((tech, i) => (
                  <span key={i} className="text-green-400">"{tech}"<span className="text-white/40">,</span></span>
                ))}
              </div>
              <div className="text-yellow-300">],</div>
            </div>

            <div className="text-yellow-300 mt-2">{'}'}</div>

            {/* Terminal Actions */}
            <div className="mt-auto pt-8 border-t border-white/10 flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-white/40 text-sm">
                <Terminal className="w-4 h-4" />
                <span>~/projects/{activeProject.title.toLowerCase()}</span>
              </div>

              <div className="ml-auto flex gap-3">
                {activeProject.github && (
                  <a
                    href={activeProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-[#2d2d2d] hover:bg-[#3d3d3d] rounded-md text-white/80 transition-all text-sm group"
                  >
                    <Github className="w-4 h-4 group-hover:text-white" />
                    <span>git view</span>
                  </a>
                )}
                {activeProject.link && (
                  <a
                    href={activeProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-primary/20 hover:bg-primary/30 text-primary hover:text-primary-focus rounded-md transition-all text-sm font-semibold"
                  >
                    <Play className="w-3 h-3 fill-current" />
                    <span>run_demo</span>
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

export default ProjectsTerminal
