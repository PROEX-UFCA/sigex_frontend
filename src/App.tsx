import "@/App.css";

import { Outlet } from "react-router-dom";

import Footer from "@/components/Footer";
import TopBar from "@/components/TopBar";

import { useScrollToTop } from "@/hooks/useScrollToTop";

function App() {
  useScrollToTop();

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex">
        <TopBar></TopBar>
      </div>
      <div className="flex flex-1 items-center justify-center py-2">
        <Outlet />
      </div>
      <div className="flex">
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
