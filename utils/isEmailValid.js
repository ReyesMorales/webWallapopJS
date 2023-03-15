import { pubSub } from "../pubSub.js";

export function isEmailValid(email){
  const mailRegExp = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);

  if (!mailRegExp.test(email)) {
    pubSub.publish(pubSub.TOPICS.SHOW_NOTIFICATION, 'El email no está bien escrito')
    return false
  }

  return true
}