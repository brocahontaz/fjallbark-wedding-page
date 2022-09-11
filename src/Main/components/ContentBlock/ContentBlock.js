import './ContentBlock.css';
import PropTypes from 'prop-types';

function ContentBlock({ title, children }) {
  return (
    <div className="ContentBlock">
      <h2>{title}</h2>
      {children}
    </div>
  );
}

ContentBlock.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node
};

ContentBlock.defaultProps = {
  title: '',
  children: null
};

export default ContentBlock;
