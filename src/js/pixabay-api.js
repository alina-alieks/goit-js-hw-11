//Імпорт iziToast для відображення повідомлення
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import iconError from "../img/icon-error.svg";

//Використання iziToast
const showErrorMessage = () => iziToast.error({
    message: 'Sorry, there are no images matching your search query. Please try again!',
    iconUrl: iconError,
    position: "topRight",
    backgroundColor: "#ef4040",
    theme: "dark",
    transitionIn: "fadeInRight",
})


const form = document.querySelector(".form")
const loader = document.querySelector(".loader")

const baseUrl = "https://pixabay.com/api/";
const key = "42527705-4e95d3f46fcc8571248d3eb24";

//Формування URL для HTTP запита
function getApiRequest(value) {
  const url = `${baseUrl}?key=${key}&q=${value}&image_type=photo&orientation=horizontal&safesearch=true`;
  return url
}
//Функція додавання та видалення класу "is-hidden" для видимості завантажувача
const showLoader = () => loader.classList.toggle("is-hidden");

//Формування запита на сервер з перевіркою на заповнення поля вводу інпута та отримання відповіді (проміса)
function getResponse(url) {

  if (form.image.value.trim()) {
    showLoader();
    return fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Error request ${response.status}`)
        }
        return response.json();
      })
      } else {
    showErrorMessage()
  }
  
}

//Експорт функцій 
export {getApiRequest, getResponse, showErrorMessage, showLoader}