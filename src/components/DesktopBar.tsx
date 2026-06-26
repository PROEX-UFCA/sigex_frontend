import { Button } from "./ui/button";
import { LayoutGrid, ShieldCheck } from "lucide-react";
import { UserMenu } from "./UserMenu";
import { Link } from "react-router";

interface DesktopBarProps {
  isDesktop: boolean;
}

export function DesktopBar ({isDesktop}: DesktopBarProps){
    return (
        <div className="flex flex-row items-center gap-3 shrink-0">
            <Button asChild variant="secondary" className="h-10 bg-gray-100 text-black hover:bg-gray-300">
                <Link to="/search">
                    <LayoutGrid className="w-4 h-4" />
                    Catálogo
                </Link>
            </Button>

            <UserMenu isDesktop = {isDesktop}></UserMenu>

            <Button aria-label="Sistema Administrativo" asChild variant="secondary" className="h-10 bg-gray-100 text-black hover:bg-gray-300">
                <a href="https://sigex.danielnasc.com.br/">
                    <ShieldCheck className="w-4 h-4" />
                </a>
            </Button>
        </div>
    )
}