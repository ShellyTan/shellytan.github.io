import { NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/contact", label: "Contact" },
];
const linksOriginal = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/contact", label: "Contact" },
];

function isActivePath(pathname, to) {
  if (to === "/") return pathname === "/";
  return pathname.startsWith(to);
}

export default function GlobalNav() {
  const { pathname } = useLocation();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 481);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 481);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const activeLink = links.find((l) => isActivePath(pathname, l.to));
  const inactiveLinks = links.filter((l) => !isActivePath(pathname, l.to));

  return (
    <nav className="global-nav" aria-label="Global navigation">
      <ul className="global-nav__list">
        {isMobile ? (
          <>
          {linksOriginal.map((l) => (
            <li key={l.to} className="global-nav__item">
              <NavLink to={l.to} className="global-nav__link">
                {l.label}
              </NavLink>
            </li>
          ))}
          </>
        ) : (
          <>
            {inactiveLinks.map((l) => (
              <li key={l.to} className="global-nav__item">
                <NavLink to={l.to} className="global-nav__link">
                  {l.label}
                </NavLink>
              </li>
            ))}

            {activeLink && (
              <li key={activeLink.to} className="global-nav__item is-active">
                <NavLink to={activeLink.to} className="global-nav__link">
                  {activeLink.label}
                </NavLink>
              </li>
            )}
          </>
        )}
      </ul>
    </nav>
  );
}
