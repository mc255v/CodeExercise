import axios from 'axios';

const alphaSort = (arr) => arr.sort((a, b) => a.title.localeCompare(b.title));

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
  }
}

export default filter;