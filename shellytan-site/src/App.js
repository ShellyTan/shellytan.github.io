import { Routes, Route, Outlet } from "react-router-dom";
import TitleScreen from './components/TitleScreen';
import About from './components/TitleScreen';
import Portfolio from './components/TitleScreen';
import Contact from './components/TitleScreen';
import GlobalNav from "./components/GlobalNav";
import SocialLinks from "./components/SocialLinks";

function Layout() {
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

      <div id="starry-sky" aria-hidden="true">
        <span className="star-layer--large"></span>
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
