import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

export async function getPictures(name, page) {
  const API_KEY = '43242855-c6b7005837cbd7f2bbf3eb2ae';

  try {
    if (name.includes('')) {
      name.replace(/\s+/g, '+');
    }

    const response = await axios.get(`https://pixabay.com/api/`, {
      params: {
        key: API_KEY,
        q: name,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        page: page,
        per_page: perPage,
      },
    });
    return response;
  } catch {
    iziToast.error({
      title: 'Error',
      message:
        'Sorry, there are no images matching your search query. Please try again!',
    });
    console.log(error.message);
  }
}
