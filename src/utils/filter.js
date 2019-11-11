import axios from 'axios';

const alphaSort = (arr) => arr.sort((a, b) => a.title.localeCompare(b.title));

const filter = {
  getAll: async () => {
    const res = await axios.get('https://hubspotwebteam.github.io/CodeExercise/src/js/data/data.json');
    return alphaSort(res.data.media);
  },
  genreList: media => {
    
  }
}

export default filter;