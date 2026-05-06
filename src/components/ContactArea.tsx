import { Mail, Phone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function ContactArea() {
  return (
    <Card className="self-center w-fit bg-[#75b747]">
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
