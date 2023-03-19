import { createAdvertController } from "./createAdvertController.js";

createAdvertController

const token = localStorage.getItem('token')

if(!token) { 
    window.location = '/'; 
} else {
    const createAdvertFormElement = document.querySelector('#createAdvertForm');
    createAdvertController(createAdvertFormElement)
  }
