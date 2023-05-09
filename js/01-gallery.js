import { galleryItems } from "./gallery-items.js";

console.log(galleryItems);

const gallery = document.querySelector(".gallery");

gallery.addEventListener("click", emergent);

function emergent(event) {
  if (event.target.nodeName !== "IMG") {
    return;
  }
  let srcImage = event.target.src;
  basicLightbox
    .create(
      `
				<img width="1400" height="900" src="${srcImage}">
			`
    )
    .show();
}
