import { Elysia } from 'elysia'

// Export 'app' so it can be imported in tests/
export const app = new Elysia()
    .get("/", () => ({ status: "Bun is running", agent: "Claude" }))
    .get("/hello", () => "Hello from the API")
    .listen(3000)

console.log(`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`)