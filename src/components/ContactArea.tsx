import { Mail, Phone } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

/**
 * Exibe as informações de contato dos projetos.
 *
 * Renderiza um card com telefone e e-mails institucionais,
 * utilizado na página de detalhe de projeto para orientar
 * interessados a entrar em contato.
 *
 * @example
 * <ContactArea />
 */
export default function ContactArea() {
  return (
    <Card className="self-center w-fit bg-zinc-200 shadow-[4px_4px_3px_0px_rgba(0,0,0,0.1)]">
      <CardHeader>
        <CardTitle className="max-lg:text-2xl lg:text-3xl font-bold">Informações de Contato</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col max-sm:gap-3 sm:max-lg:gap-4 lg:gap-6 font-bold">
        <div className="flex flex-row items-center gap-3">
          <Phone className="max-md:size-6 md:size-8 outline-black text-black"></Phone>
          <p className="max-sm:text-lg sm:max-md:text-xl md:max-lg:text-xl lg:max-xl:text-2xl xl:text-3xl">
            +55 (88) 99999-9999
          </p>
        </div>
        <div className="flex flex-row items-center gap-3">
          <Mail className="max-md:size-6 md:size-8 outline-black text-black"></Mail>
          <p className="max-sm:text-lg sm:max-md:text-xl md:max-lg:text-xl lg:max-xl:text-2xl xl:text-3xl">
            email_aluno_projeto@aluno.ufca.edu.br
          </p>
        </div>
        <div className="flex flex-row items-center gap-3">
          <Mail className="max-md:size-6 md:size-8 outline-black text-black"></Mail>
          <p className="max-sm:text-lg sm:max-md:text-xl md:max-lg:text-xl lg:max-xl:text-2xl xl:text-3xl">
            email_projeto@ufca.edu.br
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
