/**
 * ARCHIVO: index.js
 * UBICACIÓN: Raíz del proyecto
 * DESCRIPCIÓN: Arranca el servidor físico.
*/

import app from './app.js';

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`>>> Servidor encendido en http://localhost:${PORT}`);
});