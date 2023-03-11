//obtener array de anuncios
import { adverts } from "./adverts.js";
import { buildAdvertView } from "./advertView.js";

export function advertListController(advertListElement) {
    advertListElement.innerHtml = '';

    for (const advert of adverts) {
        const newAdvertElement = buildAdvertView(advert);
        advertListElement.appendChild(newAdvertElement)
    }
};