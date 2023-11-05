import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faClock } from "@fortawesome/free-solid-svg-icons";
import "./Event.css";

function Event({ thing, time, location, extra }) {
  return (
    <div className="Event">
      <div className="Row">
        <div className="Thing">
          <h4>{thing}</h4>
        </div>
        <div className="Location">
          <span>{location}</span>
          <FontAwesomeIcon icon={faLocationDot} size="1x" />
        </div>
      </div>
      <div className="Row">
        <div className="ExtraInfo">
          <span className="italic">{extra}</span>
        </div>
        <div className="Time">
          <span>{time}</span>
          <FontAwesomeIcon icon={faClock} size="1x" />
        </div>
      </div>
    </div>
  );
}

Event.propTypes = {
  thing: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  extra: PropTypes.string.isRequired,
};

export default Event;
