import { useCart } from "../context/CartContext";
import { attributesData } from "../data/michael";

function takeAwaySpaces(value: string): string {
  return value.replace(/ /g, "");
}

export function AttributeList() {
  const { chosenAttributes, toggleAttribute } = useCart();

  return (
    <div>
      <p className="mb-6 text-sm uppercase tracking-[0.28em] text-cool">
        Choose the attributes you&apos;re looking for
      </p>
      <div className="grid gap-4">
        {attributesData.map((attribute) => {
          const selected = chosenAttributes.includes(attribute);

          return (
            <button
              key={attribute}
              type="button"
              id={takeAwaySpaces(attribute)}
              aria-pressed={selected}
              className={[
                "glass-soft focus-ring interactive-lift relative overflow-hidden rounded-3xl border px-5 py-5 text-left hover:border-[#ff7a59]/40 hover:bg-white/10",
                selected
                  ? "border-[#ff7a59]/85 bg-[linear-gradient(135deg,rgba(255,122,89,0.26),rgba(255,255,255,0.12))] shadow-[0_0_0_2px_rgba(255,122,89,0.24),0_18px_36px_rgba(255,122,89,0.18)]"
                  : "border-white/10",
              ].join(" ")}
              onClick={() => toggleAttribute(attribute)}
            >
              <span
                className={[
                  "pointer-events-none absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-[#ff7a59] via-[#ffb49c] to-[#ff7a59] transition-opacity duration-200",
                  selected ? "opacity-100" : "opacity-0",
                ].join(" ")}
              />
              <span className="flex items-start justify-between gap-4">
                <span className="block">
                  <span className="block text-xs font-semibold uppercase tracking-[0.24em] text-cool">
                    Attribute
                  </span>
                  <span
                    className={[
                      "mt-3 block text-base font-semibold leading-7 text-white transition-colors duration-200 sm:text-lg",
                      selected ? "text-[#fff0eb]" : "",
                    ].join(" ")}
                  >
                    {attribute}
                  </span>
                </span>
                <span
                  className={[
                    "icon-pill h-10 w-10 shrink-0 transition-all duration-200",
                    selected
                      ? "border-[#ff7a59]/80 bg-[#ff7a59] text-slate-950 shadow-[0_10px_18px_rgba(255,122,89,0.24)]"
                      : "text-[#ff9a7c]",
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
                    ? "bg-[#ff7a59] text-slate-950"
                    : "bg-white/8 text-[#ff9a7c]",
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
