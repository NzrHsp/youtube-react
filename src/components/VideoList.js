import React from "react";

import VideoItem from "./VideoItem";

const VideoList = ({ videos, onSelect }) => {
  const videoItems = videos.map((el) => (
    <VideoItem key={el.id.videoId} video={el} onVideoSelect={onSelect} />
  ));
  return <div className="ui relaxed divided list">{videoItems}</div>;
};

export default VideoList;
