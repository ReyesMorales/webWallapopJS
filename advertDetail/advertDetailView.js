export const buildAdvertDetail = (advert) => {
    let imagenHTML = '';
    if (advert.imagen) {
      imagenHTML = `<p>Imagen: ${advert.imagen}</p>`;
    }
  
    return `
      <p>Nombre: ${advert.nombre}</p>
      <p>Descripción: ${advert.descripcion}</p>
      <p>Tipo: ${advert.tipo}</p>
      <p>Precio: ${advert.precio}</p>
      ${imagenHTML}
    `;
  };
  