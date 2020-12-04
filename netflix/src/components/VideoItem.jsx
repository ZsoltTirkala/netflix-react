import React from 'react'
import ReactPlayer from "react-player"
import { Link } from "react-router-dom";

const VideoItem = (props) => {
    return(
        <div>
            <Link to={`/details/${props.id}`}>
                <h2>{props.title}</h2> 
            </Link>
             
            <ReactPlayer
            controls
            url={props.url}
            />
        </div>
    )
}
export default VideoItem;
