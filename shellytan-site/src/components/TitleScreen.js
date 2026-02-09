// import logo from '../logo.svg';
import '../styles/TitleScreen.scss';

function TitleScreen() {
  return (
    <div className="title-screen">
      <div className="text">
        <h3 className="top">Hi, my name is</h3>
        <h1 className="block3d">Shelly</h1>
        <h3>Designer, developer, illustrator and reporter</h3>

        <span className="nav about">About<span className="nav__gloss" aria-hidden="true">About</span></span>
        <span className="nav portfolio">Portfolio<span className="nav__gloss" aria-hidden="true">Portfolio</span></span>
        <span className="nav contact">Contact<span className="nav__gloss" aria-hidden="true">Contact</span></span>

      </div>
      <div className="starry-sky">
        <span className="star-layer--large" aria-hidden="true"></span>
      </div>
    </div>
  );
}

export default TitleScreen;
