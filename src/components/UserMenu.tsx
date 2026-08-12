import { SheetClose } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { User } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate, Link } from "react-router";

interface UserMenuProps {
  isDesktop: boolean;
}

interface AccountActionButtonProps {
  isLoggedIn: boolean;
  isDesktop: boolean;
  onLogin: () => void;
  onProfile: () => void;
}

function AccountActionButton({
  isLoggedIn,
  isDesktop,
  onLogin,
  onProfile,
}: AccountActionButtonProps) {
  const label = isLoggedIn ? "Sua conta" : "Faça seu login";
  const iconSize = isDesktop ? "w-4 h-4" : "w-6 h-6";
  const desktopClasses = `h-10 bg-gray-100 text-black hover:bg-gray-300 ${
    isLoggedIn ? "rounded-r-none" : ""
  }`;
  const mobileClasses =
    "mt-auto max-sm:text-lg sm:max-lg:text-xl lg:text-2xl h-16 hover:bg-zinc-200 w-full items-center justify-start px-5 hover:cursor-pointer rounded-none flex";

  if (isDesktop) {
    return (
      <Button asChild variant="secondary" className={desktopClasses}>
        <Link to={isLoggedIn ? "/profile" : "/login"}>
          <User className={iconSize} />
          {label}
        </Link>
      </Button>
    );
  }

  return (
    <Button
      asChild
      variant="secondary"
      className={mobileClasses}
      onClick={isLoggedIn ? onProfile : onLogin}
    >
      <Link to={isLoggedIn ? "/profile" : "/login"} className="flex flex-row gap-1.5">
        <User className={iconSize} strokeWidth={2.2} />
        {label}
      </Link>
      
    </Button>
  );
}

export function UserMenu({isDesktop}:UserMenuProps) {
    const { role, logout } = useAuth();
    const navigate = useNavigate();
    const isLoggedIn = Boolean(role);

    const handleLogin = () => navigate("/login");
    const handleProfile = () => navigate("/profile");

    if (isDesktop) {
        return (
            <div className="flex flex-row">
                <AccountActionButton
                    isLoggedIn={isLoggedIn}
                    isDesktop
                    onLogin={handleLogin}
                    onProfile={handleProfile}
                />
                {isLoggedIn && (
                    <Button
                        variant="ghost"
                        className="h-10 bg-[#d2c293] text-black hover:bg-[#e6b351] hover:text-white rounded-l-none"
                        onClick={logout}
                    >
                        Sair
                    </Button>
                )}
            </div>
        );
    }

    if (!isLoggedIn) {
        return (
            <SheetClose asChild className="mt-auto w-full">
                <AccountActionButton
                    isLoggedIn={false}
                    isDesktop={false}
                    onLogin={handleLogin}
                    onProfile={handleProfile}
                />
            </SheetClose>
        );
    }

    return (
        <div className="mt-auto flex w-full flex-row gap-0 bg-gray-100">
            <div className="flex-3 min-w-0">
                <SheetClose asChild>
                    <div className="w-full">
                        <AccountActionButton
                            isLoggedIn
                            isDesktop={false}
                            onLogin={handleLogin}
                            onProfile={handleProfile}
                        />
                    </div>
                </SheetClose>
            </div>
            <div className="flex-1 min-w-0">
                <SheetClose asChild>
                    <Button
                        variant="destructive"
                        className="h-16 w-full rounded-none bg-gray-100 text-black max-sm:text-lg sm:max-lg:text-xl lg:text-2xl hover:bg-gray-300"
                        onClick={logout}
                    >
                        Sair
                    </Button>
                </SheetClose>
            </div>
        </div>
    );
}
