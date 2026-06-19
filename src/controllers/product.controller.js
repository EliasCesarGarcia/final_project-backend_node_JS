/**
 * ARCHIVO: product.controller.js
 * UBICACIÓN: src/controllers/product.controller.js
 * DESCRIPCIÓN: Recibe las peticiones HTTP y envía las respuestas JSON.
 * IMPLEMENTADO EN: product.routes.js
 */

import * as productService from '../services/product.service.js';

export const getProducts = async (req, res) => {
    try {
        const data = await productService.getAll();
        res.status(200).json(data);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// BUSCAR POR ID
export const getProduct = async (req, res) => {
    try {
        const data = await productService.getById(req.params.id);
        if (!data) {
            return res.status(404).json({ message: "El producto solicitado no existe o fue eliminado." });
        }
        res.status(200).json(data);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const createProduct = async (req, res) => {
    try {
        const data = await productService.createProduct(req.body);
        res.status(201).json(data);
    } catch (err) {
        // Estado 400 ante errores de validación
        res.status(400).json({ message: err.message });
    }
};

// ACTUALIZAR
export const updateProduct = async (req, res) => {
    try {
        const data = await productService.updateProduct(req.params.id, req.body);
        res.status(200).json({ message: "Producto actualizado correctamente", data });
    } catch (err) {
        // Si el servicio lanza error porque no lo encontró
        res.status(404).json({ message: err.message });
    }
};

// ELIMINAR
export const deleteProduct = async (req, res) => {
    try {
        const exist = await productService.getById(req.params.id);
        if (!exist) {
            return res.status(404).json({ message: "No se puede eliminar: el producto no existe." });
        }
        await productService.deleteProduct(req.params.id);
        res.status(200).json({ message: "Producto eliminado definitivamente." });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};