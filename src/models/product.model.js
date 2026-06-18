/**
 * ARCHIVO: product.model.js
 * UBICACIÓN: src/models/product.model.js
 * DESCRIPCIÓN: Habla con Firebase usando la conexión de data.js
 */

import { db } from '../data/data.js';
import { collection, getDocs, getDoc, addDoc, updateDoc, deleteDoc, doc } from 'firebase/firestore';

const colRef = collection(db, 'products');

export const findAll = async () => {
    const snapshot = await getDocs(colRef);
    return snapshot.docs.map(d => ({ id: d.id, ...d.data() }));
};

export const findById = async (id) => {
    const d = await getDoc(doc(colRef, id));
    return d.exists() ? { id: d.id, ...d.data() } : null;
};

export const create = async (data) => {
    const docRef = await addDoc(colRef, data);
    return { id: docRef.id, ...data };
};

export const update = async (id, data) => {
    const docRef = doc(colRef, id);
    await updateDoc(docRef, data);
    return { id, ...data };
};

export const remove = async (id) => {
    await deleteDoc(doc(colRef, id));
    return true;
};