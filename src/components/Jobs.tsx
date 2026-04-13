import { useEffect } from "react";
import { jobs, jobIds } from "../data/jobs";
import { animateIn } from "../lib/animations";

export function Jobs() {
  useEffect(() => {
    let time = 0;
    const timers: number[] = [];

    timers.push(
      window.setTimeout(() => {
        animateIn("#exp-header", "fadeInUp");
      }, time),
    );

    time += 250;

    jobIds().forEach((_, index) => {
      timers.push(
        window.setTimeout(() => {
          animateIn(`#job${index}`, "fadeInUp");
        }, time),
      );
      time += 250;
    });

    return () => {
      timers.forEach((timer) => window.clearTimeout(timer));
    };
  }, []);

  const formatDescription = (description: string) =>
    description
      .trim()
      .split("\n\n")
      .map((entry) => entry.replace(/\s+/g, " ").trim())
      .filter(Boolean);

  return (
    <section className="section-shell">
      <h1 className="section-title invisible text-cool" id="exp-header">
        Work History
      </h1>
      {jobIds().map((jobId, index) => (
        <article
          key={jobId}
          id={`job${index}`}
          className="glass-panel invisible grid rounded-4xl p-6 sm:p-7 lg:grid-cols-[12rem_1fr] lg:gap-8"
        >
          <div className="flex flex-col items-center justify-center gap-4 text-center lg:items-start lg:text-left">
            <div className="icon-pill h-24 w-24 text-[#ff7a59] shadow-[0_16px_32px_rgba(255,122,89,0.14)]">
              <span className="material-icons text-5xl">
                {jobs[jobId].icon}
              </span>
            </div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cool">
              {jobs[jobId].time}
            </p>
          </div>
          <div className="mt-6 rounded-3xl border border-white/10 bg-white/6 p-5 sm:p-6 lg:mt-0">
            <div className="text-center lg:text-left">
              <h2 className="font-display text-4xl text-white">
                {jobs[jobId].title}
              </h2>
              <p className="mt-2 text-2xl font-semibold text-accent">
                {jobs[jobId].company}
              </p>
              <p className="mt-3 inline-flex items-center gap-2 rounded-full bg-white/8 px-4 py-2 text-sm font-medium text-slate-100">
                <span className="material-icons text-base">location_on</span>
                {jobs[jobId].location}
              </p>
              <div className="mt-6 space-y-4 text-left text-base leading-8 text-slate-100">
                {formatDescription(jobs[jobId].description).map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        </article>
      ))}
    </section>
  );
}
