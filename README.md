# Wallapop

Este proyecto es una plataforma web de anuncios de articulos de segunda mano.

## Características

- Registro y autenticación de usuarios
- Creacion de anuncios de compra y anuncios de venta


## Instalación

1. Clona el repositorio: 

```sh
git clone https://github.com/ReyesMorales/webWallapopJS
```
2. Navega al directorio del proyecto: 

```sh
cd frontendWallapop
```
3. Usando el repositorio de Sparrest copia el archivo db.json
4. En el archivo index.js de Sparrest añade un segundo parametro en la linea 129, quedando así:

```sh
return res.status(201).json({ accessToken, userId: authenticatedUser.id })
```
5. Instala las dependencias: 

```sh
npm install
```
6. Inicia el servidor: 

```sh
npm start
```

## Uso

1. Arranca el el api rest usando el comando 

```sh
npm start
```
2. Desde el repositorio clonado, accede a live-server 

```sh
npx live-server
```
3. Crea una cuenta en el apartado de Sign Up.

4. Inica sesión a través de Login.


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







