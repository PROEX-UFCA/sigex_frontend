import Footer from "@/components/Footer";
import TopBar from "@/components/TopBar";
import { Button } from "@/components/ui/button";
import { TriangleAlert } from "lucide-react";
import { useNavigate } from "react-router";

export default function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex">
        <TopBar></TopBar>
      </div>
      <div className="flex flex-1 flex-col w-2/3 self-center items-center justify-center text-gray-400 my-4 py-4 gap-4">
        <TriangleAlert className="scale-400 mb-10 self-center" />
        <p className="max-sm:text-2xl sm:max-lg:text-3xl text-4xl">
          Erro 404 | Página não encontrada
        </p>
        <Button className="text-xl" onClick={() => navigate("/")}>
          Voltar ao Menu Principal
        </Button>
      </div>
      <div className="flex">
        <Footer></Footer>
      </div>
    </div>
  );
}
