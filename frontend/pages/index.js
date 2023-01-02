import React from "react"
import Footer from "../components/footer"
import Layout from "../components/layout"
import Popular from "../components/popular"
import Recent from "../components/recent"
import Seo from "../components/seo"
import Videos from "../components/videos"
import { fetchAPI } from "../lib/api"

const Home = ({ posts, videos, homepage }) => {
  return (
    <Layout>
      <Seo seo={homepage.attributes.seo} />
      <Hero />
      <Regions />
      <Discover />
      <Videos videos={videos} title={"MY STORY"} />
      <Popular posts={posts} />
      <Recent posts={posts} title={"RECENT POSTS"} />
      <Footer />

    </Layout>
  )
}

const Hero = () => {
  return (
    <div class="home-hero">
      <h1>Welcome</h1>
    </div>
  );
}

const Regions = () => {
  return (
    <div class="regions">
      <h1>Where do you want to go</h1>
    </div>
  );
}

const Discover = () => {
  return (
    <div class="discover">
      <h1>Discover the world</h1>
    </div>
  );
}

export async function getStaticProps() {
  // Run API calls in parallel
  const [postsRes, videosRes, homepageRes] = await Promise.all([
    fetchAPI("/posts", { populate: "*" }),
    fetchAPI("/videos", { populate: "*" }),
    fetchAPI("/homepage", {
      populate: {
        hero: "*",
        seo: { populate: "*" },
      },
    }),
  ])

  return {
    props: {
      posts: postsRes.data,
      videos: videosRes.data,
      homepage: homepageRes.data,
    },
    revalidate: 1,
  }
}

export default Home
