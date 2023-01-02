import React from "react"
import Card from "./card"

const VideoCard = ({ video }) => {
    return (
        <div className="primary-video-tile">
            <h1>{video.attributes.title}</h1>
        </div>
    )
}

const Videos = ({ videos, title }) => {

    if (videos.length == 0) {
        return <></>
    }

    const primaryVideo = videos.slice(0, 1)[0]
    const secondaryVideos = videos.slice(1, videos.length)

    // console.log(primaryVideo)
    // console.log(secondaryVideos)

  return (
    <div className="videos">
        <div className="videos-container">
            
            {title ? <h1 className="boom">{title}</h1> : <></>}

            <VideoCard
                video={primaryVideo}
                key={`${primaryVideo.attributes.slug}`}
            />

            <div className="secondary-video-container">
                {secondaryVideos.map((video, i) => {
                return (
                    <div className="secondary-video-tile">
                        <h1>{video.attributes.title}</h1>
                    </div>
                )
                })}
            </div>
        </div>
    </div>
  )
}

export default Videos
