import { useState } from "react"

import PhotoAlbum, { Photo } from "react-photo-album"
import Lightbox from "yet-another-react-lightbox"
import "yet-another-react-lightbox/styles.css"
import "yet-another-react-lightbox/plugins/thumbnails.css"
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen"
import Slideshow from "yet-another-react-lightbox/plugins/slideshow"
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails"
import Zoom from "yet-another-react-lightbox/plugins/zoom"
import Download from "yet-another-react-lightbox/plugins/download"

import "./SelfieCircle.css"
import { filenames } from "./Files"
import { sortPhotos } from "./utils"

const thumbnails = filenames.map((ref) => ({
  alt: ref,
  src: `https://images.fjallbark.se/selfiecircle/thumbnails/${ref}`,
  width: 350,
  height: 219,
  srcSet: [
    {
      src: `https://images.fjallbark.se/selfiecircle/thumbnails/${ref}`,
      width: 350,
      height: 219,
    },
    {
      src: `https://images.fjallbark.se/selfiecircle/fullsize/${ref}`,
      width: 1080,
      height: 675,
    },
  ],
}))

const sortedThumbnails = thumbnails.sort(sortPhotos)

const photos = filenames.map((ref) => ({
  alt: ref,
  src: `https://images.fjallbark.se/selfiecircle/fullsize/${ref}`,
  width: 1080,
  height: 675,
  downloadUrl: `https://images.fjallbark.se/selfiecircle/fullsize/${ref}`,
  srcSet: [
    {
      src: `https://images.fjallbark.se/selfiecircle/thumbnails/${ref}`,
      width: 350,
      height: 219,
    },
    {
      src: `https://images.fjallbark.se/selfiecircle/fullsize/${ref}`,
      width: 1080,
      height: 675,
    },
  ],
}))

const sortedPhotos = photos.sort(sortPhotos)

function SelfieCircle() {
  const [index, setIndex] = useState(-1)

  return (
    <div className="SelfieCircle">
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
        plugins={[Fullscreen, Slideshow, Thumbnails, Zoom, Download]}
      />
    </div>
  )
}

export default SelfieCircle
