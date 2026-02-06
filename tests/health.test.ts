// tests/health.test.ts
import { describe, expect, it } from "bun:test";
import { app } from "../src/index"; // Ensure you export 'app' from your index.ts

describe("Health Check API", () => {
    it("should return a 200 status and correct JSON body", async () => {
        // Perform a 'mock' request to the server
        const response = await app.handle(new Request("http://localhost/"));

        // Check status code
        expect(response.status).toBe(200);

        // Check JSON content
        const body = await response.json();
        expect(body).toEqual({
            status: "Bun is running",
            agent: "Claude"
        });
    });

    it("should return 404 for unknown routes", async () => {
        const response = await app.handle(new Request("http://localhost/unknown-route"));
        expect(response.status).toBe(404);
    });
});