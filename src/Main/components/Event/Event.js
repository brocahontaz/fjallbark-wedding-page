import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import './Event.css';

function Event({
  thing, time, location, extra
}) {
  return (
    <div className="Event">
      <div className="Row">
        <h3>{thing}</h3>
        <div />
        <div className="Location">
          <span>{location}</span>
          <FontAwesomeIcon icon={faLocationDot} size="2x" />
        </div>
      </div>
      <div className="Row">
        <span>{extra}</span>
        <div />
        <span className="Time">{time}</span>
      </div>
    </div>
  );
}

Event.propTypes = {
  thing: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  extra: PropTypes.string.isRequired
};

export default Event;
