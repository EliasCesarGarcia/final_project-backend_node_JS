1. Archivo de Datos (La Base de Datos)
ARCHIVO: products.json
UBICACIÓN: data/products.json
QUÉ HACE: Es nuestro archivo de texto donde se guardarán los productos de forma permanente.
ORIGEN/AFECTA: Lo lee y escribe el Modelo.

2. Capa de Modelo (El Bibliotecario)
ARCHIVO: product.model.js
UBICACIÓN: src/models/product.model.js
QUÉ HACE: Es el único que toca el archivo products.json. Sabe leerlo y escribir en él usando el módulo fs (FileSystem).
IMPLEMENTACIÓN: El Servicio lo llama para obtener o guardar datos.

3. Capa de Servicio (El Organizador)
ARCHIVO: product.service.js
UBICACIÓN: src/services/product.service.js
QUÉ HACE: Recibe órdenes del controlador y le pide al modelo los datos. Aquí iría la "lógica de negocio" (ej. descuentos).
IMPLEMENTACIÓN: Viene del Controlador y afecta al Modelo.

4. Capa de Controlador (El Recepcionista)
ARCHIVO: product.controller.js
UBICACIÓN: src/controllers/product.controller.js
QUÉ HACE: Recibe la petición del usuario (req), llama al servicio y envía la respuesta (res).
IMPLEMENTACIÓN: Viene de las Rutas y llama al Servicio.

5. Archivo de Rutas (El Mapa)
ARCHIVO: product.routes.js
UBICACIÓN: src/routes/product.routes.js
QUÉ HACE: Define las URLs que el usuario puede visitar.

6. Archivo Principal (El Motor)
ARCHIVO: index.js
UBICACIÓN: Raíz del proyecto.
QUÉ HACE: Arranca el servidor Express.

7. Configuración del Proyecto
ARCHIVO: package.json
UBICACIÓN: Raíz del proyecto.