import './Crew.css';
import ContentBlock from '../components/ContentBlock';

function Crew() {
  return (
    <div id="crew" className="Crew" data-scrollspy>
      <ContentBlock title="Crew">
        <div className="CrewWrap">
          <h2>Tärnor</h2>
          <span>Jennifer Holst</span>
          <span>Lisa Jakobsson</span>
          <span>Sanna Holmgren</span>
          <h2>Marshalker</h2>
          <span>Ulrik Sjölin</span>
          <span>Daniel Ohlsson</span>
          <span>Markus Maga</span>
          <h2>Toastmaster och Toastmadame</h2>
          <span>Elin Hanstorp</span>
          <span>Felix Rosenlund</span>
          <h2>Värdpar</h2>
          <span>Kristoffer Linderman</span>
          <span>Linnea</span>
          <h2>DJ</h2>
          <span>Nicholas Salas</span>
        </div>
      </ContentBlock>
    </div>
  );
}

export default Crew;
