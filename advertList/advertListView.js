export function buildAdvertView(advert) {
    const newAdvertElement = document.createElement('article');
    newAdvertElement.classList.add('advert')
    
    if(advert.tipo === "venta") {
    newAdvertElement.innerHTML = `
    <a href="/advertDetail.html?advertId=${advert.id}">
    <p>${advert.nombre}</p></a>
    <p>${advert.descripcion}</p>
    <p>${advert.tipo}</p>
    <p>${advert.precio}</p>
    <p>${advert.imagen}</p>
   
    `; 
  } else {
      newAdvertElement.innerHTML = `
    <a href="/advertDetail.html?advertId=${advert.id}">
    <p>${advert.nombre}</p></a>
    <p>${advert.descripcion}</p>
    <p>${advert.tipo}</p>
    <p>${advert.precio}</p>
    
    `;
    }
    

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

  export function buildEmptyAdvertList() {
    const emptyElement = document.createElement('p');
    emptyElement.classList.add('empty');
    emptyElement.textContent = 'No hay anuncios disponibles';
    return emptyElement;
  };

