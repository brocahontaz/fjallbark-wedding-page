/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import "./Collapsible.css";
import { useState } from "react";
import PropTypes from "prop-types";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

function Collapsible({ buttonText, open, children, height }) {
  const [isOpen, setIsOpen] = useState(open);

  const handleFilterOpening = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="Collapsible">
      <button type="button" className="Toggle" onClick={handleFilterOpening}>
        {buttonText}
        {" "}
        {!isOpen ? (
          <FontAwesomeIcon icon={faChevronDown} />
        ) : (
          <FontAwesomeIcon icon={faChevronUp} />
        )}
      </button>
      <div className={`Content${isOpen ? " Open" : ""}`}>
        <div className="Border" />
        <div className="Wrapper">
          {children}
        </div>
      </div>
    </div>
  );
}

Collapsible.propTypes = {
  buttonText: PropTypes.string,
  open: PropTypes.bool,
  children: PropTypes.node,
};

Collapsible.defaultProps = {
  buttonText: "Tryck för att läsa mer",
  open: false,
  children: null,
};

export default Collapsible;
