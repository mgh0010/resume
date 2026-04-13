import { useEffect } from "react";
import { Link } from "react-router-dom";
import { animateIn } from "../lib/animations";

export function CheckoutPage() {
  useEffect(() => {
    const timers = [
      window.setTimeout(() => {
        animateIn("#man-for-job-txt", "flipInX");
      }, 0),
      window.setTimeout(() => {
        animateIn("#me-img", "fadeIn");
      }, 250),
      window.setTimeout(() => {
        animateIn("#work-history-btn-large", "fadeInUp");
        animateIn("#projects-btn-large", "fadeInUp");
        animateIn("#about-me-btn-large", "fadeInUp");
      }, 250),
    ];

    return () => {
      timers.forEach((timer) => window.clearTimeout(timer));
    };
  }, []);

  return (
    <section className="section-shell">
      <div className="glass-panel rounded-[2.25rem] px-6 py-10 text-center sm:px-10 sm:py-14">
        <p className="font-display text-sm uppercase tracking-[0.35em] text-cool">
          Final Summary
        </p>
        <h1
          className="hero-title invisible mt-4 text-white"
          id="man-for-job-txt"
        >
          Meet your new <span className="text-accent">Software Engineer!</span>
        </h1>
        <img
          src="/assets/images/me.jpeg"
          className="invisible mx-auto mt-8 h-48 w-48 rounded-full object-cover ring-4 ring-white/12 shadow-[0_22px_48px_rgba(0,0,0,0.28)] sm:h-60 sm:w-60"
          id="me-img"
          alt="Michael Harrison"
        />
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Link
          id="work-history-btn-large"
          className="glass-panel focus-ring interactive-lift invisible rounded-3xl px-6 py-7 text-center"
          to="/work-history"
        >
          <span className="material-icons text-4xl text-[#ff7a59]">
            folder_shared
          </span>
          <h2 className="mt-4 font-display text-3xl text-white">
            Work History
          </h2>
          <p className="mt-3 text-sm leading-6 text-muted">
            Leadership scope, delivery history, and hands-on technical depth.
          </p>
        </Link>
        <Link
          id="projects-btn-large"
          className="glass-panel focus-ring interactive-lift invisible rounded-3xl px-6 py-7 text-center"
          to="/projects"
        >
          <span className="material-icons text-4xl text-[#ffd166]">work</span>
          <h2 className="mt-4 font-display text-3xl text-white">
            Side Projects
          </h2>
          <p className="mt-3 text-sm leading-6 text-muted">
            Product initiative, ownership, and breadth across platforms.
          </p>
        </Link>
        <a
          id="about-me-btn-large"
          className="glass-panel focus-ring interactive-lift invisible rounded-3xl px-6 py-7 text-center"
          href="https://www.linkedin.com/in/michael-harrison-4116b073/"
          target="_blank"
          rel="noreferrer"
        >
          <span className="material-icons text-4xl text-[#8fe388]">person</span>
          <h2 className="mt-4 font-display text-3xl text-white">About Me</h2>
          <p className="mt-3 text-sm leading-6 text-muted">
            External profile, broader background, and additional context.
          </p>
        </a>
      </div>
    </section>
  );
}
