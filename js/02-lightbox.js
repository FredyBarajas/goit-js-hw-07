import { galleryItems } from "./gallery-items.js";

console.log(galleryItems);

lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 300,
});
