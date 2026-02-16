import { Routes, Route, Outlet, useLocation } from "react-router-dom";
import { useEffect, useRef } from "react";

import TitleScreen from './components/TitleScreen';
import About from './components/About';
import Portfolio from './components/TitleScreen';
import Contact from './components/Contact';
import GlobalNav from "./components/GlobalNav";
import SocialLinks from "./components/SocialLinks";

import { startShootingStars } from "./components/shootingStars";

function Layout() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  const stopRef = useRef(null);

  useEffect(() => {
    if (stopRef.current) {
      stopRef.current();
      stopRef.current = null;
      // immediately clear any moving stars
      document
        .querySelectorAll("#starry-sky .shooting-star.is-active")
        .forEach(el => el.classList.remove("is-active"));
    }

    // only run stars on home
    if (isHome) {
      stopRef.current = startShootingStars(document);
    }
    // cleanup on unmount
    return () => {
      if (stopRef.current) {
        stopRef.current();
        stopRef.current = null;
      }
    };
  }, [isHome]);

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
        <span className="star-layer--large" aria-hidden="true"></span>

        <span className="shooting-star" aria-hidden="true"></span>
        <span className="shooting-star" aria-hidden="true"></span>
        <span className="shooting-star" aria-hidden="true"></span>
        <span className="shooting-star" aria-hidden="true"></span>
        <span className="shooting-star" aria-hidden="true"></span>

        <span className="shooting-star shooting-star--big" aria-hidden="true"></span>
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
