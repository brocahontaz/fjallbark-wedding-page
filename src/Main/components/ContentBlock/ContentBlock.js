import './ContentBlock.css';
import PropTypes from 'prop-types';

function ContentBlock({ children }) {
  return (
    <div className="ContentBlock">
      {children}
    </div>
  );
}

ContentBlock.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element)
};

ContentBlock.defaultProps = {
  children: ''
};

export default ContentBlock;
