import request from "supertest";
import mongoose from "mongoose";
import app from "./app.js";

describe("API endpoints", () => {
  test("health check returns ok", async () => {
    const response = await request(app)
      .get("/health")
      .expect(200)
      .expect("Content-Type", /text/);

    expect(response.text).toBe("ok");
  });

  test("version endpoint returns version number", async () => {
    const response = await request(app).get("/version").expect(200);

    expect(response.text).toBe("1");
  });

  afterAll((done) => {
    mongoose.connection.close();
    done();
  });
});
