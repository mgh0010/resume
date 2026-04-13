import { NavLink } from "react-router-dom";

const mobileNavItems = [
  { to: "/landing-page", label: "Home" },
  { to: "/shop", label: "Shop" },
  { to: "/cart", label: "Cart" },
  { to: "/projects", label: "Side Projects" },
  { to: "/work-history", label: "Work History" },
];

export function Topnav() {
  return (
    <div className="px-4 pt-4 sm:px-6 md:hidden">
      <div className="glass-panel rounded-3xl px-4 py-4">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="font-display text-xs uppercase tracking-[0.35em] text-cool">
              Michael Harrison
            </p>
            <h2 className="font-display text-3xl leading-none text-white">
              MGH
            </h2>
          </div>
          <p className="max-w-[11rem] text-right text-xs leading-5 text-muted">
            Christian | Servant Leader
          </p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {mobileNavItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                [
                  "focus-ring interactive-lift rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em]",
                  isActive
                    ? "bg-white text-slate-950"
                    : "bg-white/8 text-slate-200 hover:bg-white/14",
                ].join(" ")
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
}
