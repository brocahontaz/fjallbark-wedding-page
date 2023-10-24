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
      <ContentBlock title="Vigsel" subtitle="Vallkärra Kyrka" image={Church}>
        <p>
          Själva ceremonin ägde rum i den vackra
          {' '}
          <b>Vallkärra Kyrka</b>
          {' '}
          strax norr om Lund, med anor från slutet av 1100-talet.
        </p>
      </ContentBlock>
    </div>
  );
}

export default Ceremony;
