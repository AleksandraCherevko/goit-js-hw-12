import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { createMarkup } from './js/render-functions';
import { fetchRequest } from './js/pixabay-api';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import axios from 'axios';
import simpleLightbox from 'simplelightbox';

const searchForm = document.querySelector('.js-form');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
const btnLoader = document.querySelector('.load-button');
const loadMore = document.querySelector('.load-more');
const endLoad = document.querySelector('.end-load');

loader.style.display = 'none';
btnLoader.style.display = 'none';
loadMore.style.display = 'none';
endLoad.style.display = 'none';

const perPage = 40;
let inputSearch = '';

searchForm.addEventListener('submit', handleSubmit);
btnLoader.addEventListener('click', onLoadMore);

scrolling();

function handleSubmit(event) {
  event.preventDefault();

  gallery.innerHTML = '';
  loader.style.display = 'block';
  btnLoader.style.display = 'none';
  endLoad.style.display = 'none';

  inputValue = event.currentTarget.querySelector('.search-input').value.trim();

  // fetchRequest(inputValue)
  //   .then(data => {
  //     loader.style.display = 'none';
  if (!inputValue) {
    iziToast.error({
      title: 'Error',
      message:
        'Sorry, there are no images matching your search query. Please try again!',
    });
    loader.style.display = 'none';
    return;
  }

  getPictures(inputValue, currentPage)
    .then(({ data }) => {
      loader.style.display = 'none';
      const totalPages = Math.ceil(data.totalHits / perPage);

      if (currentPage === totalPages) {
        btnLoader.style.display = 'none';
        endLoad.style.display = 'block';
      } else {
        btnLoader.style.display = 'block';
      }

      if (!data.hits.length) {
        iziToast.error({
          title: 'Error',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });
        return;
      }

      gallery.insertAdjacentHTML('beforeend', createMarkup(data.hits));

      simpleLightbox = new simpleLightbox('.gallery a', {
        captions: true,
        captionsData: 'alt',
        captionDelay: 250,
      }).refresh();

      formSearch.reset();
    })
    .catch(err => {
      loader.style.display = 'none';
      console.log(err);
    });
}

function onLoadMore() {
  currentPage += 1;
  btnLoader.style.display = 'none';
  loadMore.style.display = 'block';
  endLoad.style.display = 'none';

  const getMorePhoto = () =>
    document.querySelector('.gallery-item').getBoundingClientRect();
  getPictures(inputValue, currentPage)
    .then(({ data }) => {
      gallery.insertAdjacentHTML('beforeend', createMarkup(data.hits));

      window,
        scrollBy({
          top: getHeightImgCard().height * 2,
          left: 0,
          behavior: 'smooth',
        });

      simpleLightbox.refresh;

      const totalPages = Math.ceil(data.totalHits / perPage);

      if (currentPage === totalPages) {
        iziToast.info({
          title: 'Cauting',
          message: `We're sorry, but you've reached the end of search results`,
        });

        btnLoader.style.display = 'none';
        loadMore.style.display = 'none';
        endLoad.style.display = 'block';

        return;
      }

      loadMore.style.display = 'none';
      btnLoader.style.display = 'block';
    })
    .catch(error => console.log(error));
}

function scrolling() {
  document.addEventListener('DOMContentLoaded', function () {
    const upButton = document.querySelector('.up-btn');

    upButton.addEventListener('click', function () {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });

      document.body.classList.add('scrolling');
    });

    window.addEventListener('scroll', function () {
      if (window.scrollY > 200) {
        upButton.classList.add('show');
      } else {
        upButton.classList.remove('show');
      }

      if (
        document.body.classList.contains('scrolling') &&
        window.scrollY === 0
      ) {
        document.body.classList.remove('scrolling');
      }
    });
  });
}
