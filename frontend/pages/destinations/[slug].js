import { fetchAPI } from "../../lib/api"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import Videos from "../../components/videos"
import Recent from "../../components/recent"
import Other from "../../components/other"
import Footer from "../../components/footer"
import Regions from "../../components/regions"
import Affiliates from "../../components/affiliates"

const Hero = ({ destination }) => {
  return (
    <div class="destination-hero">
      <div class="destination-hero-container">
        <h1>{destination.attributes.name}</h1>
      </div>
    </div>
  );
}

const Destination = ({ others, posts, photos, videos, destination }) => {

  console.log(others)
  console.log(posts)
  console.log(photos)
  console.log(videos)
  console.log(destination)
  
  const seo = {
    metaTitle: destination.attributes.name,
    metaDescription: `All ${destination.attributes.name} articles`,
  }

  return (
    <Layout destination={destination}>
      <Seo seo={seo} />
      <Hero destination={destination} />
      <Regions destination={destination} />
      <Affiliates destination={destination} />
      <Recent posts={posts} />
      <Videos videos={videos} title={"Videos"} />
      <Other others={others} />
      <Footer />
    </Layout>
  )
}

export async function getStaticPaths() {
  const destinationRes = await fetchAPI("/destinations", { fields: ["slug"] })

  return {
    paths: destinationRes.data.map((destination) => ({
      params: {
        slug: destination.attributes.slug,
      },
    })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  // Run API calls in parallel
  const [othersRes, postsRes, photosRes, videosRes, destinationRes] = await Promise.all([
    fetchAPI("/others", { populate: "*" }),
    fetchAPI("/posts", {
      filters: {
        destinations: {
          slug: {
            $contains: params.slug
          }
        }
      },
      populate: "*",
    }),
    fetchAPI("/photos", {
      filters: {
        destinations: {
          slug: {
            $contains: params.slug
          }
        }
      },
      populate: "*",
    }),
    fetchAPI("/videos", {
      filters: {
        destinations: {
          slug: {
            $contains: params.slug
          }
        }
      },
      populate: "*",
    }),
    fetchAPI("/destinations", {
      filters: {
        slug: params.slug,
      },
      populate: "*",
    })
  ])

  return {
    props: {
      others: othersRes.data,
      posts: postsRes.data,
      photos: photosRes.data,
      videos: videosRes.data,
      destination: destinationRes.data[0],
    },
    revalidate: 1,
  }
}

export default Destination
