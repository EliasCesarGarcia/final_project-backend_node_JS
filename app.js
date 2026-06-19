/**
 * ARCHIVO: app.js
 * QUÉ HACE: Configura Express, Middlewares y Rutas.
 * DESCRIPCIÓN: Se separa del servidor para que Jest pueda probarlo.
 */
import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import productRoutes from './src/routes/product.routes.js';
import authRoutes from './src/routes/auth.routes.js';

const app = express();

app.use(cors());
app.use(express.json());

// Conectamos las rutas
app.use('/api/products', productRoutes);
app.use('/api/auth', authRoutes);

// Manejo de 404
app.use((req, res) => {
    res.status(404).json({ message: "URL no encontrada" });
});

export default app;