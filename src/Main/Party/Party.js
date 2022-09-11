/* eslint-disable max-len */
import './Party.css';
import ContentBlock from '../components/ContentBlock';
import Bal from '../../assets/img/bal.png';

function Party() {
  return (
    <div className="Party">
      <div className="Positioner">
        <div className="CoverChecker" id="fest" data-scrollspy />
      </div>
      <ContentBlock title="Fest" subtitle="Axelgård" image={Bal} />
    </div>
  );
}

export default Party;
