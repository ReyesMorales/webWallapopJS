import { getAdvertById } from "./advertDetail.js";
import { buildAdvertDetail } from "./advertDetailView.js";


export  const advertDetailController = async (advertDetailElement, advertId) => {
    
    try {
        const advert = await getAdvertById(advertId)
        advertDetailElement.innerHTML = buildAdvertDetail(advert)
      } catch (error) {
        alert(error)
      }
}