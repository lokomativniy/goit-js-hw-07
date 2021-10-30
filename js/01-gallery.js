import { galleryItems } from "./gallery-items.js";

// const imagesContainer = document.querySelector('.gallery')
// const imagesMurkup = createGalleryItemsMurkup(galleryItems)
// imagesContainer.insertAdjacentHTML('beforeend', imagesMurkup)
// imagesContainer.addEventListener('click',onImagesContainer)
// function onImagesContainer(evt){
//   if (evt.target.classList.contains('gallery')) {
//     return
//   }
//   console.log(evt.target)
// }

// console.log(createGalleryItemsMurkup(galleryItems))
// const gallery = document.querySelector('galleryItems')
// console.log(gallery)
// function createGalleryItemsMurkup(galleryItems) {
//    return galleryItems.map(({ preview, original, description }) => {
//       return `<div class="gallery__item">
//       <a class="gallery__link" href="large-image.jpg"onclick="event.preventDefault()">
//         <img
//           class="gallery__image"
//           src="${preview}"
//           data-source="${original}"
//           alt="${description}"
//         />
//       </a>
//     </div>`
//    })
//    .join('')

// }

const gallaryNode = document.querySelector(".gallery");

const newGallery = galleryItems
  .map(
    (element) =>
      `<a class="gallery__item" href="${element.original}" data-lightbox = "mygallery">
  <img class="gallery__image" src="${element.preview}" alt="${element.description}" />
</a>`
  )
  .join("");
gallaryNode.insertAdjacentHTML("beforeend", newGallery);

console.log(galleryItems);
