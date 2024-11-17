import React from 'react'
import './Video.css'
import PlayVideo from '../../Component/PlayVideo/PlayVideo'
import Recommeded from '../../Component/Recommeded/Recommeded'
import { useParams } from 'react-router-dom'

const Video = () => {
  const {videoId, categoryId} = useParams();

  return (
    <div className="play-container">
<PlayVideo videoId={videoId}/>
<Recommeded />
    </div>
  )
}

export default Video