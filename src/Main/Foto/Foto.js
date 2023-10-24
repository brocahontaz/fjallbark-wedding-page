/* eslint-disable max-len */
import ContentBlock from '../components/ContentBlock';
import Bal from '../../assets/img/bal.png';

import './Foto.css';

function Foto() {
  return (
    <div className="Foto">
      <div className="Positioner">
        <div className="CoverChecker" id="foto" data-scrollspy />
      </div>
      <ContentBlock title="Foto" subtitle="Axelgård" image={Bal}>
        <div className="PartyWrap">s</div>
      </ContentBlock>
    </div>
  );
}

export default Foto;
