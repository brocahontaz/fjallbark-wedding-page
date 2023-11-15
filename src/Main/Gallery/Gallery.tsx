import { useState } from "react"

import PhotoAlbum, { Photo } from "react-photo-album"
import Lightbox from "yet-another-react-lightbox"
import "yet-another-react-lightbox/styles.css"
import "yet-another-react-lightbox/plugins/thumbnails.css"
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen"
import Slideshow from "yet-another-react-lightbox/plugins/slideshow"
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails"
import Zoom from "yet-another-react-lightbox/plugins/zoom"

import "./Gallery.css"
import { landscapeFilenames, portraitFilenames } from "./Files"
import { sortPhotos } from "./utils"

const landscapePhotoThumbnails = landscapeFilenames.map((ref) => ({
  alt: ref,
  src: `https://images.fjallbark.se/wedding/thumbnails/landscape/${ref}`,
  width: 350,
  height: 233,
  srcSet: [
    {
      src: `https://images.fjallbark.se/wedding/thumbnails/landscape/${ref}`,
      width: 350,
      height: 233,
    },
  ],
}))

const portraitPhotoThumbnails = portraitFilenames.map((ref) => ({
  alt: ref,
  src: `https://images.fjallbark.se/wedding/thumbnails/portrait/${ref}`,
  width: 233,
  height: 350,
  srcSet: [
    {
      src: `https://images.fjallbark.se/wedding/thumbnails/portrait/${ref}`,
      width: 233,
      height: 350,
    },
  ],
}))

const allThumbnails = [...landscapePhotoThumbnails, ...portraitPhotoThumbnails]

const sortedThumbnails = allThumbnails.sort(sortPhotos)

const landscapePhotos = landscapeFilenames.map((ref) => ({
  alt: ref,
  src: `https://images.fjallbark.se/wedding/thumbnails/landscape/${ref}`,
  width: 1080,
  height: 720,
  srcSet: [
    {
      src: `https://images.fjallbark.se/wedding/thumbnails/landscape/${ref}`,
      width: 350,
      height: 233,
    },
    {
      src: `https://images.fjallbark.se/wedding/fullsize/landscape/${ref}`,
      width: 1080,
      height: 720,
    },
  ],
}))

const portraitPhotos = portraitFilenames.map((ref) => ({
  alt: ref,
  src: `https://images.fjallbark.se/wedding/thumbnails/portrait/${ref}`,
  width: 720,
  height: 1080,
  srcSet: [
    {
      src: `https://images.fjallbark.se/wedding/thumbnails/portrait/${ref}`,
      width: 233,
      height: 350,
    },
    {
      src: `https://images.fjallbark.se/wedding/fullsize/portrait/${ref}`,
      width: 720,
      height: 1080,
    },
  ],
}))

const allPhotos = [...landscapePhotos, ...portraitPhotos]

const sortedPhotos = allPhotos.sort(sortPhotos)

function Gallery() {
  const [index, setIndex] = useState(-1)

  return (
    <div className="Gallery">
      <PhotoAlbum
        layout="masonry"
        photos={sortedThumbnails as Photo[]}
        onClick={({ index }) => setIndex(index)}
        renderPhoto={({ wrapperStyle, renderDefaultPhoto }) => (
          <a style={wrapperStyle} target="_blank" rel="noreferrer noopener">
            {renderDefaultPhoto({ wrapped: true })}
          </a>
        )}
      />

      <Lightbox
        slides={sortedPhotos}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        // enable optional lightbox plugins
        plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
      />
    </div>
  )
}

export default Gallery
