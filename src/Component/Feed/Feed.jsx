import React, { useEffect, useState } from "react";
import "./Feed.css";
import { Link } from "react-router-dom";
import { API_KEY, value_converter } from "../../data";
import moment from "moment";

const Feed = ({ category }) => {
  const [data, setData] = useState([]);

  const fetch_data = async () => {
    const fetch_url = `https://youtube.googleapis.com/youtube/v3/videos?
part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50
&regionCode=US&videoCategoryId=${category}&key=${API_KEY}`;
    await fetch(fetch_url)
      .then((response) => response.json())
      .then((data) => setData(data.items));
  };
  useEffect(() => {
    fetch_data();
  }, [category]);
  return (
    <div className="feed">
      {data.map((item, i) => (
        <Link key={i} to={`/video/${item.snippet.categoryId}/${item.id}`} className="cards">
          <img src={item.snippet.thumbnails.medium.url} alt="" />
          <h2>{item.snippet.title}</h2>
          <h3>{item.snippet.channelTitle}</h3>
          <p>{value_converter(item.statistics.viewCount)} &bull; {moment(item.snippet.publishedAt).fromNow()}</p>
        </Link>
      ))}
    </div>
  );
};

export default Feed;
