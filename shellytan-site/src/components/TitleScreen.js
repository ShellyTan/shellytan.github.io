import name from '../img/name-2.png';

function TitleScreen() {
  return (
    <>
        <p className="intro top">Hi, my name is</p>
        <h1>Shelly</h1>
        <div className="name-wrapper">
          <img src={name} alt="" aria-hidden="true" />
        </div>

        <p className="intro bottom">Journalist, designer, developer</p>

        <nav aria-label="Homepage button navigation">
          <ul class="nav">
            <li><a href="/about" className="btn-green">About</a></li>
            <li><a href="/portfolio" className="btn-green">Portfolio</a></li>
            <li><a href="/contact" className="btn-green">Contact</a></li>
          </ul>
        </nav>
    </>
  );
}

export default TitleScreen;
