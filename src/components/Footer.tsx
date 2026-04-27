import logoProex from "@/assets/proex-branco_total_teste.png";
import { getWindowSize } from "@/hooks/screen";
import { BREAKPOINTS } from "@/utils/constants";

export default function Footer() {
  return (
    <footer className="w-full text-white">
      <div className="flex flex-col h-fit bg-[#532b1d] gap-4">
        <div className="flex flex-row w-full lg:px-16 md:px-8 sm:px-4 px-2">
          <div className="justify-start lg:w-1/3 md:w-1/3 sm:w-1/2 w-1/2">
            <img
              src={`${logoProex}`}
              className="left-0 h-48 object-contain"
            ></img>
          </div>
          <div className="justify-start lg:w-1/3 md:w-1/3 sm:w-1/2 w-1/2 text-left text-lg py-6">
            Endereço: Av. Tenente Raimundo Rocha N° 1639 &ndash; Bairro Cidade
            Universitária Juazeiro do Norte &ndash; Ceará &ndash; CEP: 63048-080
            &ndash; Bloco "K", Salas K201 e K202 (2° Andar) &ndash; Telefone:
            (88) 3221-9286
          </div>
          {getWindowSize().width > BREAKPOINTS.small ? (
            <div className="justify-start w-1/3"></div>
          ) : (
            <></>
          )}
        </div>
        <div className="flex flex-row w-full lg:px-16 md:px-8 sm:px-4 px-2">
          <div className="text-left lg:text-lg md:text-lg sm:text-md text-sm w-2/3 font-bold">
            &copy; 2026 Pró-Reitoria de Extensão da UFCA
          </div>
          <div className="text-right lg:text-lg md:text-lg sm:text-md text-sm w-1/3 font-bold">
            Design by Guido Xenofonte
          </div>
        </div>
      </div>
    </footer>
  );
}
