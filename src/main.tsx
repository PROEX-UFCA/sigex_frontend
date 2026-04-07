import { StrictMode } from "react";
import "./index.css";
import App from "./App.tsx";

import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "@/pages/LandingPage.tsx";
import ProjectPage from "./pages/ProjectPage.tsx";

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
        element: (
          <ProjectPage
            title="Título/nome do Projeto"
            contact={{ email: "", phoneNum: "" }}
            description=""
            images={{ imageURL: ["", "", ""] }}
            tags={[
              {
                tagType: "Tecnologia",
              },
              {
                tagType: "Cultura",
              },
              {
                tagType: "Ensino",
              },
            ]}
          />
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
