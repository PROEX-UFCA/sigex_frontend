import { SheetClose } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { User } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate, Link } from "react-router";

interface UserMenuProps {
  isDesktop: boolean;
}

export function UserMenu({isDesktop}:UserMenuProps) {
    const { role, logout } = useAuth();
    const navigate = useNavigate();

    if (isDesktop) {
        return !role ? (
            <Button asChild variant="secondary" className="h-10 bg-gray-100 text-black hover:bg-gray-300">
                <Link to="/login">
                    <User className="w-4 h-4" />
                    Faça seu login
                </Link>
            </Button>
        ) : (
            <div className="flex flex-row">
                <Button asChild variant="secondary" className="h-10 bg-gray-100 text-black hover:bg-gray-300 rounded-r-none">
                    <Link to="/profile">
                        <User className="w-4 h-4" />
                        Sua conta
                    </Link>
                </Button>
                <Button variant="ghost" className="h-10 bg-[#d2c293] text-black hover:bg-[#e6b351] hover:text-white rounded-l-none" onClick={logout}>
                    Sair
                </Button>
            </div>
        );
    } 
    else //não é desktop (tablet ou mobile)
        {
        return !role ? (
            <SheetClose asChild className="mt-auto">
                <Button
                    variant={"secondary"}
                    className="max-sm:text-lg sm:max-lg:text-xl lg:text-2xl h-16 hover:bg-zinc-200 w-full items-center justify-start px-5 hover:cursor-pointer rounded-none"
                    onClick={() => navigate("/login")}
                >
                    <User className="w-6! h-6!" strokeWidth={2.2} />
                    Faça seu login
                </Button>
            </SheetClose>
        ) : (
            <div className="flex flex-row mt-auto bg-grey-100 w-full">
                <SheetClose asChild className="flex-5">
                    <Button
                        variant={"secondary"}
                        className="max-sm:text-lg sm:max-lg:text-xl lg:text-2xl h-16 hover:bg-zinc-200 flex items-center justify-start px-5 hover:cursor-pointer rounded-none"
                    >
                        <User className="w-6! h-6!" strokeWidth={2.2} />
                        <p>Sua conta</p>
                    </Button>
                </SheetClose>
                <SheetClose asChild className="flex-1">
                    <Button
                        variant={"destructive"}
                        className="h-16 bg-gray-100 text-black max-sm:text-lg sm:max-lg:text-xl lg:text-2xl hover:bg-gray-300 rounded-none " 
                        onClick={logout}
                    >
                        Sair
                    </Button>
                </SheetClose>
            </div>
        );
    }

}