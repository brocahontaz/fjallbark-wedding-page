import './ContentBlock.css';
import PropTypes from 'prop-types';

function ContentBlock({ title, children }) {
  return (
    <div className="ContentBlock">
      <div className="Content">
        <h2>{title}</h2>
        {children}
      </div>
      <div className="Image">
        <img src="" alt="placeholder" />
      </div>

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
