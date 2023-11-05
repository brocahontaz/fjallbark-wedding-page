import { useState } from "react";

import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
// import "yet-another-react-lightbox/styles.css";
// import "yet-another-react-lightbox/plugins/thumbnails.css";
// import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
// import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
// import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
// import Zoom from "yet-another-react-lightbox/plugins/zoom";

import "./Gallery.css";

function getUniqueListBy(arr, key) {
  return [...new Map(arr.map((item) => [item[key], item])).values()];
}

function importAll(r) {
  return r.keys().map(r);
}
//const filenames = importAll(
//  require.context("../../assets/img", false, /\.(png|jpe?g|svg)$/)
//);
//const photos = filenames.map((ref) => ({ src: ref, width: 200, height: 200 }));

//const photosArr = getUniqueListBy(photos, "src");

function Gallery() {
  const [index, setIndex] = useState(-1);

  return <div className="Gallery"></div>;
}

export default Gallery;
