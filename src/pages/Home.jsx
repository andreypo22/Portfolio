import Header from "../components/Header/Header";

function Home() {
  return (
    <>
      <Header />

      <main className="section">
        <div className="container">
          <ul className="content-list">
            <li className="content-list__item">
              <h2 className="title-2">Frontend</h2>
              <p>
                HTML, CSS, JavaScript, ReactJS, BootStrap, Saas, Git, Webpack,
                Vite, Gulp, npm, REST API
              </p>
            </li>
            <li className="content-list__item">
              <h2 className="title-2">Tools</h2>
              <p>Accessibility, Figma, Responsive web, PerfectPixel, BEM</p>
            </li>
          </ul>
        </div>
      </main>
    </>
  );
}

export default Home;
