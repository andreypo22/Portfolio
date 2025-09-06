import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header__wrapper">
        <h1 className="header__title">
          <strong>
            Hi, my name is <em>Andrey</em>
          </strong>
          <br />a frontend developer
        </h1>
        <div className="header__text">
          <p>"Ctrl + Code + Create"</p>
        </div>
        <a download="resume.pdf" href="./resume.pdf" className="btn">
          Download CV
        </a>
      </div>
    </header>
  );
}

export default Header;
