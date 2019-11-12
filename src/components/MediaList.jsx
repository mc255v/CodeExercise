import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { setMediaList, setGenreList, setFilterResults, setYearList } from '../redux/actions';
import filter from '../utils/filter';
import MediaItem from './MediaItem';

const MediaList = () => {
  const filterResults = useSelector(state => state.filterResults)
  const dispatch = useDispatch()

  useEffect(() => {
    filter.getAll().then(res => {
      dispatch(setMediaList(res));
      dispatch(setFilterResults(res));
      dispatch(setGenreList(filter.getGenreList(res)));
      dispatch(setYearList(filter.getYearList(res)));
    })
  }, [])

  return (
    <div className="container wrap">
      {filterResults.map((item, index) => 
        <MediaItem key={index} item={item} />
      )}
    </div>
  );
}

export default MediaList;