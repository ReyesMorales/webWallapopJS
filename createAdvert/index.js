import { notificationController } from '../notifications/notificationController.js';
import { createAdvertController } from "./createAdvertController.js";

const notificationsElement = document.querySelector('.notifications');

notificationController(notificationsElement);

const token = localStorage.getItem('token')

if(!token) { 
    window.location = '/'; 
} else {
    const createAdvertFormElement = document.querySelector('#createAdvertForm');
    createAdvertController(createAdvertFormElement)
  }
