import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import RingsWhite from "../assets/img/ringar-vit-square.png";

function Footer() {
  return (
    <div className="Footer">
      <img src={RingsWhite} alt="Rings" className="WhiteRings" />
      <div className="FooterWrap">
        <div className="FooterLeft">
          <ul>
            <li>
              <a href="mailto:weddinguntz@gmail.com">
                <FontAwesomeIcon icon={faEnvelope} size="1x" />
                <span>weddinguntz@gmail.com</span>
              </a>
            </li>
          </ul>
        </div>
        <div />
        <div className="FooterRight">
          <ul>
            <li>
              <a href="https://www.github.com/brocahontaz/fjallbark">
                <FontAwesomeIcon icon={faGithub} size="1x" />
                <span>
                  View <b>source code</b>
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="Copyright">
        <span>Copyright © 2022-2024 Fjällbark.se</span>
        <span className="HideSmall">&nbsp;|&nbsp;</span>
        <span>All rights reserved</span>
        <span className="HideSmall">&nbsp;|&nbsp;</span>
        <span>Website developed by Catarina Fjällbark & Johan Fjällbark</span>
      </div>
    </div>
  );
}

export default Footer;
