/**
 * ARCHIVO: product.service.js
 * UBICACIÓN: src/services/product.service.js
 * DESCRIPCIÓN: Capa de lógica. Recibe del controlador y pide al modelo.
 * IMPLEMENTADO EN: product.controller.js
 */

import * as productModel from '../models/product.model.js';
import { db } from '../data/data.js';
import { collection, query, where, getDocs } from 'firebase/firestore';

export const getAll = () => productModel.findAll();

export const getById = (id) => productModel.findById(id);

export const createProduct = async (data) => {
    const { title, price, category } = data;

    // 1. Validaciones de campos
    if (!title || !price || !category) {
        throw new Error("Faltan campos obligatorios: title, price o category.");
    }
    if (isNaN(price) || price <= 0) {
        throw new Error("El precio debe ser un número válido mayor a 0.");
    }

    // COMPROBAR SI EL PRODUCTO YA EXISTE (Mensaje personalizado)
    const productsRef = collection(db, 'products');
    const q = query(productsRef, where("title", "==", title));
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
        throw new Error(`El producto '${title}' ya existe en el catálogo.`);
    }

    return await productModel.create({ title, price: Number(price), category });
};


export const updateProduct = async (id, data) => {
    const existing = await productModel.findById(id);
    if (!existing) throw new Error("Producto no encontrado");
    return await productModel.update(id, data);
};

export const deleteProduct = (id) => productModel.remove(id);