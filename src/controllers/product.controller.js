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

export const getProduct = async (req, res) => {
    try {
        const data = await productService.getById(req.params.id);
        data ? res.status(200).json(data) : res.status(404).json({ message: "No encontrado" });
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

export const updateProduct = async (req, res) => {
    try {
        const data = await productService.updateProduct(req.params.id, req.body);
        res.status(200).json(data);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

export const deleteProduct = async (req, res) => {
    try {
        await productService.deleteProduct(req.params.id);
        res.status(200).json({ message: "Eliminado con éxito" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};