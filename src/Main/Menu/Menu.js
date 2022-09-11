/* eslint-disable max-len */
import ContentBlock from '../components/ContentBlock';
import './Menu.css';

function Menu() {
  return (

    <div className="Menu" id="mat" data-scrollspy>
      <ContentBlock title="Mat">
        <h3>Preliminär meny</h3>
        <br />

        <span>
          <b>Förätt</b>
          {' '}
          Confiterad torsk - havskräftsbisque - rostad butternutpumpa - citronemulsion - rökt sidfläsk - blommor
        </span>
        <br />
        <br />

        <span>
          <b>Huvudrätt</b>
          {' '}
          Bräserad oxkind - sotad silverlök - bakad palsternacka - syltad pumpa - gremolata smaksatt potatispuré
        </span>
        <br />
        <br />

        <span>
          <b>Efterätt</b>
          {' '}
          Glenns Schwarzwaldtårta samt prinsesstårta!
        </span>

        <br />
        <br />
        <br />

        Maten kommer lagas och serveras av Segers Mat, givetvis tillgodoser de anmälda matpreferenser!
      </ContentBlock>
    </div>

  );
}

export default Menu;
