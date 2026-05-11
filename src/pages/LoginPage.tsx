import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { useState } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "@/contexts/AuthContext";

/**
 * Página de autenticação — Login e Cadastro.
 *
 * Gerencia dois formulários dentro de um único componente:
 * - **Login** (`isLogin = true`): email + senha. Chama {@link useAuth.login}.
 * - **Cadastro** (`isLogin = false`): nome, instituição, email + senha.
 *   Atualmente usa credenciais fixas de instituição (temporário).
 *
 * Comportamentos comuns a ambos os formulários:
 * - Validação básica de campos obrigatórios antes do envio.
 * - Feedback de carregamento no botão de submit.
 * - Exibição de mensagem de erro abaixo dos campos.
 * - Redirecionamento para `/` em caso de sucesso.
 *
 * @remarks
 * A lógica de cadastro (`handleSubmitSignin`) é **temporária** e deve ser
 * substituída por uma chamada real à API de criação de usuário.
 *
 * @example
 * // Rota: /login
 */
export default function LoginPage() {
  /** Controla qual formulário está visível: `true` = login, `false` = cadastro. */
  const [isLogin, setIsLogin] = useState<boolean>(true);

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [institution, setInstitution] = useState<string>("");

  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const { login } = useAuth();
  const navigate = useNavigate();

  /** Muda para o formulário de cadastro e limpa erros. */
  const goToSignup = () => {
    setError(null);
    setIsLogin(false);
  };

  /** Muda para o formulário de login e limpa erros. */
  const goToLogin = () => {
    setError(null);
    setIsLogin(true);
  };

  /**
   * Handler de submissão do formulário de login.
   * Valida campos, chama `login` do contexto e redireciona em caso de sucesso.
   *
   * @param e - Evento de submissão do formulário.
   */
  const handleSubmitLogin = async (e: React.SubmitEvent) => {
    e.preventDefault();
    setError(null);

    if (!email || !password) {
      setError("Preencha todos os campos obrigatórios");
      return;
    }

    setLoading(true);
    try {
      // TEMPORÁRIO
      login({ email: email, password: password });
      navigate("/");
    } catch {
      setError("Email ou senha incorretos ou inválidos. Tente novamente");
    } finally {
      setLoading(false);
    }
  };

  /**
   * Handler de submissão do formulário de cadastro.
   * Atualmente autentica com credenciais fixas de instituição (temporário).
   *
   * @param e - Evento de submissão do formulário.
   */
  const handleSubmitSignin = async (e: React.SubmitEvent) => {
    e.preventDefault();
    setError(null);

    if (!email || !password) {
      setError("Preencha todos os campos obrigatórios");
      return;
    }

    setLoading(true);
    try {
      // TEMPORÁRIO
      login({ email: "institution@gmail.com", password: "ufcaufca" });
      navigate("/");
    } catch {
      setError("Email ou senha incorretos ou inválidos. Tente novamente");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative flex flex-row h-screen overflow-hidden">
      {/* TODO: colocar background aqui */}
      <img
        className="max-xl:hidden absolute inset-0 xl:relative xl:flex-4 object-cover object-center w-full h-full xl:blur-none"
        src="/sigex_bkg.png"
      ></img>
      <img
        className="xl:hidden absolute inset-0 xl:relative xl:flex-4 object-cover object-center w-full h-full xl:blur-none"
        src="/wave_bkg.png"
      ></img>
      <div
        className="flex flex-1 xl:z-10 xl:flex-3 items-center justify-center px-6 py-4 bg-zinc-50 xl:shadow-[-8px_0px_16px_0px_rgba(0,0,0,0.15)] overflow-y-auto"
        style={{ height: "100dvh" }}
      >
        <Card className="relative z-10 max-sm:w-7/8 sm:max-xl:w-3/5 xl:w-4/5 shadow-[4px_4px_3px_0px_rgba(0,0,0,0.1)]">
          {isLogin ? (
            <form
              onSubmit={handleSubmitLogin}
              className="flex flex-col max-md:gap-3 md:max-xl:gap-4"
            >
              <CardHeader className="gap-1">
                <CardTitle className="max-xl:text-3xl xl:text-2xl">
                  Faça seu Login
                </CardTitle>
                <CardDescription className="text-base!">
                  Insira suas informações abaixo
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="email" className="text-lg">
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                      placeholder="example@example.com"
                      required
                      className="text-base!"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center">
                      <Label htmlFor="password" className="text-lg">
                        Senha
                      </Label>
                      <Button
                        type="button"
                        variant={"link"}
                        className="ml-auto inline-block max-lg:text-base max-lg:underline lg:text-sm underline-offset-4 hover:underline"
                      >
                        Esqueceu sua senha?
                      </Button>
                    </div>
                    <Input
                      id="password"
                      type="password"
                      value={password}
                      onChange={(event) => setPassword(event.target.value)}
                      required
                      className="text-base!"
                    />
                  </div>
                </div>
                {error && (
                  <p className="text-sm text-red-600 text-center mt-4">
                    {error}
                  </p>
                )}
              </CardContent>
              <CardFooter className="mt-6">
                <CardAction className="flex flex-col gap-1 w-full">
                  <Button
                    type="submit"
                    variant={"default"}
                    className="w-full max-md:h-14 md:max-xl:h-12 xl:h-10 max-sm:text-xl sm:max-md:text-lg md:max-xl:text-base"
                    disabled={loading}
                  >
                    {loading ? "Entrando..." : "Entrar"}
                  </Button>
                  <Button
                    type="button"
                    variant={"secondary"}
                    onClick={goToSignup}
                    className="w-full max-md:h-14 md:max-xl:h-12 xl:h-10 max-sm:text-xl sm:max-md:text-lg md:max-xl:text-base bg-zinc-200 hover:bg-zinc-300"
                  >
                    Criar Conta
                  </Button>
                </CardAction>
              </CardFooter>
            </form>
          ) : (
            <form onSubmit={handleSubmitSignin}>
              <CardHeader className="gap-1">
                <CardTitle className="text-2xl">Crie sua Conta</CardTitle>
                <CardDescription className="text-base!">
                  Insira suas informações abaixo
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="name" className="text-lg">
                      Nome
                    </Label>
                    <Input
                      id="name"
                      type="name"
                      value={name}
                      onChange={(event) => setName(event.target.value)}
                      placeholder="Seu Nome Aqui"
                      required
                      className="text-base!"
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="institution" className="text-lg">
                      Instituição que Representa
                    </Label>
                    <Input
                      id="institution"
                      type="institution"
                      value={institution}
                      onChange={(event) => setInstitution(event.target.value)}
                      placeholder="Nome da Instituição"
                      required
                      className="text-base!"
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="email" className="text-lg">
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                      placeholder="example@example.com"
                      required
                      className="text-base!"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center">
                      <Label htmlFor="password" className="text-lg">
                        Senha
                      </Label>
                    </div>
                    <Input
                      id="password"
                      type="password"
                      value={password}
                      onChange={(event) => setPassword(event.target.value)}
                      required
                      className="text-base!"
                    />
                  </div>
                </div>
                {error && (
                  <p className="text-sm text-red-600 text-center mt-4">
                    {error}
                  </p>
                )}
              </CardContent>
              <CardFooter className="mt-6">
                <CardAction className="flex flex-col gap-1 w-full">
                  <Button
                    type="submit"
                    variant={"default"}
                    className="w-full max-md:h-14 md:max-xl:h-12 xl:h-10 max-sm:text-xl sm:max-md:text-lg md:max-xl:text-base"
                    disabled={loading}
                  >
                    {loading ? "Criando..." : "Criar Conta"}
                  </Button>
                  <Button
                    type="button"
                    variant={"secondary"}
                    onClick={goToLogin}
                    className="w-full max-md:h-14 md:max-xl:h-12 xl:h-10 max-sm:text-xl sm:max-md:text-lg md:max-xl:text-base bg-zinc-200 hover:bg-zinc-300"
                  >
                    Fazer Login
                  </Button>
                </CardAction>
              </CardFooter>
            </form>
          )}
        </Card>
      </div>
    </div>
  );
}
