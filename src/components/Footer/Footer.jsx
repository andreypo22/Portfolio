import "./Footer.css";

import vk from "./../../img/icons/vk.svg";
import gitHub from "./../../img/icons/gitHub.svg";
import whatsapp from "./../../img/icons/whatsapp.svg";
import telegram from "./../../img/icons/telegram.svg";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <ul className="social">
            <li className="social__item">
              <a href="https://vk.com/id33673699" target="_blanc">
                <img src={vk} alt="Link" />
              </a>
            </li>
            <li className="social__item">
              <a
                href="https://github.com/andreypo22?tab=repositories"
                target="_blanc"
              >
                <img src={gitHub} alt="Link" />
              </a>
            </li>
            <li className="social__item">
              <a href="https://wa.me/79663262747" target="_blanc">
                <img src={whatsapp} alt="Link" />
              </a>
            </li>
            <li className="social__item">
              <a href="https://t.me/andreypo22" target="_blanc">
                <img src={telegram} alt="Link" />
              </a>
            </li>
          </ul>
          <div className="copyright">
            <p>© 2025 Potapov Andrey</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
