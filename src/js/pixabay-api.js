import axios from 'axios';

// ⬇️ PASTE YOUR PIXABAY API KEY HERE
const API_KEY = '28034185-32b171efe234d6a5f1d0d21a7';

axios.defaults.baseURL = 'https://pixabay.com/api/';

export async function getImagesByQuery(query, page) {
  const response = await axios.get('', {
    params: {
      key: API_KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      per_page: 15,
      page: page,
    },
  });
  return response.data;
}
