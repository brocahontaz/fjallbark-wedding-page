/* eslint-disable max-len */
import './Info.css';
import Collapsible from '../components/Collapsible';
import Event from '../components/Event';
import ContentBlock from '../components/ContentBlock';
import Ringbubbel from '../../assets/img/ringbubbel.png';
import Ocean from '../../assets/img/ocean.jpeg';

function Info() {
  return (
    <div className="Info">
      <div className="Positioner">
        <div className="CoverChecker" id="info" data-scrollspy />
      </div>
      <ContentBlock title="Information" subtitle="The difference that makes a difference" image={Ringbubbel}>
        <div className="InfoWrap">
          <h3>TACK!</h3>
          <div>Stort tack för för att du vill vara med på vårt bröllop 19/11-2022, nu visar vi även bilder från bröllopet!</div>
          <h3>Klädkod</h3>
          <h4 className="center-text">
            Högtidsdräkt eller Mörk kostym
          </h4>
          <p className="center-text">
            Så, vad innebär detta, egentligen?
          </p>
          <Collapsible>
            <p>
              Jo! Följande alternativ är okej:
            </p>
            <h5>
              Herrar
            </h5>
            <p>
              Brudgum och marskalker kommer vara klädda i
              {' '}
              <b>Frack</b>
              .
              Men då alla inte har tillgång till, eller vill investera i, en sådan utstyrsel,
              så går det givetvis ypperligt bra med en
              {' '}
              <b>Mörk kostym</b>
              .
            </p>
            <ul>
              <li>
                <b>Klädkod Högtidsdräkt</b>
                <ul>
                  <li>
                    En frack är alltid svart eller mörkt midnattsblå, byxan har en eller två revärer av siden.
                  </li>
                  <li>
                    Vit skjorta med stärkt krage och bröst, vit rosett.
                  </li>
                  <li>
                    Svarta snörskor eller lackskor med låg klack.
                  </li>
                </ul>
              </li>
              <li>
                <b>Klädkod Mörk kostym</b>
                <ul>
                  <li>
                    Byxor och jacka i samma färg och material i färgerna mörkblå eller mörkgrå
                  </li>
                  <li>
                    Vit skjorta och slips eller fluga i valfri färg
                  </li>
                  <li>
                    Väljer du väst kan den vara färgad och/eller mönstrad
                  </li>
                  <li>
                    Mörka strumpor och svarta tunna skor
                  </li>
                </ul>
              </li>
            </ul>
            <h5>
              Damer
            </h5>
            <p>
              Bruden kommer att bära en klassiskt vit brudklänning, hennes tärnor har långklänningar i lila nyans.
            </p>
            <p>
              Givetvis bär ingen dam utom bruden vitt en dag som denna.
            </p>
            <ul>
              <li>
                <b>Klädkod Högtidsdräkt</b>
                <ul>
                  <li>
                    Golvlång klänning eller kjol med separat överdel
                  </li>
                  <li>
                    En typisk frackklänning är av extra fin modell, gärna med vid kjol och i glittrigt material
                  </li>
                  <li>
                    Frack- eller balklänning kan vara både med eller utan ärm, samt med eller utan krage
                  </li>
                  <li>
                    Festliga skor
                  </li>
                  <li>
                    Det går givetvis även bra med folkdräkt, för de som känner sig manade
                  </li>
                </ul>
              </li>
              <li>
                <b>Klädkod Mörk kostym</b>
                <ul>
                  <li>
                    Klänning, kjol eller byxdress som är elegantare än vardagsklädsel
                  </li>
                  <li>
                    Färg och mönster efter tycke och smak
                  </li>
                  <li>
                    Välj accessoarer, smycken, skor och väska efter egen smak
                  </li>
                </ul>
              </li>
            </ul>
          </Collapsible>

        </div>
      </ContentBlock>
      <ContentBlock image={Ocean}>
        <div className="InfoWrap">
          <h3>Tidsplan</h3>
          <div className="subtitle">
            Lördag 19 November 2022
          </div>
          <Event
            thing="Vigsel"
            location="Vallkärra kyrka"
            extra="därefter promenad eller biltur till Axelgård"
            time="14.00"
          />
          <Event
            thing="Mingel, dryck & snacks"
            location="Axelgård - Lilla salen"
            extra=" "
            time="efter vigsel"
          />
          <Event
            thing="Middag"
            location="Axelgård - Stora salen"
            extra="3 rätters middag med dryck och underhållning"
            time="17.30"
          />
          <Event
            thing="Dans"
            location="Axelgård - Stora salen"
            extra="Inledningsvis slow dance och därefter untz "
            time="efter middagen"
          />

          <Event
            thing="Nattamat"
            location="Axelgård"
            extra="Enklare korv med bröd"
            time="senast kl 01"
          />
        </div>
      </ContentBlock>
    </div>
  );
}

export default Info;
