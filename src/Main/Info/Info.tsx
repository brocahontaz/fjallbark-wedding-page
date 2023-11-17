import "./Info.css"
import pdf from "../../assets/pdf.pdf"

import Event from "../components/Event"
import ContentBlock from "../components/ContentBlock"
import Ringbubbel from "../../assets/img/ringbubbel.png"
import Ocean from "../../assets/img/ocean.jpeg"

function Info() {
  return (
    <div className="Info">
      <div className="Positioner">
        <div className="CoverChecker" id="info" data-scrollspy />
      </div>
      <ContentBlock
        title="Information"
        subtitle="The difference that makes a difference"
        image={Ringbubbel}
      >
        <div className="InfoWrap">
          <h3>TACK!</h3>
          <div>
            Stort TACK för för att ni ville vara med på vårt bröllop den
            19/11-2022, nu visar vi även bilder från bröllopet (FOTO samt SELFIE i menyn)!
          </div>
          <h3>Broschyr</h3>
          <p className="center-text">Här är broschyren från bröllopet: <a href={pdf} download="fjallbark.pdf">LADDA NER</a></p>
        </div>
      </ContentBlock>
      <ContentBlock image={Ocean}>
        <div className="InfoWrap">
          <h3>Tidsplan</h3>
          <div className="subtitle">Lördag 19 November 2022</div>
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
  )
}

export default Info
