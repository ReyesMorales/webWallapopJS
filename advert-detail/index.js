import { advertDetailController } from "./advertDetailController.js";

const params = new URLSearchParams(window.location.search)
const advertId = params.get('advertId');

if (!advertId) {
    window.location = '/'
  } else {
    const advertDetailElement = document.querySelector('.advert-detail');

    advertDetailController(advertDetailElement, advertId)
  }