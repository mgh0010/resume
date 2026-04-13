import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { animateIn } from "../lib/animations";

export function CartPage() {
  const { chosenSkills, chosenAttributes, removeSkill, removeAttribute } =
    useCart();

  useEffect(() => {
    let time = 0;
    const timers: number[] = [];

    timers.push(
      window.setTimeout(() => {
        animateIn("#cart-header", "fadeInUp");
      }, time),
    );
    time += 250;

    timers.push(
      window.setTimeout(() => {
        animateIn("#chosen-skill-header", "flipInX");
      }, time),
    );

    chosenSkills.forEach((_, index) => {
      timers.push(
        window.setTimeout(() => {
          animateIn(`#skill${index}`, "flipInX");
        }, time),
      );
      time += 250;
    });

    timers.push(
      window.setTimeout(() => {
        animateIn("#chosen-attr-header", "flipInX");
      }, time),
    );

    chosenAttributes.forEach((_, index) => {
      timers.push(
        window.setTimeout(() => {
          animateIn(`#attr${index}`, "flipInX");
        }, time),
      );
      time += 250;
    });

    timers.push(
      window.setTimeout(() => {
        animateIn("#go-to-checkout-btn", "fadeIn");
      }, time),
    );

    return () => {
      timers.forEach((timer) => window.clearTimeout(timer));
    };
  }, [chosenAttributes, chosenSkills]);

  return (
    <section className="section-shell">
      <Link
        to="/shop"
        className="focus-ring interactive-lift inline-flex items-center gap-2 rounded-full bg-white/8 px-4 py-2 text-sm font-semibold uppercase tracking-[0.22em] text-slate-100 hover:bg-white/12"
      >
        <span className="material-icons text-base">arrow_back</span>
        Back to shop
      </Link>

      <div className="space-y-3">
        <h1 className="section-title invisible text-cool" id="cart-header">
          Cart
        </h1>
        <p className="max-w-2xl text-base leading-7 text-muted">
          A clear summary of the skills and attributes selected for the ideal
          engineer profile.
        </p>
      </div>

      <div className="grid gap-6 xl:grid-cols-2">
        <section className="glass-panel rounded-4xl p-6 sm:p-7">
          <div className="mb-6 flex items-center justify-between gap-3">
            <h2
              className="font-display invisible text-4xl text-white"
              id="chosen-skill-header"
            >
              Chosen Skills
            </h2>
            <span className="rounded-full bg-white/8 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-cool">
              {chosenSkills.length}
            </span>
          </div>
          <div className="space-y-3">
            {chosenSkills.map((skill, index) => (
              <div
                key={`${skill}-${index}`}
                className="glass-soft invisible flex items-center justify-between gap-4 rounded-3xl px-4 py-4"
                id={`skill${index}`}
              >
                <span className="font-medium text-white">{skill}</span>
                <button
                  type="button"
                  aria-label={`Remove ${skill}`}
                  className="icon-pill focus-ring interactive-lift h-10 w-10 text-slate-100 hover:bg-white/14"
                  onClick={() => removeSkill(skill)}
                >
                  <span className="material-icons text-base">delete</span>
                </button>
              </div>
            ))}
            {chosenSkills.length === 0 ? (
              <div className="rounded-3xl border border-dashed border-white/14 px-4 py-5 text-sm text-muted">
                No skills selected yet.
              </div>
            ) : null}
          </div>
        </section>

        <section className="glass-panel rounded-4xl p-6 sm:p-7">
          <div className="mb-6 flex items-center justify-between gap-3">
            <h2
              className="font-display invisible text-4xl text-accent"
              id="chosen-attr-header"
            >
              Chosen Attributes
            </h2>
            <span className="rounded-full bg-white/8 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-cool">
              {chosenAttributes.length}
            </span>
          </div>
          <div className="space-y-3">
            {chosenAttributes.map((attribute, index) => (
              <div
                key={`${attribute}-${index}`}
                className="glass-soft invisible flex items-center justify-between gap-4 rounded-3xl px-4 py-4"
                id={`attr${index}`}
              >
                <span className="font-medium text-white">{attribute}</span>
                <button
                  type="button"
                  aria-label={`Remove ${attribute}`}
                  className="icon-pill focus-ring interactive-lift h-10 w-10 text-slate-100 hover:bg-white/14"
                  onClick={() => removeAttribute(attribute)}
                >
                  <span className="material-icons text-base">delete</span>
                </button>
              </div>
            ))}
            {chosenAttributes.length === 0 ? (
              <div className="rounded-3xl border border-dashed border-white/14 px-4 py-5 text-sm text-muted">
                No attributes selected yet.
              </div>
            ) : null}
          </div>
        </section>
      </div>

      <div className="invisible flex justify-center" id="go-to-checkout-btn">
        <Link
          className="cta-primary focus-ring interactive-lift rounded-full px-8 py-4 text-sm font-bold uppercase tracking-[0.28em]"
          to="/checkout"
        >
          Find your Engineer
        </Link>
      </div>
    </section>
  );
}
