export const deleteAdvert = async (advertId, token) => {
    const response = await fetch(`http://localhost:8000/api/adverts/${advertId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    });
  
    if (!response.ok) {
      throw new Error('No se ha podido borrar el anuncio');
    }
  };
  