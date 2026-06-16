import { http, HttpResponse } from "msw";
import { setupServer } from "msw/node";

export const server = setupServer(
  http.post("http://localhost:8000/api/me", () => {
    return HttpResponse.json({ role: null }, { status: 401 });
  }),

  http.get("http://localhost:8000/sanctum/csrf-cookie", () => {
    return new HttpResponse(null, { status: 204 });
  }),

  http.post("http://localhost:8000/api/login", async ({ request }) => {
    const body = (await request.json()) as { email: string; password: string };
    if (body.email === "admin@gmail.com" && body.password === "password") {
      return HttpResponse.json({ role: "Desenvolvimento" });
    }
    return HttpResponse.json({ message: "Login Inválido" }, { status: 401 });
  }),
);
