/* eslint-disable max-len */
import ContentBlock from "../components/ContentBlock";
import "./Menu.css";
import Occo from "../../assets/img/occo.png";

function Menu() {
  return (
    <div className="Menu">
      <div className="Positioner">
        <div className="CoverChecker" id="mat" data-scrollspy />
      </div>
      <ContentBlock title="Mat" subtitle="Segers Mat" image={Occo}>
        <h3>Meny</h3>
        <h4>Förrätt</h4>
        <ul>
          <li>
            <b>Confiterad torsk</b> med tillbehör;
          </li>
          <li>havskräftsbisque,</li>
          <li>rostad butternutpumpa,</li>
          <li>citronemulsion,</li>
          <li>rökt sidfläsk,</li>
          <li>och blommor</li>
        </ul>

        <h4>Huvudrätt</h4>
        <ul>
          <li>
            <b>Bräserad oxkind</b> med tillbehör;
          </li>
          <li>sotad silverlök,</li>
          <li>bakad palsternacka,</li>
          <li>syltad pumpa,</li>
          <li>och gremolata-smaksatt potatispuré</li>
        </ul>

        <h4>Efterrätt</h4>

        <ul>
          <li>
            <b>Bröllopstårta</b>;
          </li>
          <li>Glenns Schwarzwaldtårta och Glenns Prinsesstårta</li>
        </ul>

        <h3>Info</h3>
        <h2>Dryck</h2>
        <h4>Mingel</h4>
        <ul className="Drinks">
          <li className="head">Alkoholhaltigt</li>
          <li>
            <span>Millesimato Rosé</span>
            <span>-</span>
            <span>Prosecco</span>
          </li>
          <li>
            <span>Sol</span>
            <span>-</span>
            <span>Öl</span>
          </li>
          <li>
            <span>Staropramen</span>
            <span>-</span>
            <span>Öl</span>
          </li>
          <li>
            <span>Mokai Blueberry</span>
            <span>-</span>
            <span>Cider</span>
          </li>
          <li className="head">Alkoholfritt</li>
          <li>
            <span>Kiviks Herrgårdscider</span>
            <span>-</span>
            <span>Rosécider</span>
          </li>
          <li>
            <span>Briska</span>
            <span>-</span>
            <span>Cider</span>
          </li>
          <li>
            <span>Festis Blueberry/Pear</span>
            <span>-</span>
            <span>Saft</span>
          </li>
        </ul>
        <h4>Förrätt</h4>
        <ul className="Drinks">
          <li className="head">Alkoholhaltigt</li>
          <li>
            <span>El Coto RIOJA</span>
            <span>-</span>
            <span>Vitt vin</span>
          </li>
          <li>
            <span>Staropramen</span>
            <span>-</span>
            <span>Öl</span>
          </li>
          <li>
            <span>Melleruds Pilsner</span>
            <span>-</span>
            <span>Öl</span>
          </li>
          <li>
            <span>Mokai Blueberry</span>
            <span>-</span>
            <span>Cider</span>
          </li>
          <li className="head">Alkhoholfritt</li>
          <li>
            <span>Freixenet</span>
            <span>-</span>
            <span>Alkoholfritt bubbel</span>
          </li>
          <li>
            <span>Kiviks Herrgårdscider</span>
            <span>-</span>
            <span>Rosécider</span>
          </li>
          <li>
            <span>Coca Cola Zero</span>
            <span>-</span>
            <span>Läsk</span>
          </li>
          <li>
            <span>Norrlands Guld </span>
            <span>-</span>
            <span>Alkoholfri öl</span>
          </li>
          <li>
            <span>Mariestads</span>
            <span>-</span>
            <span>Alkoholfri öl</span>
          </li>
          <li>
            <span>Heineken</span>
            <span>-</span>
            <span>Alkoholfri öl</span>
          </li>
          <li>
            <span>Juice</span>
            <span />
            <span />
          </li>
        </ul>
        <h4>Huvudrätt</h4>
        <ul className="Drinks">
          <li className="head">Alkoholhaltigt</li>
          <li>
            <span>Baron de ley RIOJA</span>
            <span>-</span>
            <span>Rött vin</span>
          </li>
          <li>
            <span>Staropramen</span>
            <span>-</span>
            <span>Öl</span>
          </li>
          <li>
            <span>Melleruds Pilsner</span>
            <span>-</span>
            <span>Öl</span>
          </li>
          <li>
            <span>Mokai Blueberry</span>
            <span>-</span>
            <span>Cider</span>
          </li>
          <li className="head">Alkoholfritt</li>
          <li>
            <span>Brämhults</span>
            <span>-</span>
            <span>Blåbärsjuice</span>
          </li>
          <li>
            <span>Coca Cola Zero</span>
            <span>-</span>
            <span>Läsk</span>
          </li>
          <li>
            <span>Norrlands Guld </span>
            <span>-</span>
            <span>Alkoholfri öl</span>
          </li>
          <li>
            <span>Mariestads</span>
            <span>-</span>
            <span>Alkoholfri öl</span>
          </li>
          <li>
            <span>Heineken</span>
            <span>-</span>
            <span>Alkoholfri öl</span>
          </li>
          <li>
            <span>Juice</span>
            <span />
            <span />
          </li>
        </ul>
        <h4>Tårta</h4>
        <ul className="Drinks">
          <li className="head">Alkoholhaltigt</li>
          <li>
            <span>Amarula cream</span>
            <span>-</span>
            <span>Avec</span>
          </li>
          <li>
            <span>Punsch</span>
            <span>-</span>
            <span>Avec</span>
          </li>
          <li>
            <span>Whiskey</span>
            <span>-</span>
            <span>Avec</span>
          </li>
          <li>
            <span>Mörk rom</span>
            <span>-</span>
            <span>Avec</span>
          </li>
          <li>
            <span>Cointreau</span>
            <span>-</span>
            <span>Avec</span>
          </li>
          <li>
            <span>Staropramen</span>
            <span>-</span>
            <span>Öl</span>
          </li>
          <li>
            <span>Melleruds Pilsner</span>
            <span>-</span>
            <span>Öl</span>
          </li>
          <li className="head">Alkoholfritt</li>
          <li>
            <span>Ingefärashot</span>
            <span />
            <span />
          </li>
          <li>
            <span>Coca Cola Zero</span>
            <span>-</span>
            <span>Läsk</span>
          </li>
          <li>
            <span>Norrlands Guld </span>
            <span>-</span>
            <span>Alkoholfri öl</span>
          </li>
          <li>
            <span>Mariestads</span>
            <span>-</span>
            <span>Alkoholfri öl</span>
          </li>
          <li>
            <span>Heineken</span>
            <span>-</span>
            <span>Alkoholfri öl</span>
          </li>
          <li>
            <span>Juice</span>
            <span />
            <span />
          </li>
        </ul>
        <h4>Dansgolv</h4>
        <p>Allt som finns kvar av ovan nämnda dryck!</p>
        <p>
          Det kommer även finnas en självbetjäningsbar med möjlighet till bland
          annat Gin & Tonic, m.m.
        </p>
      </ContentBlock>
    </div>
  );
}

export default Menu;
