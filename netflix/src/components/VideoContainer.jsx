import React from 'react'
import VideoItem from "./VideoItem"

const VideoContainer = () => {
    return(
        <div>
            <VideoItem url="https://www.youtube.com/watch?v=Q8Tiz6INF7I" title="Hit the road Jack" id="1"/>   
            <VideoItem url="https://www.youtube.com/watch?v=Wr9ie2J2690" title="Deep Purple: Highway Star" id="2"/>      
            <VideoItem url="https://www.youtube.com/watch?v=jhK2ev_O-pc" title="Powerwolf:Demons are a girls best friend" id="3"/>
        </div>
    )
}
export default VideoContainer;
