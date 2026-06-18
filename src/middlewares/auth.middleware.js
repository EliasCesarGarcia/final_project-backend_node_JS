/**
 * ARCHIVO: auth.middleware.js
 * UBICACIÓN: src/middlewares/auth.middleware.js
 * DESCRIPCIÓN: Revisa si el usuario envió el Token de seguridad.
 */
import { auth } from '../data/data.js';

export const verifyToken = async (req, res, next) => {
    // Buscamos el token en los encabezados (Headers) de la petición
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
        return res.status(403).json({ message: 'No se proporcionó un token de seguridad' });
    }

    try {
        next(); // Si todo está bien, "pasa al siguiente nivel" (el controlador)
    } catch (error) {
        res.status(401).json({ message: 'Token inválido o expirado' });
    }
};