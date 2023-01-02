import React from "react"
import Link from "next/link"
import NextImage from "./image"

const RegionLink = ({ region }) => {
  return (
    <Link href={`/destinations/${region.slug}`}>
        <a className="uk-link-reset destination-regions-link">
          {region.name}
        </a>
    </Link>
  )
}

const CountryLink = ({ country }) => {
  return (
    <Link href={`/destinations/${country.slug}`}>
        <a className="uk-link-reset destination-regions-link">
          {country.name}
        </a>
    </Link>
  )
}

const Regions = ({ destination }) => {
  const regions = destination.attributes.nav.regions;
  const countries = destination.attributes.nav.countries;
  
  if (regions.length == 0 && countries.length == 0) {
    return <></>
  }

  return (
    <div class="destination-regions">
      {regions.map((region, i) => {
        return (
          <RegionLink region={region} />
        )
      })}
      <div class="destination-region-separator" />
      {countries.map((country, i) => {
        return (
          <CountryLink country={country} />
        )
      })}
    </div>
  );
}

export default Regions