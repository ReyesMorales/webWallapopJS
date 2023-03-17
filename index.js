import { notificationController } from "./notifications/notificationController.js";
import { advertListController } from "./advertList/advertListController.js";
import { userOptionsController } from "./userOptions/userOptionsController.js";

const notificationsElement = document.querySelector('.notifications');
const advertListElement = document.querySelector('.adverts-list');
const userOptionsElement = document.querySelector('.user-options');

notificationController(notificationsElement);
advertListController(advertListElement);
userOptionsController(userOptionsElement);

     



