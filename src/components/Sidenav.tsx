import { Link, NavLink } from "react-router-dom";
import { useCart } from "../context/CartContext";

const navItems = [
  { to: "/shop", label: "Shop", icon: "shopping_basket" },
  { to: "/cart", label: "Cart", icon: "shopping_cart" },
  { to: "/work-history", label: "Work History", icon: "folder_shared" },
  { to: "/projects", label: "Side Projects", icon: "work" },
];

export function Sidenav() {
  const { numItemsInCart } = useCart();

  return (
    <aside className="fixed inset-y-0 left-0 hidden h-screen w-80 overflow-hidden border-r border-white/10 bg-[linear-gradient(180deg,rgba(10,16,30,0.96),rgba(24,31,55,0.96))] px-5 py-6 shadow-[0_24px_60px_rgba(0,0,0,0.32)] backdrop-blur md:flex md:flex-col">
      <Link
        id="side-nav-header"
        to="/checkout"
        className="glass-panel focus-ring interactive-lift rounded-4xl px-5 py-5"
      >
        <p className="font-display text-sm uppercase tracking-[0.35em] text-cool">
          Michael Harrison
        </p>
        <h1 className="mt-2 font-display text-[2.7rem] leading-none text-white">
          Software Engineer
        </h1>
        <p className="mt-3 text-sm leading-6 text-muted">
          Christian | Servant Leader
        </p>
      </Link>

      <nav className="mt-6 flex flex-1 flex-col gap-2.5">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              [
                "group nav-pill focus-ring interactive-lift relative flex items-center gap-3 px-4 py-3.5 pl-7 text-sm font-semibold uppercase tracking-[0.22em] text-slate-200 before:absolute before:left-2 before:top-1/2 before:h-7 before:w-1 before:-translate-y-1/2 before:rounded-full hover:border-white/30 hover:bg-white/10",
                isActive
                  ? "border-2 border-[#ffb26b] bg-[linear-gradient(135deg,rgba(255,122,89,0.25),rgba(255,178,107,0.14))] text-white shadow-[0_0_0_2px_rgba(255,178,107,0.18),0_16px_32px_rgba(255,122,89,0.22)] before:bg-[#ffb26b]"
                  : "before:bg-transparent",
              ].join(" ")
            }
          >
            <span className="icon-pill h-11 w-11 text-[#ffd166] transition duration-200 group-hover:scale-105 group-hover:border-white/30 group-hover:bg-white/10">
              <span className="material-icons text-[1.4rem]">{item.icon}</span>
            </span>
            <span className="flex min-w-0 items-center gap-3 transition-colors duration-200">
              <span className="truncate">{item.label}</span>
              {item.to === "/cart" ? (
                <span className="inline-flex min-h-7 min-w-7 items-center justify-center rounded-full bg-[#ff7a59] px-2 text-[0.72rem] font-bold text-slate-950 shadow-[0_10px_18px_rgba(255,122,89,0.2)]">
                  {numItemsInCart}
                </span>
              ) : null}
            </span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
