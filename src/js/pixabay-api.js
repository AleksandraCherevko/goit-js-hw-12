import axios from 'axios';

export async function fetchRequest(name) {
  const BASE_URL = 'https://pixabay.com/api/';
  const API_KEY = '43242855-c6b7005837cbd7f2bbf3eb2ae';

  const searchParams = new URLSearchParams({
    key: API_KEY,
    q: name,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  try {
    const response = await axios.get(`${BASE_URL}?${searchParams}`);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
}
