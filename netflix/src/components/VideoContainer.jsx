import React from 'react'
import VideoItem from "./VideoItem"

const VideoContainer = () => {
    return(
        <div>
            <VideoItem url="https://www.youtube.com/watch?v=Q8Tiz6INF7I" title="Hit the road Jack"/>   
            <VideoItem url="https://www.youtube.com/watch?v=Wr9ie2J2690" title="Deep Purple: Highway Star"/>      
            <VideoItem url="https://www.youtube.com/watch?v=jhK2ev_O-pc" title="Powerwolf:Demons are a girls best friend"/>
        </div>
    )
}
export default VideoContainer;
