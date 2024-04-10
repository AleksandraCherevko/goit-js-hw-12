import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { createMarkup } from './js/render-functions';
import { fetchRequest } from './js/pixabay-api';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import axios from 'axios';

const searchForm = document.querySelector('.js-form');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
loader.style.display = 'none';

searchForm.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  gallery.innerHTML = '';

  const inputValue = event.currentTarget.querySelector('.search-input').value;

  fetchRequest(inputValue)
    .then(data => {
      loader.style.display = 'none';
      if (!data.hits.length) {
        iziToast.error({
          title: 'Error',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });
      }

      return data;
    })

    .then(data => {
      gallery.innerHTML = ('beforeend', createMarkup(data.hits));

      const lightbox = new SimpleLightbox('.gallery a', {
        captions: true,
        captionsData: 'alt',
        captionDelay: 250,
      });

      lightbox.refresh();
      searchForm.reset();
    })

    .catch(error => {
      loader.style.display = 'none';
      iziToast.error({
        title: 'Error',
        message:
          'Sorry, there are no images matching your search query. Please try again!',
      });
    });
}

// new function - пагинация
const fetchPostsBtn = document.querySelector('.load-button');
let page = 1;
let limit = 15;

fetchPostsBtn.addEventListener('click', async () => {
  try {
    const gallery = await fetchRequest();
    createMarkup(arr);
    page += 1;

    if (page > 1) {
      fetchPostsBtn.textContent = 'blablabla';
    }
  } catch (error) {
    console.log(error);
  }
});
// const totalPages = Math.ceil(100 / limit);

// fetchPostsBtn.addEventListener('click', async () => {
//   if (page > totalPages) {
//     return iziToast.error({
//       title: 'Error',
//       message: "We're sorry, but you've reached the end of search results",
//     });
//   }
//   try {
//     const post = await fetchRequest();
//     createMarkup(arr);
//     page += 1;

//     if (page > 1) {
//       fetchPostsBtn.textContent = 'Load more';
//       // fetchPostsBtn.style.display = 'block';
//     }
//   } catch (error) {
//     console.log(error);
//   }
// });
