import { useEffect } from "react";
import { Link } from "react-router-dom";
import { animateIn } from "../lib/animations";

export function LandingPage() {
  useEffect(() => {
    const timers = [
      window.setTimeout(() => {
        animateIn("#hi", "fadeInUp");
      }, 0),
      window.setTimeout(() => {
        animateIn("#hero-ornament", "fadeIn");
        animateIn("#find-help", "fadeInUp");
      }, 350),
      window.setTimeout(() => {
        animateIn("#go-shop", "fadeInUp");
      }, 800),
    ];

    return () => {
      timers.forEach((timer) => window.clearTimeout(timer));
    };
  }, []);

  return (
    <section className="glass-panel hero-shell rounded-[2.25rem] px-6 py-12 sm:px-10 sm:py-16 lg:px-14 lg:py-20">
      <div className="hero-radial -right-12 -top-8 h-36 w-36 bg-[#ff7a59]/35" />
      <div className="hero-radial -left-8 bottom-8 h-28 w-28 bg-[#4dd0e1]/22 [animation-duration:18s]" />
      <div className="hero-radial -bottom-12 right-[20%] h-44 w-44 bg-[#ffd166]/14 [animation-duration:20s]" />

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center text-center">
        <div
          id="hero-ornament"
          className="invisible mb-5 flex items-center gap-3"
        >
          <span className="h-px w-10 bg-linear-to-r from-transparent to-white/50" />
          <span className="rounded-full border border-white/14 bg-white/8 px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.32em] text-cool">
            Software Engineer
          </span>
          <span className="h-px w-10 bg-linear-to-l from-transparent to-white/50" />
        </div>

        <h1 className="hero-title hero-hi invisible" id="hi">
          Hi
        </h1>

        <h2
          className="hero-subtitle invisible mt-6 max-w-4xl text-3xl leading-tight text-white sm:text-4xl lg:text-[3.4rem] lg:leading-[1.02]"
          id="find-help"
        >
          Let&apos;s end your search for a{" "}
          <span className="text-accent">software engineer</span> here.
        </h2>

        <div
          className="invisible mt-10 flex flex-wrap items-center justify-center gap-4"
          id="go-shop"
        >
          <Link
            className="cta-primary focus-ring interactive-lift inline-flex items-center gap-3 rounded-full px-8 py-4 text-sm font-bold uppercase tracking-[0.28em]"
            to="/shop"
          >
            Go Shop
            <span className="material-icons text-base">east</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
