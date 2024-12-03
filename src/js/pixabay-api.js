const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '47381624-f2c157926f525f6b292de8ebe';

export function getFetchImg(searchQuery) {
  const params = new URLSearchParams({
    key: API_KEY,
    q: searchQuery,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  return fetch(`${BASE_URL}?${params}`).then(response => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json();
  });
}
