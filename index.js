import { notificationController } from "./notifications/notificationController.js";
import { advertListController } from "./advertList/advertListController.js";

const notificationsElement = document.querySelector('.notifications');
const advertListElement = document.querySelector('.adverts-list');

notificationController(notificationsElement);
advertListController(advertListElement);






