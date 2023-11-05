import PropTypes from "prop-types";
import { NavHashLink } from "react-router-hash-link";
import { NavLink } from "react-router-dom";
import scrollWithOffset from "../utilities/ScrollOffset";

import "./Navigation.css";

function Navigation({ links }) {
  return (
    <div className="Navigation">
      {links.map((link) => {
        if (!link.noscroll) {
          return (
            <NavHashLink
              key={`nav-${link.name}`}
              smooth
              to={`${link.href}`}
              className={({ isActive }) =>
                `nav-link${isActive ? " selected" : ""}`
              }
              activeClassName="selected"
              scroll={(el) => scrollWithOffset(el)}
            >
              {link.name.toUpperCase()}
            </NavHashLink>
          );
        }
        return (
          <NavLink
            key={`nav-${link.name}`}
            to={`${link.href}`}
            className={({ isActive }) =>
              `nav-link${isActive ? " selected" : ""}`
            }
          >
            {link.name.toUpperCase()}
          </NavLink>
        );
      })}
    </div>
  );
}

Navigation.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      href: PropTypes.string,
    })
  ).isRequired,
};

export default Navigation;
