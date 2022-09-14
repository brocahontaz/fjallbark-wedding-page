import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import RingsWhite from '../assets/img/ringar-vit-square.png';

function Footer() {
  return (
    <div className="Footer">
      <img src={RingsWhite} alt="Rings" className="WhiteRings" />
      <div className="FooterWrap">
        <div className="FooterLeft">
          <ul>
            <li>
              <a href="mailto:wedding@fjällbark.se">
                <FontAwesomeIcon icon={faEnvelope} size="1x" />
                <span>wedding@fjällbark.se</span>
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
                  View
                  {' '}
                  <b>source code</b>
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="Copyright">
        <span>Copyright © 2022-2023 Fjällbark.se</span>
        <span className="HideSmall">&nbsp;|&nbsp;</span>
        <span>All rights reserved</span>
        <span className="HideSmall">&nbsp;|&nbsp;</span>
        <span>Website developed by Johan Andersson & Catarina Sörensen</span>
      </div>
    </div>
  );
}

export default Footer;
