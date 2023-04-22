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
  galleryImg.setAttribute('title', element.description);
  galleryImg.alt = element.description;
  newGallery.append(galleryLink);
  galleryLink.append(galleryImg);
  items.push(newGallery);
});
gallery.append(...items);

// eslint-disable-next-line no-new, no-undef
new SimpleLightbox('.gallery a', {
  captionDelay: 250,
});
