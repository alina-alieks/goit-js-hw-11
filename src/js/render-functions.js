// Імпорт бібліотеки SimpleLightbox - відображення модалки фото
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
//Імпорт функцій з "./pixabay-api"
import { getApiRequest, getResponse, showErrorMessage, showLoader } from "./pixabay-api";


const form = document.querySelector(".form");
const gallery = document.querySelector(".gallery");


//Функція до слухача події до кнопки - відправка запиту та відповідь
function getImagesFromPixabay(event) {
    event.preventDefault();
    gallery.innerHTML = "";
    const input = event.currentTarget.elements.image.value.trim();
    const inputSearch = input.split(" ").join("+");
    const url = getApiRequest(inputSearch);
    const datas = getResponse(url);
    // console.log(datas)
    if (datas) { 
        datas.then(data => {
            showLoader();
            if (data.hits.length !== 0) {
                // console.log(data.hits)
                markup(data);
            } else (
                showErrorMessage()
            )
        })}
    form.reset()
}
form.addEventListener("submit", getImagesFromPixabay)





//Вікористання бібліотеки
const lightbox = new SimpleLightbox('.gallery a', { captionsData: "alt", captionDelay: 250 } );

//Додавання HTML коду списку галереї
function markup(data) {
//   console.log(data)
let createGallery = "";
data.hits.map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => {
    return createGallery += `<li class="gallery-item">
        <a href="${largeImageURL}"><img class="gallery-item-images" src="${webformatURL}" alt="${tags}" /></a>
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
    //Оновлення метод refresh() для даних Ajax Calls або після DOM-маніпуляцій 
    lightbox.refresh();
    //Стилі бібліотеки simplelightbox
    lightbox.on('shown.simplelightbox', function () {
    const overlay = document.querySelector(".sl-overlay");
    const btnClose = document.querySelector(".sl-close ");
    const counter = document.querySelector(".sl-counter");
    const btnArrow = document.querySelectorAll(".sl-navigation button");
    const overlayImage = document.querySelector(".sl-caption");

    overlay.style.backgroundColor = "rgb(46, 47, 66)";
    btnClose.style.color = "#ffffff";
    btnClose.style.fontSize = "2rem";
    counter.style.color = "#ffffff";
    btnArrow.forEach(item => item.style.color = "#ffffff");
    overlayImage.style.backgroundColor = "rgba(46, 47, 66, 0.80)";
    });
}

