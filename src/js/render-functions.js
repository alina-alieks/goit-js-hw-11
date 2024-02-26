// функція для відображення елементів інтерфейсу

import { getImagesFromPixabay } from "./pixabay-api";


const form = document.querySelector(".form")

form.addEventListener("submit", getImagesFromPixabay)

