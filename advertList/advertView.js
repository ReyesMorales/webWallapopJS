export function buildAdvertView(advert) {
    const newAdvertElement = document.createElement('article');
    newAdvertElement.innerHtml = `
        <p>${advert.nombre}</p>
`;

    return newAdvertElement;
}
