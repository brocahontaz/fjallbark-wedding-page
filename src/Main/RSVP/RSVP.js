/* eslint-disable max-len */
import './RSVP.css';
import ContentBlock from '../components/ContentBlock';
import Kyss from '../../assets/img/kyss.png';

function RSVP() {
  return (
    <div className="RSVP">
      <div className="Positioner">
        <div className="CoverChecker" id="RSVP" data-scrollspy />
      </div>
      <ContentBlock title="RSVP" subtitle="Senast 30 september" image={Kyss}>
        <div className="RSVPWrap">
          <iframe
            title="RSVP"
            className="RSVPForm"
            src="https://docs.google.com/forms/d/e/1FAIpQLScad-sHbxDI-Ysw7ImlPHbjgH8masgrTScc5gkWnFUnqZA9Pw/viewform?embedded=true"
            width="100%"
            height="1461"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
          >
            Läser in…

          </iframe>
          <a href="https://forms.gle/NihnaNdpuWLdV1EZ8" target="_blank" rel="noreferrer">Formulär för anmälan hittar jag här</a>
        </div>
      </ContentBlock>
    </div>
  );
}

export default RSVP;
