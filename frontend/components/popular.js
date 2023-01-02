import React from "react"
import Card from "./card"
import Link from "next/link"

const PopularCard = ({ post }) => {
    return (
        <Link href={`/posts/${post.attributes.slug}`}>
            <a className="uk-link-reset">
                <div className="popular-post-tile">
                    <h1>{post.attributes.title}</h1>
                </div>
            </a>
        </Link>
    )
}

const Popular = ({ posts }) => {

    if (posts.length == 0) {
        return <></>
    }

    const length = Math.min(4, posts.length)
    const maxFour = posts.slice(0, length)

    return (
        <div className="popular-container">
            <h1 className="boom">Most Popular</h1>
            <div className="popular-inner-container">
                {maxFour.map((post, i) => {
                return (
                    <PopularCard post={post} />
                )
                })}
            </div>
        </div>
    )
}

export default Popular
