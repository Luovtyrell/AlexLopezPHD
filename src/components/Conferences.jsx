import { MapPin, Tag } from "lucide-react"
import { conferences } from "../data/conferences"

const Conferences = () => {
  return (
    <div className="mt-16 w-full max-w-4xl">
      <div className="flex items-center gap-3 mb-8">
        <h3 className="text-4xl font-bold">Congresses and presentations</h3>
      </div>

      <div className="card backdrop-blur-xl bg-base-100/40 border border-base-content/10 hover:border-primary/50 transition-all duration-300">
        <div className="card-body p-8">
          <div className="space-y-6">
            {conferences.map((conference, index) => (
              <div
                key={conference.id}
                className="pb-6 border-b border-base-content/5 last:border-b-0 last:pb-0"
              >
                <div className="flex gap-6 items-start">
                  <div className="shrink-0 w-16 text-center">
                    <div className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
                      <span className="text-primary font-bold font-mono text-sm">
                        {conference.year}
                      </span>
                    </div>
                  </div>

                  <div className="flex-1 pt-1">
                    <h4 className="font-bold text-lg text-base-content mb-2">
                      {conference.title}
                    </h4>

                    <p className="text-sm text-primary/90 font-medium mb-2">
                      {conference.type === 'oral' && '→ Oral Communication'}
                      {conference.type === 'poster' && '→ Poster Presentation'}
                      {conference.type === 'attendance' && '→ Conference Attendance'}
                      {conference.type === 'organizing committe' && '→ Organizing Committee'}

                    </p>

                    {/* Location */}
                    {conference.location && (
                      <div className="flex items-center gap-1.5 text-sm text-base-content/60 mb-3">
                        <MapPin className="w-4 h-4" />
                        <span>{conference.location}</span>
                      </div>
                    )}

                    {/* Details */}
                    <p className="text-base-content/70 leading-relaxed mb-3">
                      {conference.details}
                    </p>

                    {/* Theme Tag */}
                    {conference.theme && (
                      <div>
                        <span className="badge badge-dash badge-primary font-mono text-xs gap-1">
                          <Tag className="w-3 h-3" />
                          <span className="text-base-content">{conference.theme}</span>
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Conferences
