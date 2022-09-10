/*eslint-disable */
import './Info.css';
import Event from '../components/Event'

function Info() {
  return (
    <div className="Info" id="info" data-scrollspy>
      <h1>Observera</h1>
      <div>Vi vill kunna bjuda många från familj och vänner så därför önskar vi en <b>kuvertavgift istället för present på vårt bröllop</b>. Det kommer vara 500kr per kuvert och det kommer (förhoppningsvis) bli fantastisk mat under middagen och stor variation av dryck till det, både med och utan alkohol. Ingen återbetalning av kuvertavgiften kan ske vid exempelvis sjukdom/förhinder då allting (och mer därtill) går oavkortat till cateringbolaget, försök håll er friska och krya så ni inte missar denna magiska dag.</div>
      <h1>Preliminär tidsplan</h1>
      <Event
        thing="Vigsel"
        location="Vallkärra kyrka"
        extra="därefter promenad eller biltur till Axelgård"
        time="14.00"
      />
      <Event
        thing="Mingel, dryck & snacks - Axelgård lilla salen"
        location="Axelgård - Stora salen"
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
  );
}

export default Info;
