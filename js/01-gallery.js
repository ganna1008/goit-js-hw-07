import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery')
const galleryMarkup = createPhotoGalleryMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup)

galleryContainer.addEventListener('click', handleGalleryContainerClick)



function createPhotoGalleryMarkup(galleryItem) {
    return galleryItem.map(({ preview, original, description }) => {
        return `
<div class="gallery__item">
    <a class="gallery__link" href="${original}">
        <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="Image description"
        />
    </a>
</div> `;
    }).join('');
}

function handleGalleryContainerClick(event) {
    const targetEl = event.target;
    const galleryItemEl = targetEl.closest('.gallery__item');

    if (!galleryItemEl) {
        return;
    }
    if (targetEl.closest('.gallery__link')) {
        event.preventDefault()
    }

    const imgEL = galleryItemEl.querySelector('.gallery__image').dataset.source;
    openModalWindow(imgEL);
}

function openModalWindow(imgRef) {
    const instance = basicLightbox.create(`
    <img src="${imgRef}" width="1280" >
  `, {
        onClose: (instance) => { window.removeEventListener('keydown', handleEscKeyDown) }
    })
    instance.show()
    if (instance.visible()) {
        window.addEventListener('keydown', handleEscKeyDown)
    }


    function handleEscKeyDown(event) {
        if (event.code === "Escape") {
            window.removeEventListener('keydown', handleEscKeyDown)
            instance.close();
        }
    }

}