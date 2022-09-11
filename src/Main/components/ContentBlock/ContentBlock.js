import './ContentBlock.css';
import PropTypes from 'prop-types';

function ContentBlock({
  title, subtitle, image, children
}) {
  return (
    <div className="ContentBlock">
      <div className="Content">
        <div className="Title">
          <h2>{title}</h2>
          <div>{subtitle}</div>
          <div className="SmallImage">
            <img src={image} alt={title} />
          </div>
        </div>
        {children}
      </div>
      <div className="Image">
        <img src={image} alt={title} />
      </div>

    </div>
  );
}

ContentBlock.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  image: PropTypes.string.isRequired,
  children: PropTypes.node
};

ContentBlock.defaultProps = {
  title: '',
  subtitle: '',
  children: null
};

export default ContentBlock;
