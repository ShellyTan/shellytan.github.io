import { NavLink, useLocation } from "react-router-dom";

const links = [
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

  const activeLink = links.find((l) => isActivePath(pathname, l.to));
  const inactiveLinks = links.filter((l) => !isActivePath(pathname, l.to));

  return (
    <nav className="global-nav" aria-label="Global navigation">
      <ul className="global-nav__list">
        {/* Render inactive first */}
        {inactiveLinks.map((l) => (
          <li key={l.to} className="global-nav__item">
            <NavLink to={l.to} className="global-nav__link">
              {l.label}
            </NavLink>
          </li>
        ))}

        {/* Render active last so it sits on right */}
        {activeLink && (
          <li key={activeLink.to} className="global-nav__item is-active">
            <NavLink to={activeLink.to} className="global-nav__link">
              {activeLink.label}
            </NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
}
