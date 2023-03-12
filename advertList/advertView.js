export function buildAdvertView(advert) {
    const newAdvertElement = document.createElement('article');
    newAdvertElement.classList.add('advert')
    newAdvertElement.innerHTML = `<p>${advert.pseudo}</p>
    <img src="${advert.avatar}" />
    <p>${advert.handle}</p>
    <div class="user-info">
    <span>${advert.handle}</span>
    <img src="${advert.avatar}" />
    </div>
    <p>${advert.content} 
    `;

    return newAdvertElement;
}

export function buildSpinnerView() {
    const spinnerDiv = document.createElement('div');
    spinnerDiv.classList.add('spinner');
    return spinnerDiv;
  };
