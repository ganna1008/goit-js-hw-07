import { galleryItems } from './gallery-items.js';
// Change code below this line


const galleryContainer = document.querySelector('.gallery')
const galleryMarkup = createPhotoGalleryMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup)


function createPhotoGalleryMarkup(galleryItem) {
    return galleryItem.map(({ preview, original, description }) => {
        return `
        <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
 `;
    }).join('');
}


var lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: '250' });