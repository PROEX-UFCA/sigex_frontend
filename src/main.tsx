import { StrictMode } from "react";
import "./index.css";
import App from "./App.tsx";

import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import LandingPage from "@/pages/LandingPage.tsx";
import ProjectPage from "@/pages/ProjectPage.tsx";
import SearchPage from "@/pages/SearchPage.tsx";
import LoginPage from "@/pages/LoginPage.tsx";

import { AuthProvider } from "@/contexts/AuthContext.tsx";
import { CookiesProvider } from "react-cookie";
import NotFoundPage from "./pages/NotFoundPage.tsx";

/**
 * Definição das rotas da aplicação usando React Router.
 *
 * Estrutura de rotas:
 * - `/`            → {@link App} (layout raiz)
 *   - `index`      → {@link LandingPage}
 *   - `/projects/:id` → {@link ProjectPage}
 *   - `/search/:term?` → {@link SearchPage} (parâmetro `term` opcional)
 * - `/login`       → {@link LoginPage} (rota sem layout global)
 */
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <LandingPage></LandingPage>,
      },
      {
        path: "/projects/:id",
        element: <ProjectPage></ProjectPage>,
      },
      {
        path: "/search/:term?",
        element: <SearchPage></SearchPage>,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage></LoginPage>,
  },
  {
    path: "*",
    element: <NotFoundPage></NotFoundPage>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CookiesProvider>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </CookiesProvider>
  </StrictMode>,
);
