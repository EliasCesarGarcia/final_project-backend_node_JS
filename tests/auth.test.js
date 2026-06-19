/**
 * NOMBRE: auth.test.js
 * UBICACIÓN: __tests__/auth.test.js
 * DESCRIPCIÓN: Pruebas de integración para el módulo de Autenticación. 
 * Valida el inicio de sesión (Login) con credenciales correctas e incorrectas 
 * y la generación del token JWT.
 */

import request from "supertest";
import app from "../app.js";

describe("Pruebas de Autenticación", () => {
  test("Debe fallar el login con datos incorrectos", async () => {
    const response = await request(app)
      .post("/api/auth/login")
      .send({ email: "error@test.com", password: "wrongpassword" });

    expect(response.status).toBe(401);
  });

  test("Debe iniciar sesión con datos reales", async () => {
    //Asegurarnos de que este usuario exista en nuestra Firebase
    const response = await request(app)
      .post("/api/auth/login")
      .send({ email: "elias@test.com", password: "password123" });

    expect(response.status).toBe(200);
    expect(response.body.token).toBeDefined();
  });
});