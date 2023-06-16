import { getAdverts } from "./advertsList.js";
import { buildAdvertView, buildSpinnerView, buildErrorLoadingAdverts, buildEmptyAdvertList } from "./advertListView.js";

export async function advertListController(advertListElement) {
    const spinnerView = buildSpinnerView();
    advertListElement.appendChild(spinnerView);
    let adverts = [];

    try {
        adverts = await getAdverts();
      
        if(adverts.length > 0) {
          drawAdverts(adverts, advertListElement)
        } else {
          showEmptyMessage(advertListElement)
        }
        
      } catch (error) {
        const errorView = buildErrorLoadingAdverts();
        advertListElement.appendChild(errorView);
        console.log('Error:', error);
        return;
      } finally {
        spinnerView.remove();
      };
};

function drawAdverts(adverts, advertListElement) {
  for (const advert of adverts) {
    const newAdvertElement = buildAdvertView(advert);
    advertListElement.appendChild(newAdvertElement);
}
}

function showEmptyMessage(advertListElement) {
  const emptyView = buildEmptyAdvertList();
  advertListElement.appendChild(emptyView);
}

