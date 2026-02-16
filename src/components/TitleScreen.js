import { NavLink } from "react-router-dom";
import name from '../img/name-2.png';

function TitleScreen() {
  return (
    <div className="wrapper title-screen">
        <p className="intro top">Hi, my name is</p>
        <h1>Shelly</h1>
        <div className="name-wrapper">
          <img src={name} alt="" aria-hidden="true" />
        </div>

        <p className="intro bottom">Journalist, designer, developer</p>

        <nav aria-label="Homepage button navigation">
          <ul className="nav">
            <li><NavLink to="/about" className="btn-green">About</NavLink></li>
            <li><NavLink to="/portfolio" className="btn-green">Portfolio</NavLink></li>
            <li><NavLink to="/contact" className="btn-green">Contact</NavLink></li>
          </ul>
        </nav>
    </div>
  );
}

export default TitleScreen;
