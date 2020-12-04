import React from 'react'
import VideoItem from "./VideoItem"

const VideoContainer = () => {
    return(
        <div>
            <VideoItem url={"https://www.youtube.com/watch?v=Q8Tiz6INF7I"}/>   
            <VideoItem url={"https://www.youtube.com/watch?v=Wr9ie2J2690&ab_channel=JanPlexy"}/>      
            <VideoItem url={"https://www.youtube.com/watch?v=jhK2ev_O-pc&ab_channel=NapalmRecords"}/>
        </div>
    )
}
export default VideoContainer;
