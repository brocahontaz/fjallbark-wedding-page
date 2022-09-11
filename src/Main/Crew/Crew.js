import './Crew.css';
import ContentBlock from '../components/ContentBlock';

function Crew() {
  return (
    <div id="crew" className="Crew" data-scrollspy>
      <ContentBlock title="Crew" subtitle="Good times">
        <div className="CrewWrap">
          <h3>Tärnor</h3>
          <ul>
            <li>
              Jennifer Holst
            </li>
            <li>
              Lisa Jakobsson
            </li>
            <li>
              Sanna Holmgren
            </li>
          </ul>
          <h3>Marskalker</h3>
          <ul>
            <li>
              Ulrik Sjölin
            </li>
            <li>
              Daniel Ohlsson
            </li>
            <li>
              Markus Maga
            </li>
          </ul>

          <h3>Toastmaster och Toastmadame</h3>
          <ul>
            <li>
              Elin Hanstorp
            </li>
            <li>
              Felix Rosenlund
            </li>
          </ul>

          <h3>Värdpar</h3>
          <ul>
            <li>
              Kristoffer Linderman
            </li>
            <li>
              Linnea Åsberg
            </li>
          </ul>
        </div>
      </ContentBlock>
    </div>
  );
}

export default Crew;
