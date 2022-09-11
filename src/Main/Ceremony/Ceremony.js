/* eslint-disable max-len */
import './Ceremony.css';
import ContentBlock from '../components/ContentBlock';
import Church from '../../assets/img/vallkarrakyrka.jpeg';

function Ceremony() {
  return (
    <div className="Ceremony">
      <div className="Positioner">
        <div className="CoverChecker" id="vigsel" data-scrollspy />
      </div>
      <ContentBlock title="Vigsel" subtitle="Vallkärra Kyrka" image={Church} />
    </div>
  );
}

export default Ceremony;
