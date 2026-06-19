/**
 * ARCHIVO: index.js
 * UBICACIÓN: Raíz del proyecto
 * DESCRIPCIÓN: Es el punto de entrada. Enciende el servidor.
*/

// Importamos librerías (forma moderna)
import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import productRoutes from './src/routes/product.routes.js';
import authRoutes from './src/routes/auth.routes.js';

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares globales
app.use(cors());
app.use(express.json()); // Reemplaza a body-parser

app.get('/', (req, res) => {
    res.send('API funcionando correctamente ✅');
});

// Rutas de la API
app.use('/api/products', productRoutes);
app.use('/api/auth', authRoutes);

// Manejo de rutas no encontradas (Requisito Estado 404)
app.use((req, res) => {
    res.status(404).json({ message: "La ruta solicitada no existe." });
});

app.listen(PORT, () => {
    console.log(`>>> Servidor activo en puerto ${PORT}`);
});