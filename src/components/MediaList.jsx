import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { setMediaList, clearFilters } from '../redux/actions';
import filter from '../utils/filter';
import MediaItem from './MediaItem';
import NoResults from './NoResults';

const MediaList = () => {
  const filterResults = useSelector(state => state.filterResults)
  const dispatch = useDispatch()

  useEffect(() => {
    filter.getAll().then(res => {
      dispatch(setMediaList(res));
      dispatch(clearFilters())
    })
  }, [])

  return (
    <div className="container wrap">
      {filterResults.length ? filterResults.map((item, index) => 
        <MediaItem key={index} item={item} />)
      :
      <NoResults />
      }
    </div>
  );
}

export default MediaList;