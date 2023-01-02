import { getStrapiMedia } from "../lib/media"
import NextImage from "next/image"

const Image = ({ image }) => {
  const { alternativeText, width, height } = image.data.attributes

  const loader = () => {
    return getStrapiMedia(image)
  }

  return (
    <NextImage
      loader={loader}
      layout="responsive"
      width={width || "100%"}
      height={height || "100%"}
      objectFit="cover"
      src={getStrapiMedia(image)}
      alt={alternativeText || ""}
    />
  )
}

export default Image
