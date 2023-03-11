import { advertListController } from "./advertList/advertListController.js";

const advertListElement = document.querySelector('.adverts-list');
const loadAdvertsButtonElement = document.querySelector('#loadAdvertsButton');

loadAdvertsButtonElement.addEventListener('click', () => {
    advertListController(advertListElement)
 })


