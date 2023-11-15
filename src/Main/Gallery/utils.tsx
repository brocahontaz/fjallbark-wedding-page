import { Photo } from "react-photo-album"

export const sortPhotos = (photo1: Photo, photo2: Photo) => {
  const name1 = (photo1.alt && photo1.alt.toLowerCase()) || ""
  const name2 = (photo2.alt && photo2.alt.toLowerCase()) || ""

  if (name1 < name2) {
    return -1
  }
  if (name1 > name2) {
    return 1
  }

  return 0
}
