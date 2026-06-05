import axios from 'axios';

const API_KEY = '28034185-32b171efe234d6a5f1d0d21a7';

axios.defaults.baseURL = 'https://pixabay.com/api/';

export function getImagesByQuery(query) {
  return axios
    .get('', {
      params: {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
      },
    })
    .then(response => response.data);
}
