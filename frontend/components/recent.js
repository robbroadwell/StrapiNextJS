import React from "react"
import Link from "next/link"

const RecentPrimaryCard = ({ post }) => {
    return (
        <Link href={`/posts/${post.attributes.slug}`}>
            <a className="uk-link-reset recent-primary-post-tile">
                <h1>{post.attributes.title}</h1>
            </a>
        </Link> 
    )
}

const RecentCard = ({ post }) => {
    return (
        <Link href={`/posts/${post.attributes.slug}`}>

            <a className="uk-link-reset recent-post-tile">
                <h1>{post.attributes.title}</h1>
            </a>
        </Link> 
    )
}

const Recent = ({ posts, title }) => {

    if (posts.length == 0) {
        return <></>
    }

    const primaryPost = posts.slice(0, 1)[0]
    const secondaryPosts = posts.slice(1, posts.length)

  return (
    <div className="recent-container">

        {title ? <h1 className="boom">{title}</h1> : <></>}

        <RecentPrimaryCard
            post={primaryPost}
            key={`${primaryPost.attributes.slug}`}
        />

        <div className="recent-inner-container">
            {secondaryPosts.map((post, i) => {
            return (
                <RecentCard post={post} />
            )
            })}
        </div>

    </div>
  )
}

export default Recent
