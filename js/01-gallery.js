import { galleryItems } from './gallery-items.js';


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

const gallaryNode = document.querySelector('.gallery');

const newGallery = galleryItems.map(element =>
  `<a class="gallery__item" href="${element.original}">
  <img class="gallery__image" src="${element.preview}" alt="${element.description}" />
</a>`).join('');

gallaryNode.insertAdjacentHTML('beforeend', newGallery);

// let gallery = new SimpleLightbox('.gallery a', {
//     captionsData: 'alt',
//     captionPosition: 'bottom',
//     captionDelay: 250,
// });

// const instance = basicLightbox.create(`
//     <div class="modal">
//         <p>A custom modal that has been styled independently. It's not part of basicLightbox, but perfectly shows its flexibility.</p>
       
//         <a>Close</a>
//     </div>
// `, {
//     onShow: (instance) => {
//         instance.element().querySelector('a').onclick = instance.close
//     }
// })

// instance.show()

// / const instance = basicLightbox.create(`
// //     <div class="modal">

// //     </div>
// // `)

// const  instance  =  basicLightbox . create ( ` 

// `   )
// instance.show()
// const instance = basicLightbox.create(`
//     <div class="modal">  </div>
// `)


console.log(galleryItems);
