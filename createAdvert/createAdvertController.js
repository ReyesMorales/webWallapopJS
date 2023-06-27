import { createAdvert } from "./createAdvert.js";
import { pubSub } from "../pubSub.js";

export const createAdvertController = async (createAdvertFormElement) => {
  createAdvertFormElement.addEventListener('submit', async (event) => {
    event.preventDefault();

    const token = localStorage.getItem('token');
    if (!token) {
      window.location = '/login';
      return;
    }

    const formData = new FormData(createAdvertFormElement);
    const advertPrice = formData.get('precio');

    if (advertPrice <= 0) {
      const topic = pubSub.TOPICS.SHOW_NOTIFICATION;
      pubSub.publish(topic, 'El precio debe ser un número positivo');
      return;
    }

    const values = {
      advertName: formData.get('nombre'),
      advertDescription: formData.get('descripcion'),
      advertType: formData.get('tipo'),
      advertPrice,
      advertImage: formData.get('imagen')
    };

    const topic = pubSub.TOPICS.SHOW_NOTIFICATION;

    try {
      await createAdvert(values)
      pubSub.publish(topic, 'El anuncio se ha creado correctamente');
      window.location = '/'
    } catch (error) {
      pubSub.publish(topic, 'Ha ocurrido un error al crear el anuncio');
    }
  });
};
