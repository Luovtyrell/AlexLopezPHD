import { Github, Code, Tag } from "lucide-react"
import { SiHuggingface } from "react-icons/si"
import { projects } from "../data/projects"

const Projects = () => {
  return (
    <div className="mt-16 w-full max-w-4xl">
      <div className="flex items-center gap-3 mb-8">
        <h3 className="text-4xl font-bold">Projects</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="card backdrop-blur-xl bg-base-100/40 border border-base-content/10 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 group"
          >
            <div className="card-body p-6">
              <div className="flex justify-between items-start gap-4">
                <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:scale-110 transition-transform duration-300">
                  <Code className="w-6 h-6" />
                </div>

              </div>

              <div className="mt-4">
                <h4 className="text-xl font-bold text-base-content mb-2">
                  {project.title}
                </h4>
                <p className="text-base-content/70 text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-base-content/5">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="badge badge-dash badge-primary font-mono text-xs gap-1"
                  >
                    <Tag className="w-3 h-3" />
                    <span className="text-base-content">{tag}</span>
                  </span>
                ))}
              </div>

              <div className="flex gap-3 mt-6">
                {project.repo && (
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-sm btn-soft gap-2 hover:bg-primary/10 hover:text-primary"
                  >
                    <Github className="w-4 h-4" />
                    View on GitHub
                  </a>
                )}
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-sm btn-soft gap-2 hover:bg-primary/10 hover:text-primary"
                  >
                    <SiHuggingface className="w-4 h-4" />
                    View on Hugging Face
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects
