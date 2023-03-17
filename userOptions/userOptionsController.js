import { decodeToken } from "../utils/decodeToken.js";
import { buildGreeting } from './userOptionsView.js'

export function userOptionsController(userOptionsElement) {
  const token = localStorage.getItem('token')


  if (token) {
    const loginLinkElement = userOptionsElement.querySelector('#loginLink');
    const signupLinkElement = userOptionsElement.querySelector('#signupLink')
    loginLinkElement.remove()
    signupLinkElement.remove()

    const payload = decodeToken(token)
    userOptionsElement.appendChild(buildGreeting(payload.username))

  } else {
    const createAdvertLinkElement = userOptionsElement.querySelector('#createAdvertLink')
    createAdvertLinkElement.remove()
  }


}


