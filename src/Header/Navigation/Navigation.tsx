import PropTypes from "prop-types"
import { NavHashLink } from "react-router-hash-link"
import scrollWithOffset from "../utilities/ScrollOffset"

import "./Navigation.css"
import { Link } from "../Header"

type NavigationProps = {
  links: Link[]
}

function Navigation({ links }: NavigationProps) {
  return (
    <div className="Navigation">
      {links.map((link) => {
        if (!link.noscroll) {
          return (
            <NavHashLink
              key={`nav-${link.name}`}
              smooth
              to={`${link.href}`}
              className={(isActive) => `nav-link${isActive ? " selected" : ""}`}
              activeClassName="selected"
              scroll={(el) => scrollWithOffset(el)}
            >
              {link.name.toUpperCase()}
            </NavHashLink>
          )
        }
        return (
          <NavHashLink
            key={`nav-${link.name}`}
            to={`${link.href}`}
            className={(isActive) => `nav-link${isActive ? " selected" : ""}`}
          >
            {link.name.toUpperCase()}
          </NavHashLink>
        )
      })}
    </div>
  )
}

Navigation.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      href: PropTypes.string,
    })
  ).isRequired,
}

export default Navigation
