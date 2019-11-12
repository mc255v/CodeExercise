import filter from '../utils/filter';

const initialState = {
  mediaList: [],
  filterResults: [],
  genreList: {},
  yearList: {},
  type: null
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case "SET_MEDIA_LIST":
      return {
        ...state,
        mediaList: action.mediaList
      };
    case "SET_FILTER_RESULTS":
        return {
          ...state,
          filterResults: action.filterResults
        };
    case "SET_GENRE_LIST":
      return {
        ...state,
        genreList: action.genreList
      }
    case "SET_YEAR_LIST":
      return {
        ...state,
        yearList: action.yearList
      }
    case "SET_TYPE":
      return {
        ...state,
        type: action.value
      }
    case "UPDATE_GENRE_LIST":
      return {
        ...state,
        genreList: {...state.genreList, [action.update.key]: action.update.value}
      }
    case "UPDATE_YEAR_LIST":
      return {
        ...state,
        yearList: {...state.yearList, [action.update.key]: action.update.value}
      }
    case "APPLY_FILTERS":
      const criteria = {
        year: state.yearList,
        genre: state.genreList,
        type: state.type
      }
      const results = filter.applyFilters(state.mediaList, criteria)
      return {
        ...state,
        filterResults: results
      }
    case "CLEAR_FILTERS":
      const media = [...state.mediaList]
      return {
        ...state,
        filterResults: media,
        genreList: filter.getGenreList(media),
        yearList: filter.getYearList(media),
        type: null
      }
    default:
      return state;
  }
}

export default reducer;