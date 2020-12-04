import React from 'react'
import ReactPlayer from "react-player"

const VideoItem = (props) => {
    return(
        <div>
            <p>{props.title}</p>
            <ReactPlayer
            controls
            url={props.url}
            />
        </div>
    )
}
export default VideoItem;
