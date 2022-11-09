import PropTypes from 'prop-types';
import { NavHashLink } from 'react-router-hash-link';
import scrollWithOffset from '../utilities/ScrollOffset';

import './Navigation.css';

function Navigation({ links }) {
  return (
    <div className="Navigation">
      {links.map((link) => (
        <NavHashLink
          key={`nav-${link.name}`}
          smooth
          to={`#${link.href}`}
          className={({ isActive }) => `nav-link${isActive ? ' selected' : ''}`}
          activeClassName="selected"
          scroll={(el) => scrollWithOffset(el)}
        >
          {link.name.toUpperCase()}
        </NavHashLink>
      ))}
    </div>
  );
}

Navigation.propTypes = {
  links: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Navigation;
