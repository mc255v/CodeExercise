export function setMediaList(mediaList) {
  return { type: "SET_MEDIA_LIST", mediaList }
}

export function setFilterResults(filterResults) {
  return { type: "SET_FILTER_RESULTS", filterResults }
}

export function setGenreList(genreList) {
  return { type: "SET_GENRE_LIST", genreList }
}

export function setYearList(yearList) {
  return { type: "SET_YEAR_LIST", yearList }
}

export function updateFilterList(update) {
  return update.type === "genre" ?
    { type: "UPDATE_GENRE_LIST", update}
    :
    { type: "UPDATE_YEAR_LIST", update}
}