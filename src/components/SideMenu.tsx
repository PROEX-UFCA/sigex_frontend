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
import { useNavigate, Link } from "react-router";

import { UserMenu } from "./UserMenu";

interface SideMenuProps {
  isDesktop: boolean;
}

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
export default function SideMenu( {isDesktop}: SideMenuProps) {
  const navigate = useNavigate();

  return (
    isDesktop ? null : (
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
              <Link
                className="flex flex-row gap-1.5 font-medium bg-secondary max-sm:text-lg sm:max-lg:text-xl lg:text-2xl h-16 hover:bg-zinc-200 w-full items-center justify-start px-5 hover:cursor-pointer rounded-none"
                to="/"
              >
                <Home className="w-6! h-6!" strokeWidth={2.2} />
                Menu Principal
              </Link>
            </SheetClose>

            <SheetClose asChild>
              <Link
                className="flex flex-row gap-1.5 font-medium bg-secondary max-sm:text-lg sm:max-lg:text-xl lg:text-2xl h-16 hover:bg-zinc-200 w-full items-center justify-start px-5 hover:cursor-pointer rounded-none"
                to="/search"
              >
                <LayoutGrid className="w-6! h-6!" strokeWidth={2.2} />
                Todos os Projetos
              </Link>
            </SheetClose>

            <SheetClose asChild>
              <Link
                className="flex flex-row gap-1.5 font-medium bg-secondary max-sm:text-lg sm:max-lg:text-xl lg:text-2xl h-16 hover:bg-zinc-200 w-full items-center justify-start px-5 hover:cursor-pointer rounded-none"
                to="https://sigex.danielnasc.com.br"
              >
                <ShieldUser className="w-6! h-6!" strokeWidth={2.2} />
                Sistema Administrativo
              </Link>
            </SheetClose>

            <UserMenu isDesktop={isDesktop}></UserMenu>
        </div>
        <SheetFooter>
          <p>Design by Guido Xenofonte &copy;</p>
          <SheetClose asChild>
            <Button variant="outline">Fechar</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
    )
  );
}
