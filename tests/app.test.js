/**
 * NOMBRE: app.test.js
 * UBICACIÓN: __tests__/app.test.js
 * DESCRIPCIÓN: Pruebas de integridad del servidor. Verifica que la aplicación 
 * responda correctamente ante rutas inexistentes (Error 404).
 */

import request from "supertest";
import app from "../app.js";

describe("Pruebas del Servidor", () => {
  test("Debe responder 404 si la ruta no existe", async () => {
    const response = await request(app).get("/ruta-que-no-existe");
    expect(response.status).toBe(404);
    expect(response.body.message).toBe("URL no encontrada");
  });
});