/* eslint-disable max-len */
import PhotoAlbum from 'react-photo-album';
import ContentBlock from '../components/ContentBlock';
import './Foto.css';

function importAll(r) {
  return r.keys().map(r);
}
const filenames = importAll(require.context('../../assets/img', false, /\.(png|jpe?g|svg)$/));
const photos = [
  { src: 'wedding/ringar-mork-tall.png', width: 800, height: 800 },
  { src: 'wedding/ringar-mork-tall.png', width: 800, height: 800 }
];
const photos2 = filenames.map((ref) => ({ src: ref, width: 800, height: 800 }));

function Foto() {
  return (
    <div className="Foto">
      <div className="Positioner">
        <div className="CoverChecker" id="foto" data-scrollspy />
      </div>
      <ContentBlock title="Foto" subtitle="Axelgård">
        <PhotoAlbum layout="masonry" photos={photos} />
        <PhotoAlbum layout="masonry" photos={photos2} />
      </ContentBlock>
    </div>
  );
}

export default Foto;
