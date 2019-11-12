import axios from 'axios';

const alphaSort = (arr) => arr.sort((a, b) => a.title.localeCompare(b.title));

const isChecked = (obj) => {
  return Object.keys(obj).filter(key => obj[key])
}

const filter = {
  getAll: async () => {
    const res = await axios.get('https://hubspotwebteam.github.io/CodeExercise/src/js/data/data.json');
    return alphaSort(res.data.media);
  },
  getGenreList: mediaList => {
    let arr = []
    mediaList.forEach(media => {
     arr = [...arr, ...media.genre] 
    });
    return arr.reduce((o, key) => ({ ...o, [key]: false}), {});
  },
  getYearList: mediaList => {
    let arr = []
    mediaList.forEach(media => {
     arr.push(media.year)
    });
    return arr.reduce((o, key) => ({ ...o, [key]: false}), {});
  },
  applyFilters: (media, criteria) => {
    const yearList = isChecked(criteria.year).length ? 
      year => isChecked(criteria.year).includes(year) : null;
    const genreList = isChecked(criteria.genre).length ?
      genres => genres.find(genre => isChecked(criteria.genre).includes(genre)) : null;
    const type = criteria.type ? type => type === criteria.type : criteria.type;
    const filters = {
      year: yearList,
      genre: genreList,
      type
    }
    const filterKeys = Object.keys(filters);
    return media.filter(item => {
      return filterKeys.every(key => {
        if (typeof filters[key] !== 'function') return true;
        return filters[key](item[key]);
      });
    });
  }
}

export default filter;