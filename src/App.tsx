import "@/App.css";

import { Outlet } from "react-router";

import Footer from "@/components/Footer";
import TopBar from "@/components/topbar/TopBar";
import ScrollToTop from "@/components/ScrollToTop";

function App() {
  return (
    <div className="flex flex-col min-h-screen gap-3">
      <ScrollToTop />
      <div className="flex">
        <TopBar></TopBar>
      </div>
      <div className="flex flex-1 items-center justify-center">
        <Outlet />
      </div>
      <div className="flex">
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
