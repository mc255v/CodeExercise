const initialState = {
  mediaList: [],
  filterResults: [],
  genreList: {},
  yearList: {}
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
    default:
      return state;
  }
}

export default reducer;