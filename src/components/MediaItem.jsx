import React from 'react';
import '../styles/MediaItem.css';

const MediaItem = ({item}) => {
  return (
    <div className="container col">
      <img className="media-img" src={item.poster} alt={item.title}/>
      <p>{item.title}</p>
      <p>Genres: {item.genre}</p>
    </div>
  );
}

export default MediaItem;