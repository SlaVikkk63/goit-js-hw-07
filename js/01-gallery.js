import { galleryItems } from './gallery-items.js';
    
console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');


const createGallery = galleryItems
  .map(({ preview, original, description }) => {
    return `<div class="gallery__item">
      <a class="gallery__link" href="large-image.jpg">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </div>`;
  })
  .join('');

  galleryContainer.insertAdjacentHTML('beforeend', createGallery);


  function imageClick(evt) {
    evt.preventDefault();
    const image = evt.target.classList.contains(`gallery__image`);
    if (!image) {
      return;
    }

    const instance = basicLightbox.create(`
        <img src="${evt.target.dataset.source}" width="800" height="600">
    `)
    
    instance.show()

    document.addEventListener(`keydown`, e =>{

      if (e.code === `Escape`) {

        instance.close()

      }

      })

  }

  galleryContainer.addEventListener (`click`, imageClick)


// galleryContainer.addEventListener (`click`, (e) =>{

// e.preventDefault()

// const image = e.target.className === `gallery__image`

// console.dir(image)

// if (!image) {
//       return;
//     }

//     const instance = basicLightbox.create(`
//         <img src="${e.target.dataset.source}" width="800" height="600">
//     `)
    
//     instance.show()

// })




