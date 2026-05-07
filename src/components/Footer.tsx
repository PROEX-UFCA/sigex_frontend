import logoProex from "/proex-branco_total_teste.png";
import socialMedia from "/Redes-sociais-branca.png";

import { useScreenSize } from "@/hooks/useScreenSize";
import { BREAKPOINTS } from "@/lib/breakpoints";

export default function Footer() {
  const { width } = useScreenSize();

  return (
    <footer className="w-full text-white">
      <div className="flex flex-col h-fit bg-[#532b1d] gap-4">
        <div className="flex flex-row w-full lg:px-16 md:px-8 sm:px-4 px-2">
          <div className="justify-start lg:w-1/3 w-1/2">
            <img
              src={`${logoProex}`}
              className="left-0 h-48 object-contain"
            ></img>
          </div>
          <div className="flex flex-col justify-start w-1/2 lg:w-1/3 text-left max-sm:text-sm sm:max-lg:text-base lg:text-lg py-6">
            <p>
              Endereço: Av. Tenente Raimundo Rocha N° 1639 &ndash; Bairro Cidade
              Universitária Juazeiro do Norte &ndash; Ceará &ndash; CEP:
              63048-080 &ndash; Bloco "K", Salas K201 e K202 (2° Andar) &ndash;
              Telefone: (88) 3221-9286
            </p>
            {width < BREAKPOINTS.lg ? (
              <div className="flex w-full justify-center self-center items-center">
                <img
                  src={`${socialMedia}`}
                  className="h-20 object-contain"
                ></img>
              </div>
            ) : (
              <></>
            )}
          </div>
          {width >= BREAKPOINTS.lg ? (
            <div className="flex lg:w-1/3 w-1/2 justify-center self-center items-center">
              <img
                src={`${socialMedia}`}
                className="left-0 h-20 object-contain"
              ></img>
            </div>
          ) : (
            <></>
          )}
        </div>
        <div className="flex flex-row w-full lg:px-16 md:px-8 sm:px-4 px-2">
          <div className="text-left lg:text-lg md:text-lg sm:text-md text-sm w-2/3 font-bold">
            &copy; 2026 Pró-Reitoria de Extensão da UFCA
          </div>
          <div className="text-right lg:text-lg md:text-lg sm:text-md text-sm w-2/3 font-bold">
            Design by Guido Xenofonte
          </div>
        </div>
      </div>
    </footer>
  );
}
