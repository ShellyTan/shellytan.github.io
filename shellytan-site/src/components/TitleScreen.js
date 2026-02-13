// import logo from '../logo.svg';
import '../styles/TitleScreen.scss';
import name from '../img/name-2.png';

function TitleScreen() {
  return (
    <div className="container">
      <div id="title-screen">
        <h2 className="top">Hi, my name is</h2>
        <h1>Shelly</h1>
        <div className="name-wrapper">
          <img src={name} alt="" />
        </div>
        <h2 className="bottom">Journalist, designer, developer</h2>
      </div>
      <nav aria-label="Homepage navigation">
        <ul class="nav">
          <li><a href="/about">About</a></li>
          <li><a href="/portfolio">Portfolio</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
      <div id="starry-sky" aria-hidden="true">
        <span className="star-layer--large" aria-hidden="true"></span>
      </div>
    </div>
  );
}

export default TitleScreen;
