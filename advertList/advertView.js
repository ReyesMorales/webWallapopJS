export function buildAdvertView(advert) {
    const newAdvertElement = document.createElement('article');
    newAdvertElement.classList.add('advert')
    newAdvertElement.innerHTML = 
    `<p>${advert.nombre}</p>
    <p>${advert.descripcion}</p>
    <p>${advert.tipo}</p>
    <p>${advert.precio}</p>
    <p>${advert.imagen}</p>
    `; 
    
    // `<p>${advert.pseudo}</p>
    // <img src="${advert.avatar}" />
    // <div class="user-info">
    // <span>${advert.handle}</span>
    // </div>
    // <p>${advert.content} 
    // `;

    return newAdvertElement;
}

export function buildSpinnerView() {
    const spinnerDiv = document.createElement('div');
    spinnerDiv.classList.add('spinner');
    return spinnerDiv;
  };

  export function buildErrorLoadingAdverts() {
    const errorElement = document.createElement('p');
    errorElement.classList.add('load-error');
    errorElement.textContent = 'No se pueden cargar los anuncios en este momento. Pruebe de nuevo más tarde';
    return errorElement;
  };