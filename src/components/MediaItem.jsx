import React from 'react';
import '../styles/MediaItem.css';

const MediaItem = ({item}) => {
  return (
    <div className="container col media-item">
      <img className="media-img" src={item.poster} alt={item.title}/>
      <p>{item.title} ({item.year})</p>
      <p>Genres: {item.genre.join(", ")}</p>
    </div>
  );
}

export default MediaItem;