import { useEffect, useState } from "react";
import { projectData, projects } from "../data/projects";
import { animateIn } from "../lib/animations";

export function ProjectsPage() {
  const [expandedProject, setExpandedProject] = useState<string | null>(null);

  useEffect(() => {
    let time = 0;
    const timers: number[] = [];

    timers.push(
      window.setTimeout(() => {
        animateIn("#projects-header", "fadeInUp");
      }, time),
    );

    time += 250;

    projects().forEach((_, index) => {
      timers.push(
        window.setTimeout(() => {
          animateIn(`#project${index}`, "fadeInUp");
        }, time),
      );
      time += 250;
    });

    return () => {
      timers.forEach((timer) => window.clearTimeout(timer));
    };
  }, []);

  return (
    <section className="section-shell">
      <h1 className="section-title invisible text-cool" id="projects-header">
        Side Projects
      </h1>
      <div className="grid gap-6 xl:grid-cols-2">
        {projects().map((projectId, index) => (
          <article
            key={projectId}
            className="glass-panel invisible overflow-hidden rounded-4xl"
            id={`project${index}`}
          >
            <div className="aspect-[16/10] overflow-hidden">
              <img
                className="h-full w-full object-cover"
                src={projectData[projectId].imageUrl}
                alt={projectData[projectId].name}
              />
            </div>
            <div className="space-y-5 p-6 sm:p-7">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cool">
                    Project
                  </p>
                  <h2 className="mt-3 font-display text-4xl text-white">
                    {projectData[projectId].name}
                  </h2>
                </div>
                <button
                  type="button"
                  aria-expanded={expandedProject === projectId}
                  aria-controls={`project-details-${projectId}`}
                  className="icon-pill focus-ring interactive-lift h-12 w-12 text-slate-100 hover:bg-white/14"
                  onClick={() =>
                    setExpandedProject((current) =>
                      current === projectId ? null : projectId,
                    )
                  }
                >
                  <span className="material-icons">
                    {expandedProject === projectId ? "close" : "more_horiz"}
                  </span>
                </button>
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  className="cta-primary focus-ring interactive-lift rounded-full px-5 py-3 text-xs font-bold uppercase tracking-[0.24em]"
                  href={projectData[projectId].linkToSite}
                  target="_blank"
                  rel="noreferrer"
                >
                  Link to project
                </a>
                <button
                  type="button"
                  aria-expanded={expandedProject === projectId}
                  aria-controls={`project-details-${projectId}`}
                  className="cta-secondary focus-ring interactive-lift rounded-full px-5 py-3 text-xs font-bold uppercase tracking-[0.24em]"
                  onClick={() =>
                    setExpandedProject((current) =>
                      current === projectId ? null : projectId,
                    )
                  }
                >
                  {expandedProject === projectId
                    ? "Hide details"
                    : "Show details"}
                </button>
              </div>

              <div
                id={`project-details-${projectId}`}
                className={[
                  "overflow-hidden rounded-3xl bg-white/6 px-5 transition-all duration-300",
                  expandedProject === projectId
                    ? "max-h-80 border border-white/10 py-5 opacity-100"
                    : "max-h-0 border-transparent py-0 opacity-0",
                ].join(" ")}
              >
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cool">
                  Details
                </p>
                <p className="mt-3 leading-7 text-slate-100">
                  {projectData[projectId].details}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
