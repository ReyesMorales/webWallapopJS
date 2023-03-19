import { createAdvert } from "./createAdvert.js";

export const createAdvertController = async (createAdvertFormElement) => {
  createAdvertFormElement.addEventListener('submit', async (event) => {
    event.preventDefault();

    const formData = new FormData(createAdvertFormElement);
    const values = {
        advertName: formData.get('nombre'),
        advertDescription: formData.get('descripcion'),
        advertType: formData.get('tipo'),
        advertPrice: formData.get('precio'),
        advertImage: formData.get('imagen')
      };

    try {
      await createAdvert(values)
      window.location = '/'
    } catch (error) {
      alert(error)
    }
  })
}
