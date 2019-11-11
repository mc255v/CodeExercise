import React, { useState, useEffect } from 'react';
import filter from '../utils/filter';
import MediaItem from './MediaItem';

const MediaList = () => {
  const [media, setMedia] = useState([]);

  useEffect(() => {
    filter.getAll().then(res => setMedia(res))
  }, [])

  return (
    <div className="container wrap">
      {media.map((item, index) => 
        <MediaItem key={index} item={item} />
      )}
    </div>
  );
}

export default MediaList;