import "./Collapsible.css"
import { ReactNode, useState } from "react"
import PropTypes from "prop-types"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons"
import { IconProp } from "@fortawesome/fontawesome-svg-core"

type CollapsibleProps = {
  buttonText: string
  open: boolean
  children: ReactNode
}

function Collapsible({ buttonText, open, children }: CollapsibleProps) {
  const [isOpen, setIsOpen] = useState(open)

  const handleFilterOpening = () => {
    setIsOpen((prev) => !prev)
  }

  return (
    <div className="Collapsible">
      <button type="button" className="Toggle" onClick={handleFilterOpening}>
        {buttonText}{" "}
        {!isOpen ? (
          <FontAwesomeIcon icon={faChevronDown as IconProp} />
        ) : (
          <FontAwesomeIcon icon={faChevronUp as IconProp} />
        )}
      </button>
      <div className={`Content${isOpen ? " Open" : ""}`}>
        <div className="Border" />
        <div className="Wrapper">{children}</div>
      </div>
    </div>
  )
}

Collapsible.propTypes = {
  buttonText: PropTypes.string,
  open: PropTypes.bool,
  children: PropTypes.node,
}

Collapsible.defaultProps = {
  buttonText: "Tryck för att läsa mer",
  open: false,
  children: null,
}

export default Collapsible
