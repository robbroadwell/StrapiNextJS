import React from "react"
import Link from "next/link"
import NextImage from "./image"

const OtherTile = ({ item }) => {
  return (
    <Link href={`${item.attributes.url}`}>
      <a className="uk-link-reset">
        <div class="other-tile">
          <p class="other-title">{item.attributes.title}</p>
          <p class="other-subtitle">{item.attributes.subtitle}</p>
        </div>
      </a>
    </Link>
  )
}

const Other = ({ others }) => {
    return (
      <div class="other">
        <h1 class="boom">Other</h1>
        <div class="other-container">
          {others.map((item, i) => {
            return (
              <OtherTile item={item} />
            )
          })}
        </div>
      </div>
    );
}

export default Other