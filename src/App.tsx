import { Suspense, lazy, useEffect } from "react";
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { Sidenav } from "./components/Sidenav";
import { Topnav } from "./components/Topnav";
import { CartProvider } from "./context/CartContext";

const CartPage = lazy(() =>
  import("./pages/CartPage").then((module) => ({ default: module.CartPage })),
);
const CheckoutPage = lazy(() =>
  import("./pages/CheckoutPage").then((module) => ({
    default: module.CheckoutPage,
  })),
);
const LandingPage = lazy(() =>
  import("./pages/LandingPage").then((module) => ({
    default: module.LandingPage,
  })),
);
const ProjectsPage = lazy(() =>
  import("./pages/ProjectsPage").then((module) => ({
    default: module.ProjectsPage,
  })),
);
const ShopPage = lazy(() =>
  import("./pages/ShopPage").then((module) => ({ default: module.ShopPage })),
);
const WorkHistoryPage = lazy(() =>
  import("./pages/WorkHistoryPage").then((module) => ({
    default: module.WorkHistoryPage,
  })),
);

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <CartProvider>
        <div className="min-h-screen md:pl-80">
          <Sidenav />
          <main className="relative min-h-screen pb-10">
            <div className="absolute inset-x-0 top-0 -z-10 h-[28rem] bg-[radial-gradient(circle_at_top,rgba(255,122,89,0.18),transparent_45%),radial-gradient(circle_at_80%_0%,rgba(77,208,225,0.14),transparent_35%)]" />
            <Topnav />
            <div className="mx-auto w-full max-w-7xl px-4 pb-14 pt-4 sm:px-6 lg:px-10 lg:pb-18 lg:pt-6">
              <Suspense fallback={null}>
                <Routes>
                  <Route
                    path="/"
                    element={<Navigate replace to="/landing-page" />}
                  />
                  <Route path="/landing-page" element={<LandingPage />} />
                  <Route path="/shop" element={<ShopPage />} />
                  <Route path="/cart" element={<CartPage />} />
                  <Route path="/projects" element={<ProjectsPage />} />
                  <Route path="/work-history" element={<WorkHistoryPage />} />
                  <Route path="/checkout" element={<CheckoutPage />} />
                  <Route
                    path="*"
                    element={<Navigate replace to="/landing-page" />}
                  />
                </Routes>
              </Suspense>
            </div>
          </main>
        </div>
      </CartProvider>
    </BrowserRouter>
  );
}
