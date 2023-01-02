import React from "react"
import Link from "next/link"
import NextImage from "./image"

const GenericAffiliates = () => {
  return (
    <div class="affiliates">
      <div class="affiliates-container">
        <div class="affiliates-tile">
          <a href={"https://www.genericflights.com"}>Find Cheap Flights</a>
        </div>
        <div class="affiliates-tile">
          <a href={"https://www.generichotels.com"}>Find Hotels</a>
        </div>
        <div class="affiliates-tile">
          <a href={"https://www.generichostels.com"}>Find Hostels</a>
        </div>
        <div class="affiliates-tile">
          <a href={"https://www.generictrains.com"}>Find Trains</a>
        </div>
        <div class="affiliates-tile">
          <a href={"https://www.genericcar.com"}>Rent a Car</a>
        </div>
        <div class="affiliates-tile">
          <a href={"https://www.genericdo.com"}>Find Things to Do</a>
        </div>
        <div class="affiliates-tile">
          <a href={"https://www.generictickets.com"}>Find Ticket Deals</a>
        </div>
        <div class="affiliates-tile">
          <a href={"https://www.genericinsurance.com"}>Get Travel Insurance</a>
        </div>

      </div>
    </div>
  );
}

const Affiliates = ({ destination }) => {
  if (destination == undefined) {
    return <GenericAffiliates />
  }

  const affiliates = destination.attributes.affiliates;
  
  if (affiliates.length == 0) {
    return <GenericAffiliates />
  }

    return (
      <div class="affiliates">
        <div class="affiliates-container">
          <div class="affiliates-tile">
            <a href={affiliates.flights}>Find Cheap Flights in {destination.attributes.name}</a>
          </div>
          <div class="affiliates-tile">
            <a href={affiliates.hotels}>Find Hotels in {destination.attributes.name}</a>
          </div>
          <div class="affiliates-tile">
            <a href={affiliates.hostels}>Find Hostels in {destination.attributes.name}</a>
          </div>
          <div class="affiliates-tile">
            <a href={affiliates.trains}>Find Trains in {destination.attributes.name}</a>
          </div>
          <div class="affiliates-tile">
            <a href={affiliates.car}>Rent a Car in {destination.attributes.name}</a>
          </div>
          <div class="affiliates-tile">
            <a href={affiliates.do}>Find Things to Do in {destination.attributes.name}</a>
          </div>
          <div class="affiliates-tile">
            <a href={affiliates.tickets}>Find Ticket Deals in {destination.attributes.name}</a>
          </div>
          <div class="affiliates-tile">
            <a href={affiliates.insurance}>Find Travel Insurance in {destination.attributes.name}</a>
          </div>

        </div>
      </div>
    );
}

export default Affiliates