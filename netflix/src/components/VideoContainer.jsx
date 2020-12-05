import React, {useEffect, useState} from 'react'
import axios from "axios";
import VideoItem from "./VideoItem"

const VideoContainer = () => {
    const [data, setData] = useState([]);

    useEffect(async() => {
        const result = await axios(
            'http://localhost:5000/videos',
        );
        setData(result.data);
},[setData])

    return(
        <div>
        {data.map(video => (
            <div>
                <VideoItem title={video.title} id={video.id} url={video.url} />
            </div>
            ))}
        </div>
    );
}
export default VideoContainer;
