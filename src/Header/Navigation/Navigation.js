import PropTypes from 'prop-types';
import { NavHashLink } from 'react-router-hash-link';

import './Navigation.css';

function Navigation({ links }) {
  return (
    <div className="Navigation">
      {links.map((link) => (
        <NavHashLink
          smooth
          to={`#${link}`}
          className={({ isActive }) => `nav-link${isActive ? ' selected' : ''}`}
          activeClassName="selected"
        >
          {link.toUpperCase()}
        </NavHashLink>
      ))}
    </div>
  );
}

Navigation.propTypes = {
  links: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Navigation;
