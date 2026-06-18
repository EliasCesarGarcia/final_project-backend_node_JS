# 🚀 API REST - Gestión de Productos (TechLab)
### Proyecto Final - Programa Talento Tech
**Estudiante:** Elias Garcia  
**Tecnologías:** Node.js, Express, Firebase Firestore, Firebase Auth.

---

## 📝 Descripción
Esta es una API REST profesional diseñada para la gestión de un catálogo de productos. Permite realizar operaciones CRUD (Crear, Leer, Actualizar y Eliminar) de forma segura mediante una arquitectura por capas y protección de rutas con autenticación basada en Firebase.

El proyecto ha sido optimizado siguiendo el feedback docente, implementando validaciones robustas en la capa de servicios y un manejo de errores estandarizado.

## ✨ Características
- **Arquitectura de Software:** Separación de responsabilidades en 5 capas (Rutas, Controladores, Servicios, Modelos y Datos).
- **Seguridad:** Rutas protegidas que requieren un Bearer Token válido.
- **Base de Datos:** Persistencia en la nube mediante Google Firebase Firestore.
- **Validaciones:** Control estricto de tipos de datos (ej. validación de precio numérico y campos obligatorios).
- **Despliegue:** Configurado para producción en Vercel.

## 🛠️ Tecnologías utilizadas
- **Node.js** (Entorno de ejecución)
- **Express** (Framework de servidor)
- **Firebase Admin/Auth** (Persistencia y Seguridad)
- **Dotenv** (Gestión de variables de entorno)
- **Cors** (Intercambio de recursos de origen cruzado)

## 📂 Estructura del Proyecto
- `src/data`: Conexión oficial a Firebase.
- `src/models`: Consultas directas a la base de datos (Firestore).
- `src/services`: Lógica de negocio y validaciones de datos (Feedback del profesor).
- `src/controllers`: Gestión de respuestas HTTP y códigos de estado.
- `src/routes`: Definición de endpoints de la API.
- `src/middlewares`: Filtros de seguridad para proteger rutas.

## 🚀 Instalación y Ejecución
1. Clonar el repositorio.
2. Instalar dependencias: `npm install`
3. Configurar el archivo `.env` con las credenciales de Firebase.
4. Iniciar servidor: `npm start`