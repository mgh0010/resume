import { useCart } from "../context/CartContext";
import { getSkillName, skillIds } from "../data/michael";

export function SkillList() {
  const { chosenSkills, toggleSkill } = useCart();

  return (
    <div>
      <p className="mb-6 text-sm uppercase tracking-[0.28em] text-cool">
        Choose the skills you&apos;re looking for
      </p>
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {skillIds().map((skill) => {
          const skillName = getSkillName(skill);
          const selected = chosenSkills.includes(skillName);

          return (
            <button
              key={skill}
              type="button"
              id={skill}
              aria-pressed={selected}
              className={[
                "glass-soft focus-ring interactive-lift relative overflow-hidden rounded-3xl border px-5 py-6 text-left hover:border-[#ffd166]/40 hover:bg-white/10",
                selected
                  ? "border-[#ffd166]/85 bg-[linear-gradient(135deg,rgba(255,214,102,0.28),rgba(255,255,255,0.12))] shadow-[0_0_0_2px_rgba(255,214,102,0.28),0_18px_36px_rgba(255,214,102,0.18)]"
                  : "border-white/10",
              ].join(" ")}
              onClick={() => toggleSkill(skillName)}
            >
              <span
                className={[
                  "pointer-events-none absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-[#ffd166] via-[#ffe29a] to-[#ffd166] transition-opacity duration-200",
                  selected ? "opacity-100" : "opacity-0",
                ].join(" ")}
              />
              <span className="flex items-start justify-between gap-4">
                <span className="block">
                  <span className="block text-xs font-semibold uppercase tracking-[0.24em] text-cool">
                    Skill
                  </span>
                  <span
                    className={[
                      "mt-3 block text-lg font-semibold text-white transition-colors duration-200",
                      selected ? "text-[#fff4cf]" : "",
                    ].join(" ")}
                  >
                    {skillName}
                  </span>
                </span>
                <span
                  className={[
                    "icon-pill h-10 w-10 shrink-0 transition-all duration-200",
                    selected
                      ? "border-[#ffd166]/80 bg-[#ffd166] text-slate-950 shadow-[0_10px_18px_rgba(255,214,102,0.24)]"
                      : "text-[#ffd166]",
                  ].join(" ")}
                >
                  <span className="material-icons text-base">
                    {selected ? "check" : "add"}
                  </span>
                </span>
              </span>
              <span
                className={[
                  "mt-4 inline-flex rounded-full px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.2em] transition-colors duration-200",
                  selected
                    ? "bg-[#ffd166] text-slate-950"
                    : "bg-white/8 text-[#ffd166]",
                ].join(" ")}
              >
                {selected ? "Selected" : "Tap to add"}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
