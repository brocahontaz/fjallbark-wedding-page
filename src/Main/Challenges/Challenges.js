import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import ContentBlock from '../components/ContentBlock';
import './Challenges.css';
import data from './challenges.json';

function Challenges() {
  const [active, setActive] = useState(0);
  return (
    <div className="Challenges">
      <ContentBlock title="Utmana dig själv" subtitle="under bröllopsminglet">
        <p className="center-text">
          Skicka bildbevis på alla utförda utmaningar till
          {' '}
          <a href="mailto:weddinguntz@gmail.com">
            <FontAwesomeIcon icon={faEnvelope} size="1x" />
            {' '}
            weddinguntz@gmail.com
          </a>
          {' '}
          för att kunna vinna priser!
        </p>
        <div className="ChallengeList">
          {data.challenges.map((c, i) => (
            <div key={c.k} className="ChallengeItem">
              <div className={`Challenge ${active === i ? 'active' : ''}`}>
                {c.u}
              </div>
              <div className={`subtext ${active === i ? 'active' : ''}`}>
                {c.d}
              </div>
            </div>
          ))}
        </div>

        <div className="NextButtonWrapper">
          <button
            type="button"
            onClick={() => {
              if (active + 1 < data.challenges.length) {
                setActive(active + 1);
              } else {
                setActive(0);
              }
            }}
          >
            <FontAwesomeIcon icon={faAngleRight} size="2x" />
          </button>

        </div>
      </ContentBlock>
    </div>
  );
}

export default Challenges;
