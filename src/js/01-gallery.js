// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
import "simplelightbox/dist/simple-lightbox.min.css";

console.log(galleryItems);

console.log(SimpleLightbox)

const gallery = document.querySelector('.gallery');

const imgHtml = galleryItems.map(img => {
  return `<li class="gallery__item">
    <a class="gallery__link" href="${img.original}">
      <img
        class="gallery__image"
        src="${img.preview}"
        data-source="${img.original}"
        alt="${img.description}"
      />
    </a>
  </li>`;
}).join('');

gallery.insertAdjacentHTML('afterbegin', imgHtml);
gallery.addEventListener('click', onGalleryClick);

function onGalleryClick(event) {
  event.preventDefault();
  if (event.target === event.currentTarget) {
    return;
  }
  const image = event.target;
  openModal(image.dataset.source);
}
    
function openModal(src) {
  const lightbox = new SimpleLightbox('.gallery a');
  lightbox.open();
}

console.log(galleryItems);