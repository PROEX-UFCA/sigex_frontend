import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

import { Home, LayoutGrid, Menu, ShieldUser } from "lucide-react";
import { useNavigate } from "react-router";

export default function SideMenu() {
  const navigate = useNavigate();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant={"secondary"}
          className="flex h-10 w-10 text-black font-bold bg-gray-100"
        >
          <Menu className="w-5! h-5!" strokeWidth={2.2}></Menu>
        </Button>
      </SheetTrigger>
      <SheetContent className="rounded-l-4xl">
        <SheetHeader>
          <SheetTitle className="max-md:text-2xl md:max-xl:text-3xl xl:text-4xl font-bold">SigEx - UFCA</SheetTitle>
          <SheetDescription></SheetDescription>
        </SheetHeader>
        <div className="flex flex-col w-full">
          <SheetClose asChild>
            <Button
              variant={"secondary"}
              className="max-sm:text-lg sm:max-lg:text-xl lg:text-2xl h-16 hover:bg-zinc-200 w-full items-center justify-start px-5 hover:cursor-pointer rounded-none"
              onClick={() => navigate("/")}
            >
              <Home className="w-6! h-6!" strokeWidth={2.2} />
              Menu Principal
            </Button>
          </SheetClose>
          <SheetClose asChild>
            <Button
              variant={"secondary"}
              className="max-sm:text-lg sm:max-lg:text-xl lg:text-2xl h-16 hover:bg-zinc-200 w-full items-center justify-start px-5 hover:cursor-pointer rounded-none"
              onClick={() => navigate("/search")}
            >
              <LayoutGrid className="w-6! h-6!" strokeWidth={2.2} />
              Todos os Projetos
            </Button>
          </SheetClose>
          <SheetClose asChild>
            <Button
              variant={"secondary"}
              className="max-sm:text-lg sm:max-lg:text-xl lg:text-2xl h-16 hover:bg-zinc-200 w-full items-center justify-start px-5 hover:cursor-pointer rounded-none"
              onClick={
                () => (window.location.href = "https://sigex.danielnasc.com.br") // temporário
              }
            >
              <ShieldUser className="w-6! h-6!" strokeWidth={2.2} />
              Sistema Administrativo
            </Button>
          </SheetClose>
        </div>
        <SheetFooter>
          <p>Design by Guido Xenofonte &copy;</p>
          <SheetClose asChild>
            <Button variant="outline">Fechar</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
