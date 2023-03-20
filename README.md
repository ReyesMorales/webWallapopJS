# Wallapop

Este proyecto es una plataforma web de anuncios de articulos de segunda mano.

## Características

- Registro y autenticación de usuarios
- Creacion de anuncios de compra y anuncios de venta


## Instalación

1. Clona el repositorio: `git clone https://github.com/ReyesMorales/webWallapopJS`
2. Navega al directorio del proyecto: `cd frontendwallapop`
3. Usando el repositorio de Sparrest copia el archivo db.json
4. En el archivo index.js de Sparrest añade un segundo parametro en la linea 129, quedando así: 
    ` return res.status(201).json({ accessToken, userId: authenticatedUser.id })`
5. Instala las dependencias: `npm install`
6. Inicia el servidor: `npm start`

## Uso

1. Abre un navegador web
2. Visita `http://localhost:8000`
3. Inicia sesión o crea una cuenta


### Conexión con el API

Puedes conectarte con el API de la plataforma utilizando los siguientes métodos:

#### GET

GET http://localhost:8000/api/adverts


Obtiene la lista de todos los productos en la plataforma.

#### POST

POST http://localhost:8000/api/adverts


Agrega un nuevo producto a la plataforma.

#### DELETE

DELETE http://localhost:8000/api/adverts/:id


Elimina un producto de la plataforma.







