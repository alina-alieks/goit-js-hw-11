//функція для HTTP запитів

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import iconError from "../img/icon-error.svg";

const form = document.querySelector(".form")


console.log(form.imput.image.value)
// form.addEventListener("submit", getImagesFromPixabay)

const baseUrl = "https://pixabay.com/api/";
const key = "42527705-4e95d3f46fcc8571248d3eb24";

function getImagesFromPixabay(event) {
  event.preventDefault();
  const input = event.currentTarget.elements.image.value.trim();
  const inputSearch = input.split(" ").join("+")
  const url = `${baseUrl}?key=${key}&q=${inputSearch}&image_type=photo&orientation=horizontal&safesearch=true`
  getDataImages(url);
  form.reset()
  return url
}

function getDataImages(url) {
  const showErrorMessage = () => iziToast.error({
          message: 'Sorry, there are no images matching your search query. Please try again!',
          iconUrl: iconError,
          position: "topRight",
          backgroundColor: "#ef4040",
          theme: "dark",
          transitionIn: "fadeInRight",
  })
  
  fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error("Error")
        }
          return response.json()
      })
      .then((data) => { 
        if (data.hits.length !== 0) {
          console.log(data.hits)
          getGallery(data)
        } else (
          showErrorMessage()
        )
      })
      .catch(error => error.message)
}

const gallery = document.querySelector(".gallery");

function getGallery(data) {
  console.log(data)
  let createGallery = "";
  data.hits.map(({ webformatURL, tags, likes, views, comments, downloads }) => {
          return createGallery += `<li class="gallery-item">
          <img class="gallery-item-images" src="${webformatURL}" alt="${tags}" />
          <ul class="gallery-item-info">
            <li class="item-info">
              <p class="item-info-name">Likes</p>
              <p class="item-info-value">${likes}</p>
            </li>
            <li class="item-info">
              <p class="item-info-name">Views</p>
              <p class="item-info-value">${views}</p>
            </li>
            <li class="item-info">
              <p class="item-info-name">Comments</p>
              <p class="item-info-value">${comments}</p>
            </li>
            <li class="item-info">
              <p class="item-info-name">Downloads</p>
              <p class="item-info-value">${downloads}</p>
            </li>
          </ul>
        </li>`
    }).join("");
    gallery.innerHTML = createGallery;
}


export {getImagesFromPixabay}