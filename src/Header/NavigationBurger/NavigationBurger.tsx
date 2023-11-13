import PropTypes from "prop-types"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"
import { NavHashLink } from "react-router-hash-link"

import scrollWithOffset from "../utilities/ScrollOffset"

import "./NavigationBurger.css"
import { IconProp } from "@fortawesome/fontawesome-svg-core"
import { Link } from "../Header"

type NavigationBurgerProps = {
  links: Link[]
}

function NavigationBurger({ links }: NavigationBurgerProps) {
  const [navbarOpen, setNavbarOpen] = useState(false)

  const handleToggle = () => {
    setNavbarOpen((prev) => !prev)
  }

  const closeMenu = () => {
    setNavbarOpen(false)
  }

  return (
    <div className="NavigationBurger">
      <button type="button" onClick={handleToggle}>
        {!navbarOpen ? (
          <FontAwesomeIcon icon={faBars as IconProp} size="2x" />
        ) : (
          <FontAwesomeIcon icon={faXmark as IconProp} size="2x" />
        )}
      </button>

      <div className={`Navbar ${navbarOpen ? "Open" : ""}`}>
        {links.map((link) => {
          if (!link.noscroll) {
            return (
              <NavHashLink
                key={`nav-${link.name}`}
                smooth
                to={`${link.href}`}
                className={(isActive) =>
                  `nav-link${isActive ? " selected" : ""}`
                }
                activeClassName="selected"
                scroll={(el) => scrollWithOffset(el)}
                onClick={() => closeMenu()}
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
              onClick={() => closeMenu()}
            >
              {link.name.toUpperCase()}
            </NavHashLink>
          )
        })}
      </div>
    </div>
  )
}

NavigationBurger.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      href: PropTypes.string,
    })
  ).isRequired,
}

export default NavigationBurger
