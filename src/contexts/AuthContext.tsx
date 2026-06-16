import apiConnection from "@/services/api";
import axios from "axios";
import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

/** Papel do usuário autenticado. `null` indica que não há sessão ativa. */
type UserRole =
  | "Desenvolvimento"
  | "Administrador"
  | "Coordenador"
  | "Aluno"
  | "Instituição"
  | null;

/** Credenciais usadas no processo de login. */
interface LoginInfo {
  email: string;
  password: string;
}

/** Forma do contexto de autenticação exposto pelo {@link AuthProvider}. */
interface AuthContextType {
  role: UserRole;
  login: ({ email, password }: LoginInfo) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

/**
 * Provedor de autenticação da aplicação.
 *
 * Mantém o estado do papel (`role`) do usuário e expõe as funções
 * `login` e `logout` para os componentes filhos através do `AuthContext`.
 *
 * @remarks
 * A lógica de login atual é **temporária** (credenciais fixas em código).
 * Deve ser substituída por uma chamada de API real antes de ir a produção.
 *
 * @param children - Árvore de componentes que terão acesso ao contexto.
 *
 * @example
 * <AuthProvider>
 *   <App />
 * </AuthProvider>
 */
export function AuthProvider({ children }: { children: ReactNode }) {
  const [role, setRole] = useState<UserRole>(null);

  useEffect(() => {
    apiConnection
      .post("/me")
      .then((response) => setRole(response.data.role as UserRole))
      .catch(() => setRole(null));
  }, []);

  const login = async ({ email, password }: LoginInfo) => {
    try {
      await axios.get(`http://localhost:8000/sanctum/csrf-cookie`, {
        withCredentials: true,
      });

      const response = await apiConnection.post("/login", { email, password });
      setRole(response.data.role);
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        const status: number | undefined = error.response?.status;
        const message: string | undefined = error.response?.data?.message;

        if (status === 401) {
          throw new Error(message ?? "Credenciais inválidas");
        }

        throw new Error(`Erro inesperado no servidor: código ${status}`);
      }

      throw new Error("Ocorreu um erro inesperado");
    }
  };

  const logout = async () => {
    await apiConnection.post("/logout");
    setRole(null);
  };

  return (
    <AuthContext.Provider value={{ role, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

/**
 * Hook para consumir o contexto de autenticação.
 *
 * Deve ser utilizado exclusivamente dentro de um componente que seja
 * descendente de {@link AuthProvider}. Caso contrário, lança um erro.
 *
 * @returns O valor atual do {@link AuthContextType}.
 *
 * @throws {Error} Se chamado fora de um `AuthProvider`.
 *
 * @example
 * const { role, login, logout } = useAuth();
 */
export function useAuth() {
  const context = useContext(AuthContext);
  if (!context)
    throw new Error(
      "Erro de contexto: useAuth deve estar dentro de um AuthProvider",
    );
  return context;
}
