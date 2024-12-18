const images = [
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    description: 'Aerial Beach View',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    description: 'Flower Blooms',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    description: 'Alpine Mountains',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
    description: 'Mountain Lake Sailing',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    description: 'Alpine Spring Meadows',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    description: 'Nature Landscape',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    description: 'Lighthouse Coast Sea',
  },
];

const gallery = document.querySelector('.gallery');
gallery.insertAdjacentHTML('beforeend', createMarkup(images));

function createMarkup(arr) {
  return arr
    .map(
      ({ original, preview, description }) =>
        `<li class="gallery-item">
  <a class="gallery-link" href="${original}">
  <img class="gallery-image"
  src="${preview}"
  alt="${description}"/>
  </a>
  </li>`
    )
    .join('');
}

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  closeText:
    '<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.29208 9.29199C9.38497 9.19886 9.49532 9.12497 9.61681 9.07456C9.7383 9.02415 9.86854 8.9982 10.0001 8.9982C10.1316 8.9982 10.2619 9.02415 10.3833 9.07456C10.5048 9.12497 10.6152 9.19886 10.7081 9.29199L16.0001 14.586L21.2921 9.29199C21.3851 9.19901 21.4954 9.12526 21.6169 9.07494C21.7384 9.02462 21.8686 8.99872 22.0001 8.99872C22.1316 8.99872 22.2618 9.02462 22.3832 9.07494C22.5047 9.12526 22.6151 9.19901 22.7081 9.29199C22.8011 9.38496 22.8748 9.49534 22.9251 9.61682C22.9754 9.7383 23.0013 9.8685 23.0013 9.99999C23.0013 10.1315 22.9754 10.2617 22.9251 10.3832C22.8748 10.5046 22.8011 10.615 22.7081 10.708L17.4141 16L22.7081 21.292C22.8011 21.385 22.8748 21.4953 22.9251 21.6168C22.9754 21.7383 23.0013 21.8685 23.0013 22C23.0013 22.1315 22.9754 22.2617 22.9251 22.3832C22.8748 22.5046 22.8011 22.615 22.7081 22.708C22.6151 22.801 22.5047 22.8747 22.3832 22.925C22.2618 22.9754 22.1316 23.0012 22.0001 23.0012C21.8686 23.0012 21.7384 22.9754 21.6169 22.925C21.4954 22.8747 21.3851 22.801 21.2921 22.708L16.0001 17.414L10.7081 22.708C10.6151 22.801 10.5047 22.8747 10.3832 22.925C10.2618 22.9754 10.1316 23.0012 10.0001 23.0012C9.86859 23.0012 9.73839 22.9754 9.61691 22.925C9.49543 22.8747 9.38505 22.801 9.29208 22.708C9.1991 22.615 9.12535 22.5046 9.07503 22.3832C9.02471 22.2617 8.99881 22.1315 8.99881 22C8.99881 21.8685 9.02471 21.7383 9.07503 21.6168C9.12535 21.4953 9.1991 21.385 9.29208 21.292L14.5861 16L9.29208 10.708C9.19895 10.6151 9.12507 10.5047 9.07465 10.3833C9.02424 10.2618 8.99829 10.1315 8.99829 9.99999C8.99829 9.86845 9.02424 9.73821 9.07465 9.61672C9.12507 9.49523 9.19895 9.38488 9.29208 9.29199Z" fill="white" /></svg>',
});
lightbox.oxn('show.simplelightbox');
