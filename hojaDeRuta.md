<!-- 
LISTADO DE ANUNCIOS
1. Listado de anuncios:
- Array de anuncios --- ok
- Html --- ok 
- Añadir el html al dom --- ok 
2.Cada anuncio debe mostrar: imagen(sí tiene), nombre, descripcion, precio y tipo(compra o venta)--- ok
3. La pagina del listado debe gestionar todos los estados del interfaz:
    3.1 vacío--- ok
    3.2 error--- ok
    3.3 carga(spinner)--- ok 
    3.4 exito --- ok  
4. Al pulsar sobre el anuncio, se abrirá la pagina de detalle de cada anuncio--- TODO
5. Si el usuario esta logedado, aparecerá un boton que permite acceder a la pantalla de creacion de anuncio--- TODO


DETALLE DE ANUNCIO
1. La pagina de detalle de anuncio debe mostrar foto(si hay), nombre, descripcion, precio y si es compra o venta
2. En este detalle se deben gestionar los estados: vacio, error, carga y exito
3. Si el usuario esta logeado y el anuncio es suyo, debe mostrar un boton para borrarlo. Tiene que haber confirmacion de si quiere eliminarlo


CREACION DE UN ANUNCIO
1. Insertar un formulario con los siguientes campos: foto, nombre, descripcion, precio y tipo
2. Cuando el usuario envie el formulario debe enviar al backend una peticion para guardar el anuncio
3. Se deben gestionar todos los estados: error, carga y exito
4. A esta pantalla solo se accede si estan logeados, en caso contrario, habra que redireccionar al usuario a la pagina principal mostrando el motivo


LOGIN
1. La pagina debe mostrar un formulario solictando username y password
2. Cuando el usuario enive el formulario, debe autenticarlo con el backend para obtener un token JWT que sera tuilizado en las siguientes comunciaciones
3. Hay que gestionar todos los estados: carga, error y exito

REGISTRO
1. Mostrar formulario pidiendo username y password ok 
2. Caudno se envie, debe registrarlo en el backend TODO
3.Debe gestionar todos los estados: carga, error y exito code ok, falta comprobar
 -->