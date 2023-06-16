export const buildAdvertDetail = (advert) => {
    return `
    <p>${advert.nombre}</p>
    <p>${advert.descripcion}</p>
    <p>${advert.tipo}</p>
    <p>${advert.precio}</p>
    <p>${advert.imagen}</p>
    `}