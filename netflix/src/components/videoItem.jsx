import React from 'react'
import ReactPlayer from "react-player"

export default function videoItem() {
    return (
        <div>
        <ReactPlayer
            controls
            url="https://www.youtube.com/watch?v=Q8Tiz6INF7I"
        />
      </div>
    )
}
