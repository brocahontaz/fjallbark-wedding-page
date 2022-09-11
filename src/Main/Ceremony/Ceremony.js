/* eslint-disable max-len */
import './Ceremony.css';
import ContentBlock from '../components/ContentBlock';
import Church from '../../assets/img/vallkarrakyrka.jpeg';

function Ceremony() {
  return (
    <div className="Ceremony" id="vigsel" data-scrollspy>
      <ContentBlock title="Vigsel" subtitle="Vallkärra Kyrka" image={Church} />
    </div>
  );
}

export default Ceremony;
