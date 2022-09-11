/* eslint-disable max-len */
import './RSVP.css';
import ContentBlock from '../components/ContentBlock';

function RSVP() {
  return (
    <div className="RSVP">
      <div className="Positioner">
        <div className="CoverChecker" id="RSVP" data-scrollspy />
      </div>
      <ContentBlock title="RSVP" subtitle="30 september">
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
      </ContentBlock>
    </div>
  );
}

export default RSVP;
