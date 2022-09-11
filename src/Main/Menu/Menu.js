/* eslint-disable max-len */
import ContentBlock from '../components/ContentBlock';
import './Menu.css';
import Occo from '../../assets/img/occo.png';

function Menu() {
  return (
    <div className="Menu">
      <div className="Positioner">
        <div className="CoverChecker" id="mat" data-scrollspy />
      </div>
      <ContentBlock title="Mat" subtitle="Segers Mat" image={Occo}>
        <h3>Preliminär meny</h3>
        <h4>
          Förrätt
        </h4>
        <ul>
          <li>
            <b>Confiterad torsk</b>
            {' '}
            med tillbehör;
          </li>
          <li>
            havskräftsbisque,
          </li>
          <li>
            rostad butternutpumpa,
          </li>
          <li>
            citronemulsion,
          </li>
          <li>
            rökt sidfläsk,
          </li>
          <li>
            och blommor
          </li>
        </ul>

        <h4>
          Huvudrätt
        </h4>
        <ul>
          <li>
            <b>Bräserad oxkind</b>
            {' '}
            med tillbehör;
          </li>
          <li>
            sotad silverlök,
          </li>
          <li>
            bakad palsternacka,
          </li>
          <li>
            syltad pumpa,
          </li>
          <li>
            och gremolata-smaksatt potatispuré
          </li>
        </ul>

        <h4>
          Efterrätt
        </h4>

        <ul>
          <li>
            <b>Bröllopstårta</b>
            ;
          </li>
          <li>
            Glenns Schwarzwaldtårta och Glenns Prinsesstårta
          </li>
        </ul>

        <h3>
          Info
        </h3>

        <p>
          Maten kommer lagas och serveras av Segers Mat, givetvis tillgodoser de anmälda matpreferenser!
        </p>
        <p>
          Bröllopstårtorna skapas av fantastiska Glenn hos Segers Söta, givetvis kommer det finnas alternativ till de med anmälda matpreferenser!
        </p>
      </ContentBlock>
    </div>

  );
}

export default Menu;
