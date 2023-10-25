import PhotoAlbum from "react-photo-album";
import "./Gallery.css";

function getUniqueListBy(arr, key) {
  return [...new Map(arr.map((item) => [item[key], item])).values()];
}

function importAll(r) {
  return r.keys().map(r);
}
const filenames = importAll(
  require.context("../../assets/img", false, /\.(png|jpe?g|svg)$/)
);
const photos = filenames.map((ref) => ({ src: ref, width: 200, height: 200 }));

const photosArr = getUniqueListBy(photos, "src");

function Gallery() {
  return (
    <div className="Gallery">
      <PhotoAlbum
        layout="masonry"
        photos={photosArr}
        renderPhoto={({ photo, wrapperStyle, renderDefaultPhoto }) => (
          <a
            href={photo.href}
            style={wrapperStyle}
            target="_blank"
            rel="noreferrer noopener"
          >
            {renderDefaultPhoto({ wrapped: true })}
          </a>
        )}
      />
    </div>
  );
}

export default Gallery;
