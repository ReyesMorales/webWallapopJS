export const getAdvertById = async (advertId) => {
const response = await fetch(`http://localhost:8000/api/adverts/${advertId}`)

if (!response.ok) {
    throw new Error('El anuncio solicitado no existe')
  }

const advert = await response.json();

  return advert;
}