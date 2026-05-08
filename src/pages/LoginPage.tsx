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

export default function LoginPage() {
  const [isLogin, setIsLogin] = useState<boolean>(true);

  return (
    <div className="flex flex-row h-screen">
      {/* TODO: colocar background aqui */}
      <div className="max-lg:hidden bg-blue-500 flex-4"></div>{" "}
      <div className="flex-2 bg-zinc-50 rounded-4xl self-center mx-24">
        <Card>
          <CardHeader className="gap-1">
            <CardTitle className="text-2xl">
              {isLogin ? "Faça seu Login" : "Crie sua Conta"}
            </CardTitle>
            <CardDescription>Insira suas informações abaixo</CardDescription>
          </CardHeader>
          <CardContent>
            <form>
              <div className="flex flex-col gap-6">
                <div className="grid gap-2">
                  <Label htmlFor="email" className="text-lg">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
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
                    required
                    className="text-base!"
                  />
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter>
            <CardAction className="flex flex-col gap-1 w-full">
              <Button
                variant={"default"}
                onClick={() => setIsLogin(false)}
                className="w-full"
              >
                Entrar
              </Button>
              <Button
                variant={"secondary"}
                onClick={() => setIsLogin(false)}
                className="w-full bg-zinc-200 hover:bg-zinc-300"
              >
                Criar Conta
              </Button>
            </CardAction>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
