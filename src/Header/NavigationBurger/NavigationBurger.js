import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import './NavigationBurger.css';

function NavigationBurger({ links }) {
  return (
    <div className="NavigationBurger">
      <button type="button">
        <FontAwesomeIcon icon={faBars} size="2x" />
      </button>

      <div className="Expandable">
        {links}
      </div>
    </div>
  );
}

NavigationBurger.propTypes = {
  links: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default NavigationBurger;
