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
      <ContentBlock title="Fest" subtitle="Axelgård" image={Bal}>
        <p>
          Efter vigseln beger vi oss mot
          {' '}
          <b>Axelgård</b>
          {' '}
          för mingel, mat, och festligheter. Gården är mysig en gammal fyrlängad bondgård, där vi har tillgång till det gamla boningshuset i två längor.
        </p>
        <p>
          Middagen och festen äger rum i Stora Salen, medans vi kommer ha tillgång till lite mingel och annat kul i Lilla Salen.
        </p>
        <p>
          <b>Viktigt att tänka på</b>
          {' '}
          är att det huserar ett stall fullt med hästar i de övriga två längorna. Det är
          {' '}
          <i>inte</i>
          {' '}
          tillåtet för någon gäst att befinna sig i stallbyggnaden under några omständigheter, även om brudens alldeles egna löpare bor där.
        </p>
        <h3>
          Underhållning
        </h3>
        <h4 className="center-text">DJ Nicolas Salas</h4>
        <p className="center-text">
          ..kommer stå bakom spakarna under festen och bjuda på goa bitar!
        </p>
        <h4 className="center-text">
          Selfie Cam
        </h4>
        <p className="center-text">
          Det kommer att finnas en selfie-cam-station i någon hörna av lokalen, där alla gäster är mer än välkomna att föreviga roliga ögonblick!
        </p>
        <h3>
          Hur tar jag mig hit?
        </h3>
        <p>
          Axelgård befinner sig på ett mycket kort promenadavstånd från kyrkan. För de som åker kollektivt, eller helt sonika känner för att ta en promenad, så går detta alldeles utmärkt.
        </p>
        <p>
          För de med bil som även vill flytta denna till festlokalen, så finns det gott om parkeringsplatser. Tänk dock på att inte parkera på innergården.
        </p>
        <p>
          <b>Adress:</b>
          {' '}
          Västratornsvägen 1, 226 50 Lund
        </p>
        <iframe
          title="partymap"
          className="MapFrame"
          width="100%"
          height="350"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
          src="https://www.openstreetmap.org/export/embed.html?bbox=13.17138433456421%2C55.735736799791724%2C13.183486461639406%2C55.74091312157089&amp;layer=mapnik&amp;marker=55.73832504649804%2C13.177435398101807"
        />
        <br />
        <small><a href="https://www.openstreetmap.org/?mlat=55.73833&amp;mlon=13.17744#map=17/55.73833/13.17744&amp;layers=N">View Larger Map</a></small>
      </ContentBlock>
    </div>
  );
}

export default Party;
