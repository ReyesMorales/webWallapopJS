export const buildAdvertDetail = (advert) => {
    return `
    <p>Nombre: ${advert.nombre}</p>
    <p>descripción: ${advert.descripcion}</p>
    <p>Tipo: ${advert.tipo}</p>
    <p>Precio: ${advert.precio}</p>
    <p>${advert.imagen}</p>
    `}