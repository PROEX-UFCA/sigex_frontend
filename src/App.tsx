import "@/App.css";

import { Outlet } from "react-router";

import Footer from "@/components/Footer";
import TopBar from "@/components/topbar/TopBar";
import ScrollToTop from "@/components/ScrollToTop";
// import { getProjectById, getProjects } from "@/services/projectServices";

function App() {
  // console.log(getProjects());
  // console.log(getProjectById("392bc438-cc21-49eb-87d4-1b3c9977e5d5"));

  return (
    <div className="flex flex-col gap-3">
      <ScrollToTop />
      <div className="flex">
        <TopBar></TopBar>
      </div>
      <div className="flex items-center min-h-screen justify-center">
        <Outlet />
      </div>
      <div className="flex">
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
