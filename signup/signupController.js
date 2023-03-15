import { pubSub } from "../pubSub.js";
import { isEmailValid } from "../utils/isEmailValid.js";
import { createUser } from "./signup.js";
isEmailValid

export function signupController(signupElement) {

  signupElement.addEventListener('submit', async (event) => {
    event.preventDefault();

    const emailElement = signupElement.querySelector('#username');
    const passwordElement = signupElement.querySelector('#password');
    const passwordConfirmElement = signupElement.querySelector('#passwordConfirm');

    if (isEmailValid(emailElement.value) &&
        isPasswordValid(passwordElement.value, passwordConfirmElement.value)) {
          try {
            await createUser(emailElement.value, passwordElement.value)
            signupElement.reset();
            pubSub.publish(pubSub.TOPICS.SHOW_NOTIFICATION, 'Usuario creado correctamente')
            window.location = '/'
          } catch (error) {
            pubSub.publish(pubSub.TOPICS.SHOW_NOTIFICATION, error.message)
          }
    }
  })
    

  function isPasswordValid(password, passwordConfirmation) {
    if (password !== passwordConfirmation) {
      pubSub.publish(pubSub.TOPICS.SHOW_NOTIFICATION, 'Las contraseñas no son iguales')
      return false
    }

    return true
  }
}

