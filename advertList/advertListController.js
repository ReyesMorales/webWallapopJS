import { getAdverts } from "./adverts.js";
import { buildAdvertView, buildSpinnerView, buildErrorLoadingAdverts } from "./advertView.js";

export async function advertListController(advertListElement) {
    const spinnerView = buildSpinnerView();
    advertListElement.appendChild(spinnerView);
    let adverts = [];

    try {
        adverts = await getAdverts();
        spinnerView.remove();
        for (const advert of adverts) {
            const newAdvertElement = buildAdvertView(advert);
            advertListElement.appendChild(newAdvertElement);
        }
        

      } catch (error) {
        const errorView = buildErrorLoadingAdverts();
        advertListElement.appendChild(errorView);
        console.log('Error:', error);
        spinnerView.remove();
        return;
      };

      for (const advert of adverts) {
        const newAdvertElement = buildAdvertView(advert);
        advertListElement.appendChild(newAdvertElement);
    }

      
    
    
    
    
    //spinnerView.remove(); 
};




