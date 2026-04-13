import { useEffect } from "react";
import { Link } from "react-router-dom";
import { AttributeList } from "../components/AttributeList";
import { SkillList } from "../components/SkillList";
import { animateIn } from "../lib/animations";

export function ShopPage() {
  useEffect(() => {
    const timers = [
      window.setTimeout(() => {
        animateIn("#shop-header", "flipInX");
      }, 0),
      window.setTimeout(() => {
        animateIn("#build-web-dev-p", "fadeInUp");
      }, 250),
      window.setTimeout(() => {
        animateIn("#selection-panels", "fadeInUp");
        animateIn("#shop-panel", "fadeInUp");
        animateIn("#go-to-cart-btn", "fadeInUp");
      }, 500),
    ];

    return () => {
      timers.forEach((timer) => window.clearTimeout(timer));
    };
  }, []);

  return (
    <section className="section-shell">
      <div className="space-y-4">
        <h1 className="section-title invisible text-cool" id="shop-header">
          Shop
        </h1>
        <p
          id="build-web-dev-p"
          className="invisible max-w-3xl text-lg leading-8 text-slate-100 sm:text-xl"
        >
          <span className="text-accent">Build</span> your optimal Engineer!
        </p>
      </div>

      <div
        id="shop-panel"
        className="glass-panel invisible rounded-4xl p-5 sm:p-7"
      >
        <div id="selection-panels" className="invisible space-y-6">
          <div className="glass-soft rounded-3xl p-5 sm:p-6">
            <div className="mb-6 flex items-center gap-3">
              <span className="icon-pill h-12 w-12 text-[#ffd166]">
                <span className="material-icons">code</span>
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cool">
                  Build Profile
                </p>
                <h2 className="font-display text-3xl text-white">Skills</h2>
              </div>
            </div>
            <SkillList />
          </div>

          <div className="glass-soft rounded-3xl p-5 sm:p-6">
            <div className="mb-6 flex items-center gap-3">
              <span className="icon-pill h-12 w-12 text-[#ff9a7c]">
                <span className="material-icons">auto_awesome</span>
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cool">
                  Working Style
                </p>
                <h2 className="font-display text-3xl text-white">Attributes</h2>
              </div>
            </div>
            <AttributeList />
          </div>

          <div className="glass-soft rounded-3xl p-5 text-sm leading-7 text-muted">
            Pick the skill mix and attributes you care about most. The cart
            keeps a running summary before you jump to the full overview.
          </div>
        </div>
      </div>

      <div className="invisible flex justify-center" id="go-to-cart-btn">
        <Link
          className="cta-primary focus-ring interactive-lift rounded-full px-8 py-4 text-sm font-bold uppercase tracking-[0.28em]"
          to="/cart"
        >
          Cart
        </Link>
      </div>
    </section>
  );
}
