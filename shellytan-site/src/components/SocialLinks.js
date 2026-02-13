import LinkedIn from '../img/linkedin.png';
import Twitter from '../img/x.png';

export default function SocialLinks() {
  return (
    <nav className="social-nav" aria-label="Social media">
      <ul className="social-nav__list">
        <li>
          <a
            href="https://x.com/Tan_Shelly"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter/X"
          >
            <img
              src={Twitter}
              alt="Twitter/X icon"
              className="social-nav__icon"
            />
          </a>
        </li>

        <li>
          <a
            href="https://www.linkedin.com/in/shelly-tan-842a1b2b/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <img
              src={LinkedIn}
              alt="LinkedIn icon"
              className="social-nav__icon"
            />
          </a>
        </li>
      </ul>
    </nav>
  );
}

