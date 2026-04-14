import { StrictMode } from "react";
import "./index.css";
import App from "./App.tsx";

import ReactDOM from "react-dom/client";
import { createHashRouter, RouterProvider } from "react-router-dom";

import LandingPage from "@/pages/LandingPage.tsx";
import ProjectPage from "@/pages/ProjectPage.tsx";
import SearchPage from "@/pages/SearchPage.tsx";

const router = createHashRouter([
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
                tagType: "Educação",
              },
            ]}
          />
        ),
      },
      {
        path: "/search/:term?",
        element: (<SearchPage></SearchPage>)
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
