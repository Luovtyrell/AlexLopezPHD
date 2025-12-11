import { ExternalLink, Calendar } from "lucide-react"
import { publications } from "../data/publications"

const Publications = () => {
  return (
    <div className="mt-16 w-full max-w-4xl">
      <div className="flex items-center gap-3 mb-8">
        <h3 className="text-4xl font-bold">Publications</h3>
      </div>

      <div className="space-y-6">
        {publications.map((pub) => (
          <div
            key={pub.id}
            className="card backdrop-blur-xl bg-base-100/40 border border-base-content/10 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 group"
          >
            <div className="card-body p-6">
              <div className="flex flex-col gap-3">
                <div className="flex justify-between items-start gap-4">
                  <h4 className="text-xl font-bold text-base-content">
                    {pub.title}
                  </h4>
                  <span className="badge badge-ghost font-mono shrink-0 flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {pub.year}
                  </span>
                </div>

                <p className="text-sm text-base-content/70 leading-relaxed">
                  {pub.authors}
                </p>

                <div className="flex flex-wrap items-center gap-3 mt-2 pt-4 border-t border-base-content/5">
                  <span className="font-semibold text-primary">
                    {pub.journal}
                  </span>
                  {pub.details && (
                    <span className="text-base-content/60 text-sm">
                      • {pub.details}
                    </span>
                  )}
                  {pub.doi && (
                    <span className="text-base-content/60 text-sm">
                      • DOI: {pub.doi}
                    </span>
                  )}

                  <div className="ml-auto">
                    {pub.link && (
                      <a
                        href={pub.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-sm btn-ghost gap-2 hover:bg-primary/10 hover:text-primary"
                      >
                        View Publication
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Publications