/**
 * ARCHIVO: data.js
 * UBICACIÓN: src/data/data.js
 * DESCRIPCIÓN: Configura la conexión con Firestore (Base de datos) y Auth (Usuarios).
 */

import 'dotenv/config'; 
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth'; // <--- Nueva librería para usuarios

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: "26924924899",
    appId: process.env.FIREBASE_APP_ID
};

// Iniciamos Firebase
const app = initializeApp(firebaseConfig);

// Exportamos la base de datos (db) y el sistema de autenticación (auth)
export const db = getFirestore(app);
export const auth = getAuth(app);