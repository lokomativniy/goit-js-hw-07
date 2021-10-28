import { galleryItems } from './gallery-items.js';

const imagesContainer = document.querySelector('.gallery')
const imagesMurkup = createGalleryItemsMurkup(galleryItems)
imagesContainer.insertAdjacentHTML('beforeend', imagesMurkup)
imagesContainer.addEventListener('click',onImagesContainer)
function onImagesContainer(evt){
  if (evt.target.classList.contains('gallery')) {
    return
  }
  console.log(evt.target)
}

// const content = document.createElement('div')

// const h1 = document.createElement('h1')
// const p = document.createElement('p')

// h1.textContent = 'Create element'
// p.textContent = 'Create elements dynamicly and use them in your lightbox.'

// content.appendChild(h1)
// content.appendChild(p)

// const instance = basicLightbox.create(content)

// document.querySelector('button.create').onclick = instance.show

// instance.show()
// const visible = basicLightbox.visible()


console.log(createGalleryItemsMurkup(galleryItems))
// const gallery = document.querySelector('galleryItems')
// console.log(gallery)
function createGalleryItemsMurkup(galleryItems) {
   return galleryItems.map(({ preview, original, description }) => {
      return `<div class="gallery__item">
      <a class="gallery__link" href="large-image.jpg"onclick="event.preventDefault()">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </div>`
   })
   .join('')
   
}




// const instance = basicLightbox.create(`
//     <div class="modal">

//     </div>
// `)

const  instance  =  basicLightbox . create ( ` 

`   )
instance.show()
// const instance = basicLightbox.create(`
//     <div class="modal">  </div>
// `)


console.log(galleryItems);
