import React from "react"
import Link from "next/link"
import Affiliates from "./affiliates";

const Left = () => {
  return (
    <div className="uk-navbar-left">
      <ul className="uk-navbar-nav">
        <li>
          <Link href="/">
            <a>
              <h1 className="rb-logo">Mr. Overland</h1>
            </a>
          </Link>
        </li>
      </ul>
    </div>
  );
}

const Planning = ({ destination }) => {
  return (
    <ul class="uk-navbar-nav">
      <li>
        <button class="uk-button uk-button-default" type="button">
          Planning ▼
        </button>
        <div class="uk-dropbar uk-dropbar-top" uk-drop="mode: click; stretch: x; animation: reveal-top; animate-out: false; duration: 300">
          <div class="uk-child-width-expand@s uk-text-center">
              <Affiliates destination={destination} />
          </div>
        </div>
      </li>
    </ul>
  );
}

const Destinations = () => {
  return (
    <ul class="uk-navbar-nav">
    <div class="uk-inline">
        <button class="uk-button uk-button-default" type="button">Destinations ▼</button>
        <div class="uk-width-large" uk-dropdown="mode: click; animation: reveal-top; animate-out: false; duration: 300">
            <ul class="uk-nav uk-dropdown-nav">
            
              <ul class="uk-nav uk-dropdown-nav">
                <li key={0}>
                  <Link href={`/destinations/africa`}>
                    <a className="uk-link-reset">Africa</a>
                  </Link>
                </li>
                <li key={1}>
                  <Link href={`/destinations/south-america`}>
                    <a className="uk-link-reset">South America</a>
                  </Link>
                </li>
                <li key={2}>
                  <Link href={`/destinations/north-america`}>
                    <a className="uk-link-reset">North America</a>
                  </Link>
                </li>
                <li key={3}>
                  <Link href={`/destinations/asia`}>
                    <a className="uk-link-reset">Asia</a>
                  </Link>
                </li>
                <li key={4}>
                  <Link href={`/destinations/europe`}>
                    <a className="uk-link-reset">Europe</a>
                  </Link>
                </li>
                <li key={5}>
                  <Link href={`/destinations/oceania`}>
                    <a className="uk-link-reset">Oceania</a>
                  </Link>
                </li>
              </ul>
            
            </ul>
        </div>
    </div>
    </ul>
  );
}

const About = () => {
  return (
    <ul class="uk-navbar-nav">
    <div class="uk-inline">
        <button class="uk-button uk-button-default" type="button">About ▼</button>
        <div class="uk-width-large" uk-dropdown="mode: click; animation: reveal-top; animate-out: false; duration: 300">
            <ul class="uk-nav uk-dropdown-nav">
            
              <ul class="uk-nav uk-dropdown-nav">
                <li key={0}>
                  <Link href={`/destinations/africa`}>
                    <a className="uk-link-reset">About Me</a>
                  </Link>
                </li>
                <li key={1}>
                  <Link href={`/destinations/south-america`}>
                    <a className="uk-link-reset">Work with Me</a>
                  </Link>
                </li>
                <li key={2}>
                  <Link href={`/destinations/north-america`}>
                    <a className="uk-link-reset">Sign Up For My Newsletter</a>
                  </Link>
                </li>
                <li key={3}>
                  <Link href={`/destinations/asia`}>
                    <a className="uk-link-reset">Contact</a>
                  </Link>
                </li>
              </ul>
            
            </ul>
        </div>
    </div>
    </ul>
  );
}

const Shop = () => {
  return (
    <ul class="uk-navbar-nav">
    <div class="uk-inline">
        <button class="uk-button uk-button-default" type="button">Shop ▼</button>
        <div class="uk-width-large" uk-dropdown="mode: click; animation: reveal-top; animate-out: false; duration: 300">
            <ul class="uk-nav uk-dropdown-nav">
            
              <ul class="uk-nav uk-dropdown-nav">
                <li key={0}>
                  <Link href={`/destinations/africa`}>
                    <a className="uk-link-reset">Overlanding Gear Guide</a>
                  </Link>
                </li>
                <li key={1}>
                  <Link href={`/destinations/south-america`}>
                    <a className="uk-link-reset">Photo Presets</a>
                  </Link>
                </li>
                <li key={2}>
                  <Link href={`/destinations/north-america`}>
                    <a className="uk-link-reset">Travel Gear</a>
                  </Link>
                </li>
                <li key={3}>
                  <Link href={`/destinations/asia`}>
                    <a className="uk-link-reset">Apparel</a>
                  </Link>
                </li>
                <li key={4}>
                  <Link href={`/destinations/europe`}>
                    <a className="uk-link-reset">Holiday Gift Guide</a>
                  </Link>
                </li>
              </ul>
            
            </ul>
        </div>
    </div>
    </ul>
  );
}


const Center = ({ destination }) => {
  return (
    <div className="uk-navbar-center">

      <Planning destination={destination} />
      <Destinations />
      <About />

      <button class="uk-button uk-button-default" type="button">
        Video
      </button>

      <button class="uk-button uk-button-default" type="button">
        Photos
      </button>

      <button class="uk-button uk-button-default" type="button">
        Inspiration
      </button>
      
      <Shop />

    </div>
  );
}

const Right = () => {
  return (
    <div className="uk-navbar-right">
      <Link href="#" className="rb-subscribe">
        <h2 className="rb-subscribe">Subscribe</h2>
      </Link>
    </div>
  );
}

const Nav = ({ destination }) => {
  return (
    <div className="rb-absolute-nav" data-uk-sticky="start: 100vh; offset: 0;">
      <nav className="uk-navbar-container" data-uk-navbar>
        <Left />
        <Center destination={destination} />
        <Right />
      </nav>
    </div>
  )
}

export default Nav
