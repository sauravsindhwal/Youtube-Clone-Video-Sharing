import React, { useEffect, useState } from 'react';
import './PlayVideo.css';
import like from '../../assets/like.png';
import dislike from '../../assets/dislike.png';
import share from '../../assets/share.png';
import save from '../../assets/save.png';
import jack from '../../assets/jack.png';
import user_profile from '../../assets/user_profile.jpg';
import { API_KEY, value_converter } from '../../data';
import moment from 'moment';

const PlayVideo = ({ videoId }) => {
  const [apiData, setApiData] = useState(null);
  const [channelData, setChannelData] = useState(null);

  const fetchId_list = async () => {
    const videoId_list = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`;

    try {
      const response = await fetch(videoId_list);
      const data = await response.json();
      setApiData(data.items[0]);
    } catch (error) {
      console.error('Error fetching video data:', error);
    }
  };

  const fetchID_Url = async()=>{
    const Channel_Data= `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData.snippet.channelId}&key=${API_KEY}`
  await fetch(Channel_Data).then(res=>res.json()).then(data=>setChannelData(data.items[0]))
  }
  useEffect(() => {
    if (videoId && API_KEY) {
      fetchId_list();
    }
  }, [videoId, API_KEY]);

  useEffect(()=>{
    fetchID_Url()
  },[apiData])

  if (!apiData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="play-video">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>

      <h3>{apiData.snippet.title}</h3>
      <div className="play-video-info">
        <p>{value_converter(apiData.statistics.viewCount)} Views &bull; {apiData?moment(apiData.snippet.publishedAt).fromNow():''}</p>
        <div>
          <span><img src={like} alt="like" />{value_converter(apiData?apiData.statistics.likeCount: '16k')}</span>
          <span><img src={dislike} alt="dislike" /> </span>
          <span><img src={share} alt="share" />Share</span>
          <span><img src={save} alt="save" />Save</span>
        </div>
      </div>
      <hr />
      <div className="publisher">
        <img src={channelData?channelData.snippet.thumbnails.default.url:''} alt="publisher" />
        <div>
          <p>{apiData?apiData.snippet.channelTitle:''}</p>
          <span>{channelData?value_converter(channelData.statistics.subscriberCount):''} Subscribers</span>
        </div>
        <button>Subscribe</button>
      </div>
      <div className="video-desc">
 <p>{apiData?apiData.snippet.description.slice(0,270):'Description Here'}</p>
        <hr />
        <h4>{apiData?value_converter(apiData.statistics.commentCount):'105'} Comments</h4>
        <div className="comment-sec">
          <img src={user_profile} alt="user profile" />
          <div>
            <h3>Jack Nicholas <span>1 day ago</span></h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi dolor excepturi aut delectus tempore facere quidem libero quia veniam quod natus ad, voluptatem, optio laudantium ipsum consequatur ab nam nostrum?</p>
            <div className="comment-acn">
              <img src={like} alt="like" />
              <span>199</span>
              <img src={dislike} alt="dislike" />
            </div>
          </div>
        </div>
        {/* Repeat for other comments */}
      </div>
    </div>
  );
};

export default PlayVideo;
