/**
 * NOMBRE: products.test.js
 * UBICACIÓN: __tests__/products.test.js
 * DESCRIPCIÓN: Pruebas completas del flujo CRUD de productos. 
 * Verifica la creación, lectura, actualización y eliminación de productos 
 * en la base de datos Firestore, utilizando autorización por Bearer Token.
 */

import request from "supertest";
import app from "../app.js";

let token;
let productId;

// Antes de los tests, obtenemos un token real
beforeAll(async () => {
  const loginRes = await request(app)
    .post("/api/auth/login")
    .send({ email: "elias@test.com", password: "password123" });
  token = loginRes.body.token;
});

describe("CRUD de Productos", () => {
  test("POST /api/products/create - Debe crear un producto", async () => {
    const response = await request(app)
      .post("/api/products/create")
      .set("Authorization", `Bearer ${token}`)
      .send({
        title: "Producto de Prueba Jest",
        price: 500,
        category: "Testing"
      });

    expect(response.status).toBe(201);
    expect(response.body.id).toBeDefined();
    productId = response.body.id; // Guardamos el ID para las siguientes pruebas
  });

  test("GET /api/products - Debe devolver una lista", async () => {
    const response = await request(app).get("/api/products");
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });

  test("PUT /api/products/:id - Debe actualizar el producto", async () => {
    const response = await request(app)
      .put(`/api/products/${productId}`)
      .set("Authorization", `Bearer ${token}`)
      .send({
        title: "Producto Actualizado por Jest",
        price: 999,
        category: "Testing Pro"
      });

    expect(response.status).toBe(200);
    expect(response.body.data.title).toBe("Producto Actualizado por Jest");
  });

  test("DELETE /api/products/:id - Debe eliminar el producto", async () => {
    const response = await request(app)
      .delete(`/api/products/${productId}`)
      .set("Authorization", `Bearer ${token}`);

    expect(response.status).toBe(200);
    expect(response.body.message).toBe("Producto eliminado definitivamente.");
  });
});