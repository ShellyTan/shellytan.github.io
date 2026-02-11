// import logo from '../logo.svg';
import '../styles/TitleScreen.scss';
import name from '../name.png';

function TitleScreen() {
  return (
    <div id="title-screen">
      <div className="text">
        <h2 className="top">Hi, my name is</h2>
        {/* <h1>Shelly</h1> */}
        <div className="name-wrapper">
          <img src={name} alt="Pixel art version of the name Shelly" />
        </div>

        <h2 className="bottom">Journalist, designer, developer</h2>

        <span className="nav about">About<span className="nav__gloss" aria-hidden="true">About</span></span>
        <span className="nav portfolio">Portfolio<span className="nav__gloss" aria-hidden="true">Portfolio</span></span>
        <span className="nav contact">Contact<span className="nav__gloss" aria-hidden="true">Contact</span></span>
      </div>
      <div id="starry-sky">
        <span className="star-layer--large" aria-hidden="true"></span>
      </div>
    </div>
  );
}

export default TitleScreen;
