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
          Själva ceremonin kommer äga rum i den vackra
          {' '}
          <b>Vallkärra Kyrka</b>
          {' '}
          strax norr om Lund, med anor från slutet av 1100-talet.
        </p>
        <p>
          <b>Adress:</b>
          {' '}
          Kävlingevägen 107, 226 50 Lund
        </p>
        <iframe
          title="churchmap"
          className="MapFrame"
          width="100%"
          height="350"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
          src="https://www.openstreetmap.org/export/embed.html?bbox=13.155698776245119%2C55.73580928511603%2C13.187413215637209%2C55.74616122293971&amp;layer=mapnik&amp;marker=55.740979557644664%2C13.171555995941162"
        />
        <br />
        <small><a href="https://www.openstreetmap.org/?mlat=55.7410&amp;mlon=13.1716#map=16/55.7410/13.1716&amp;layers=N">View Larger Map</a></small>
      </ContentBlock>
    </div>
  );
}

export default Ceremony;
