import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import data from './challenges.json';

function Challenges() {
  const [active, setActive] = useState(0);
  return (
    <>
      <div style={{
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '10px'
      }}
      >
        <h2>Utmana dig själv under bröllopsminglet</h2>
        <p>
          Skicka bildbevis på alla utförda utmaningar till
          {' '}
          <a href="mailto:weddinguntz@gmail.com">
            <FontAwesomeIcon icon={faEnvelope} size="1x" />
            {' '}
            weddinguntz@gmail.com
          </a>
          för att kunna vinna priser!
        </p>
        <div>
          {data.challenges.map((c, i) => (
            <div key={c.k} style={{ margin: '1em' }}>
              <div style={{
                fontWeight: active === i && 800, fontSize: active === i && '3em', color: active === i ? 'black' : 'grey', display: 'flex', width: '100%', justifyContent: 'center'
              }}
              >
                {c.u}
              </div>
              <div style={{
                fontSize: active === i && '1.5em', color: active === i ? 'black' : 'grey', display: 'flex', width: '100%', justifyContent: 'center'
              }}
              >
                {c.d}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ display: 'flex', width: '100%', justifyContent: 'center' }}>
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

    </>
  );
}

export default Challenges;
