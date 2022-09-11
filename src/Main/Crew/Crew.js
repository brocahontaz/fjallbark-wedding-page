import './Crew.css';
import ContentBlock from '../components/ContentBlock';

function Crew() {
  return (
    <div id="crew" className="Crew" data-scrollspy>
      <ContentBlock title="Crew">
        <div className="CrewWrap">
          <h3>Tärnor</h3>
          <span>Jennifer Holst</span>
          <span>Lisa Jakobsson</span>
          <span>Sanna Holmgren</span>
          <h3>Marshalker</h3>
          <span>Ulrik Sjölin</span>
          <span>Daniel Ohlsson</span>
          <span>Markus Maga</span>
          <h3>Toastmaster och Toastmadame</h3>
          <span>Elin Hanstorp</span>
          <span>Felix Rosenlund</span>
          <h3>Värdpar</h3>
          <span>Kristoffer Linderman</span>
          <span>Linnea</span>
          <h3>DJ</h3>
          <span>Nicholas Salas</span>
        </div>
      </ContentBlock>
    </div>
  );
}

export default Crew;
