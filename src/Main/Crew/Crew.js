import "./Crew.css";
import ContentBlock from "../components/ContentBlock";
import Flinta from "../../assets/img/orange.png";

function Crew() {
  return (
    <div className="Crew">
      <div className="Positioner">
        <div className="CoverChecker" id="crew" data-scrollspy />
      </div>
      <ContentBlock title="Crew" subtitle="Good times" image={Flinta}>
        <div className="CrewWrap">
          <h3>Hederstärna</h3>
          <ul>
            <li>
              Jennifer Holst
            </li>
          </ul>
          <h4>Tärnor</h4>
          <ul>
            <li>
              Lisa Jakobsson
            </li>
            <li>
              Sanna Holmgren
            </li>
          </ul>
          <h3>Best Man</h3>
          <ul>
            <li>
              Ulrik Sjölin
            </li>
          </ul>
          <h4>Marskalker</h4>
          <ul>
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
              Felix Rosenlund
            </li>
            <li>
              Elin Hanstorp
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
