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

import { Home, LayoutGrid, Menu, ShieldUser, User } from "lucide-react";
import { useNavigate } from "react-router";

import { useAuth } from "@/contexts/AuthContext";

/**
 * Menu lateral deslizante (Sheet) acessível pelo ícone de hambúrguer.
 *
 * Exibe links de navegação principais e, condicionalmente, opções de
 * autenticação com base no `role` do usuário:
 * - Se não autenticado (`role === null`): mostra botão "Faça seu login".
 * - Se autenticado: mostra "Sua conta" e botão de logout.
 *
 * Links disponíveis:
 * - **Menu Principal** → `/`
 * - **Todos os Projetos** → `/search`
 * - **Sistema Administrativo** → URL externa (temporário)
 *
 * @remarks
 * O redirecionamento para o sistema administrativo via `window.location.href`
 * é marcado como temporário e deve ser substituído pela rota interna correta.
 *
 * @example
 * <SideMenu />
 */
export default function SideMenu() {
  const navigate = useNavigate();
  const { role, logout } = useAuth();

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
          <SheetTitle className="max-md:text-2xl md:max-xl:text-3xl xl:text-4xl font-bold">
            SigEx - UFCA
          </SheetTitle>
          <SheetDescription></SheetDescription>
        </SheetHeader>
        <div className="flex flex-1 flex-col w-full">
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
          {role === null && (
            <SheetClose asChild className="mt-auto">
              <Button
                variant={"secondary"}
                className="max-sm:text-lg sm:max-lg:text-xl lg:text-2xl h-16 hover:bg-zinc-200 w-full items-center justify-start px-5 hover:cursor-pointer rounded-none"
                onClick={
                  () => navigate("/login") // temporário
                }
              >
                <User className="w-6! h-6!" strokeWidth={2.2} />
                Faça seu login
              </Button>
            </SheetClose>
          )}
          {role && (
            <div className="flex flex-row mt-auto gap-2 bg-zinc-100 w-full">
              <SheetClose asChild className="flex-1">
                <Button
                  variant={"secondary"}
                  className="max-sm:text-lg sm:max-lg:text-xl lg:text-2xl h-16 hover:bg-zinc-200 w-full items-center justify-start px-5 hover:cursor-pointer"
                >
                  <User className="w-6! h-6!" strokeWidth={2.2} />
                  <p>Sua conta</p>
                </Button>
              </SheetClose>
              <Button
                variant={"destructive"}
                className="w-24 h-full text-lg"
                onClick={logout}
              >
                Sair
              </Button>
            </div>
          )}
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
