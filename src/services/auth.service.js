/**
 * ARCHIVO: auth.service.js
 * UBICACIÓN: src/services/auth.service.js
 * DESCRIPCIÓN: Lógica para hablar con Firebase Auth (crear y validar usuarios).
 */
import { auth } from '../data/data.js';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

// Función para registrar un nuevo usuario
export const register = async (email, password) => {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    return userCredential.user;
};

// Función para iniciar sesión (Login)
export const login = async (email, password) => {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    // El token es la "llave" que usaremos para probar que estamos logueados
    const token = await userCredential.user.getIdToken();
    return { user: userCredential.user, token };
};