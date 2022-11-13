import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');


const createGallery = galleryItems
  .map(({ preview, original, description }) => {
    return `<a class="gallery__item" href="${original}">
    <img class="gallery__image"
     src="${preview}"
    alt="${description}" />
  </a>`;
  })
  .join('');

  galleryContainer.insertAdjacentHTML('beforeend', createGallery);

  var lightbox = new SimpleLightbox('.gallery a', { 

    captionsData: `alt`, 
    captionPosition:'bottom', 
    captionDelay: 500, 
    animationSpeed: 5
    



});