import { getAdverts } from "./adverts.js";
import { buildAdvertView, buildSpinnerView } from "./advertView.js";

export async function advertListController(advertListElement) {
    const spinnerView = buildSpinnerView();
    advertListElement.appendChild(spinnerView);
    
    const adverts = await getAdverts()
    
    for (const advert of adverts) {
        const newAdvertElement = buildAdvertView(advert);
        advertListElement.appendChild(newAdvertElement);
    }
    
    spinnerView.remove(); 
};




