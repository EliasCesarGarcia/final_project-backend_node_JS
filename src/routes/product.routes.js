/**
 * ARCHIVO: product.routes.js
 * UBICACIÓN: src/routes/product.routes.js
 * DESCRIPCIÓN: Define qué URL dispara cada función del controlador.
 */

import express from 'express';
import * as productController from '../controllers/product.controller.js';
import { verifyToken } from '../middlewares/auth.middleware.js';

const router = express.Router();

router.get('/', productController.getProducts);
router.get('/:id', productController.getProduct);

// Rutas protegidas
router.post('/create', verifyToken, productController.createProduct);
router.put('/:id', verifyToken, productController.updateProduct);
router.delete('/:id', verifyToken, productController.deleteProduct);

export default router;