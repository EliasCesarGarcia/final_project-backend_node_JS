/**
 * ARCHIVO: auth.controller.js
 * UBICACIÓN: src/controllers/auth.controller.js
 * DESCRIPCIÓN: Recibe los datos del formulario (email y password) y responde al cliente.
 */
import * as authService from '../services/auth.service.js';

export const register = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await authService.register(email, password);
        res.status(201).json({ message: 'Usuario creado con éxito', uid: user.uid });
    } catch (error) {
        // MENSAJE ESPECÍFICO SI EL USUARIO YA EXISTE
        if (error.code === 'auth/email-already-in-use') {
            return res.status(409).json({ message: 'Ese correo ya está registrado. Intenta con otro o inicia sesión.' });
        }
        if (error.code === 'auth/weak-password') {
            return res.status(400).json({ message: 'La contraseña es muy corta. Debe tener al menos 6 caracteres.' });
        }
        res.status(400).json({ message: 'Error al registrar', error: error.message });
    }
};

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const data = await authService.login(email, password);
        res.status(200).json({ 
            message: 'Inicio de sesión correcto', 
            token: data.token
        });
    } catch (error) {
        res.status(401).json({ message: 'Credenciales inválidas', error: error.message });
    }
};