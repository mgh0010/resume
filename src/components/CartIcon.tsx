import { NavLink } from "react-router-dom";
import { useCart } from "../context/CartContext";

const quickLinks = [
  { to: "/shop", label: "Shop", icon: "shopping_basket" },
  { to: "/cart", label: "Cart", icon: "shopping_cart" },
  { to: "/work-history", label: "Work History", icon: "folder_shared" },
  { to: "/projects", label: "Side Projects", icon: "work" },
];

export function CartIcon() {
  const { numItemsInCart } = useCart();

  return (
    <div className="mx-auto w-full max-w-7xl px-4 pt-4 sm:px-6 md:hidden lg:px-10">
      <div className="glass-soft rounded-3xl px-3 py-3 md:px-4">
        <div className="grid grid-cols-4 gap-2 md:gap-3">
          {quickLinks.map((item) => {
            const isCart = item.to === "/cart";
            return (
              <NavLink
                key={item.to}
                to={item.to}
                title={item.label}
                aria-label={item.label}
                className={({ isActive }) =>
                  [
                    "focus-ring interactive-lift relative flex flex-col items-center justify-center gap-2 rounded-3xl px-2 py-3 text-center",
                    isActive
                      ? "bg-white text-slate-950 shadow-[0_14px_28px_rgba(255,255,255,0.14)]"
                      : "bg-white/6 text-slate-100 hover:bg-white/10",
                  ].join(" ")
                }
              >
                <span className="material-icons text-[1.55rem]">
                  {item.icon}
                </span>
                <span className="text-[0.65rem] font-semibold uppercase tracking-[0.24em] md:text-[0.72rem]">
                  {item.label}
                </span>
                {isCart ? (
                  <span className="absolute right-3 top-3 inline-flex min-h-6 min-w-6 items-center justify-center rounded-full bg-[#ff7a59] px-1.5 text-[0.7rem] font-bold text-slate-950">
                    {numItemsInCart}
                  </span>
                ) : null}
              </NavLink>
            );
          })}
        </div>
      </div>
    </div>
  );
}
