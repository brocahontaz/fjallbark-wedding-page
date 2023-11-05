import { useState } from "react";

import PhotoAlbum, { Photo } from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

import "./Gallery.css";

function getUniqueListBy(arr: { src: string; width: number; height: number; }[], key: string) {
  return [...new Map(arr.map((item: { [x: string]: any; }) => [item[key], item])).values()];
}

const files = import.meta.glob([
  "/public/gallery/*.png",
  "/public/gallery/*.jpg"
]);

const filenames = [];
for (const key in files) {
  filenames.push(key.split(/public/)[1]);
}

const photos = filenames.map((ref) => ({ src: ref, width: 200, height: 200 }));

console.log(photos);

const photosArr = getUniqueListBy(photos, "src");

function Gallery() {
  const [index, setIndex] = useState(-1);

  return (
    <div className="Gallery">
      <PhotoAlbum
        layout="masonry"
        photos={photosArr as Photo[]}
        onClick={({ index }) => setIndex(index)}
        renderPhoto={({ wrapperStyle, renderDefaultPhoto }) => (
          <a style={wrapperStyle} target="_blank" rel="noreferrer noopener">
            {renderDefaultPhoto({ wrapped: true })}
          </a>
        )}
      />

      <Lightbox
        slides={photos}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        // enable optional lightbox plugins
        plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
      />
    </div>
  );
}

export default Gallery;
