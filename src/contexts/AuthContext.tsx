import { createContext, useContext, useState, type ReactNode } from "react";

type UserRole = "institution" | "student" | null;

interface LoginInfo {
  email: string;
  password: string;
}

interface AuthContextType {
  role: UserRole;
  login: ({ email, password }: LoginInfo) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [role, setRole] = useState<UserRole>(null);

  const login = ({ email, password }: LoginInfo) => {
    // TEMPORÁRIO
    if (email === "institution@gmail.com" && password === "ufcaufca") {
      setRole("institution");
      return;
    }

    // TEMPORÁRIO
    if (email === "aluno@gmail.com" && password === "ufcaufca") {
      setRole("student");
      return;
    }

    throw Error("Login Inválido");
  };
  const logout = () => setRole(null);

  return (
    <AuthContext.Provider value={{ role, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context)
    throw new Error(
      "Erro de contexto: useAuth deve estar dentro de um AuthProvider",
    );
  return context;
}
