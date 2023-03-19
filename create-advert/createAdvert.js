export const createAdvert = async (values) => {

    const { advertName, advertDescription, advertType, advertPrice, advertImage } = values;

    const newAdvert = {
      nombre: advertName,
      descripcion: advertDescription,
      tipo: advertType,
      precio: advertPrice,
      imagen: advertImage
      
    }
  
    const token = localStorage.getItem('token')
  
    const response = await fetch('http://localhost:8000/api/adverts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "Authorization": `Bearer ${token}`,
      },
      body: JSON.stringify(newAdvert)
    })
  
    if (!response.ok) {
      throw new Error('Error al crear el anuncio')
    }
  
  }