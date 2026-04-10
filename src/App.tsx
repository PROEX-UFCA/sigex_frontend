import "@/App.css";

import { Outlet } from "react-router";

import Footer from "@/components/footer/Footer";
import TopBar from "@/components/topbar/TopBar";
import ScrollToTop from "@/components/ScrollToTop";

function App() {
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
