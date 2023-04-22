/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line import/extensions
import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const gallery = document.querySelector('.gallery');
const items = [];
galleryItems.forEach((element) => {
  const newGallery = document.createElement('li');
  newGallery.className = 'gallery__item';
  const galleryLink = document.createElement('a');
  galleryLink.className = 'gallery__link';
  galleryLink.href = element.original;
  const galleryImg = document.createElement('img');
  galleryImg.className = 'gallery__image';
  galleryImg.src = element.preview;
  galleryImg.setAttribute('data-source', element.original);
  galleryImg.alt = element.description;
  newGallery.append(galleryLink);
  galleryLink.append(galleryImg);
  items.push(newGallery);
});
gallery.append(...items);

gallery.addEventListener('click', (event) => {
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') {
    return;
  }
  const selectedImg = event.target.getAttribute('data-source');
  const instance = basicLightbox.create(
    // eslint-disable-next-line comma-dangle
    `<img src ='${selectedImg}' width='800' height = '600'>`
  );
  instance.show();
  gallery.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {
      instance.close();
    }
  });
});
