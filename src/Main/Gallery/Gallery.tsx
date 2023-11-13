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
import { filenames } from "./Files";

function getUniqueListBy(
  arr: { src: string; width: number; height: number }[],
  key: string
) {
  return [
    ...new Map(
      arr.map((item: { [x: string]: any }) => [item[key], item])
    ).values(),
  ];
}

const photos = filenames.map((ref) => ({
  src: `http://images.fjallbark.se/wedding/thumbnails/${ref}`,
  width: 350,
  height: 233,
  srcSet: [
    {
      src: `http://images.fjallbark.se/wedding/thumbnails/${ref}`,
      width: 350,
      height: 233,
    },
  ],
}));

const photosFull = filenames.map((ref) => ({
  src: `http://images.fjallbark.se/wedding/thumbnails/${ref}`,
  width: 1080,
  height: 720,
  srcSet: [
    {
      src: `http://images.fjallbark.se/wedding/thumbnails/${ref}`,
      width: 350,
      height: 233,
    },
    {
      src: `http://images.fjallbark.se/wedding/fullsize/${ref}`,
      width: 1080,
      height: 720,
    },
  ],
}));

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
        slides={photosFull}
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
