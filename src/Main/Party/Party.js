/* eslint-disable max-len */
import './Party.css';
import ContentBlock from '../components/ContentBlock';
import Bal from '../../assets/img/bal.png';

function Party() {
  return (
    <div className="Party" id="fest" data-scrollspy>
      <ContentBlock title="Fest" subtitle="Axelgård" image={Bal} />
    </div>
  );
}

export default Party;
