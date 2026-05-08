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

export default function LoginPage() {
  const [isLogin, setIsLogin] = useState<boolean>(true);

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [institution, setInstitution] = useState<string>("");
  
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const { login } = useAuth();
  const navigate = useNavigate();

  const goToSignup = () => {
    setError(null);
    setIsLogin(false);
  };

  const goToLogin = () => {
    setError(null);
    setIsLogin(true);
  };

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
    <div className="flex flex-row h-screen">
      {/* TODO: colocar background aqui */}
      <div className="max-lg:hidden bg-blue-500 flex-4"></div>{" "}
      <div className="flex-2 bg-zinc-50 rounded-4xl self-center mx-24">
        <Card>
          {isLogin ? (
            <form onSubmit={handleSubmitLogin}>
              <CardHeader className="gap-1">
                <CardTitle className="text-2xl">Faça seu Login</CardTitle>
                <CardDescription>
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
                        variant={"link"}
                        className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
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
                    className="w-full"
                    disabled={loading}
                  >
                    {loading ? "Entrando..." : "Entrar"}
                  </Button>
                  <Button
                    type="button"
                    variant={"secondary"}
                    onClick={goToSignup}
                    className="w-full bg-zinc-200 hover:bg-zinc-300"
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
                <CardDescription>
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
                    className="w-full"
                    disabled={loading}
                  >
                    {loading ? "Criando..." : "Criar Conta"}
                  </Button>
                  <Button
                    type="button"
                    variant={"secondary"}
                    onClick={goToLogin}
                    className="w-full bg-zinc-200 hover:bg-zinc-300"
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
