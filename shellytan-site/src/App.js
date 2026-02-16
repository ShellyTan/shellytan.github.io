import { Routes, Route, Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";

import TitleScreen from './components/TitleScreen';
import About from './components/About';
import Portfolio from './components/TitleScreen';
import Contact from './components/Contact';
import GlobalNav from "./components/GlobalNav";
import SocialLinks from "./components/SocialLinks";

import { startShootingStars } from "./components/shootingStars";

function Layout() {
  useEffect(() => {
    const stop = startShootingStars(document);
    return stop;
  }, []);

  const location = useLocation();
  const isHome = location.pathname === "/";
  return (
    <div className="container">
      <header>
        <div className="header-right">
          <GlobalNav />
          <SocialLinks />
        </div>
      </header>

      <main>
        <Outlet />
      </main>

      <div id="starry-sky" aria-hidden="true" className={isHome ? "" : "dim"}>
        <span class="star-layer--large" aria-hidden="true"></span>
        <span class="shooting-star" aria-hidden="true"></span>
        <span class="shooting-star" aria-hidden="true"></span>
        <span class="shooting-star" aria-hidden="true"></span>
        <span class="shooting-star" aria-hidden="true"></span>
        <span class="shooting-star" aria-hidden="true"></span>

        <span class="shooting-star shooting-star--big" aria-hidden="true"></span>
      </div>
  
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<TitleScreen />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}
