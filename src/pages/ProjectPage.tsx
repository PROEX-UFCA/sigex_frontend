import {
  CircleDollarSign,
  ScrollText,
  TriangleAlert,
  University,
} from "lucide-react";

import ProjectGallery from "@/components/ProjectGallery";

import BigProject from "@/components/BigProject";
import { useNavigate, useParams } from "react-router";
import { getProjectByID } from "@/services/projectServices";
import { useEffect, useState } from "react";
import { Spinner } from "@/components/ui/spinner";
import type { Project } from "@/types";
import recognizeTags from "@/utils/tagRecognition";
import { Button } from "@/components/ui/button";
import { useScreenSize } from "@/hooks/useScreenSize";
import ContactArea from "@/components/ContactArea";
import { useAuth } from "@/contexts/AuthContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import getTextFromHTML from "@/utils/getTextFromHTML";
import ODSGrid from "@/components/ODSGrid";

/**
 * Página de detalhe de um projeto específico.
 *
 * Busca o projeto pelo `id` presente no parâmetro de rota `/projects/:id`
 * via {@link getProjectByID}. Exibe:
 * - {@link BigProject} com imagem de capa centralizada.
 * - Descrição do projeto com expansão "Ler mais / Ler menos"
 *   (truncagem baseada na largura da tela).
 * - {@link ProjectGallery} com as imagens do projeto.
 * - {@link ContactArea} com informações de contato.
 *
 * Estados de renderização:
 * - **Carregando** → spinner.
 * - **Projeto não encontrado** → mensagem de erro.
 * - **Projeto carregado** → conteúdo completo.
 *
 * @remarks
 * O campo `content` (descrição) é atualmente um placeholder Lorem Ipsum
 * e deve ser substituído pelo campo real da API quando disponível.
 *
 * @example
 * // Rota: /projects/42
 */
export default function ProjectPage() {
  const projectID = useParams<{ id: string }>();

  const { width } = useScreenSize();
  const { role } = useAuth();

  const [results, setResults] = useState<Project | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  /** Controla se o texto de descrição está expandido ou truncado. */
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const navigate = useNavigate();

  const toggleExpansion = () =>
    setIsExpanded((previousState) => !previousState);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getProjectByID(projectID.id!);
      setResults(data!);
      setLoading(false);
    };
    fetchData();
  }, [projectID.id]);

  const content = getTextFromHTML({ htmlString: results?.resumo ?? "" });

  if (loading)
    return (
      <div className="flex flex-col w-full items-center gap-2 text-gray-400">
        <Spinner className="w-12 h-12" />
        <p className="max-sm:text-xl sm:max-lg:text-2xl text-3xl">
          Buscando resultados...
        </p>
      </div>
    );

  if (!results?.id)
    return (
      <div className="flex flex-col w-2/3 self-center text-gray-400 my-4 py-4">
        <TriangleAlert className="scale-400 mb-10 self-center" />
        <p className="max-sm:text-2xl sm:max-lg:text-3xl text-4xl">
          Não foi possível obter os dados referentes a este projeto. Tente
          novamente mais tarde!
        </p>
      </div>
    );

  /**
   * Texto de descrição a exibir: completo quando expandido ou quando a
   * largura da tela excede o comprimento do texto; truncado caso contrário.
   */
  const shownContent =
    isExpanded || width > content.length
      ? content
      : `${content.substring(0, width)}...`;

  const tags = recognizeTags([results.area_tematica]);
  return (
    <div className="flex flex-col w-full gap-1">
      <BigProject
        id={projectID.id ?? ""}
        tags={tags}
        title={results.titulo}
        center
      ></BigProject>
      <div className="flex flex-col py-6">
        <p className="max-lg:text-3xl lg:text-4xl font-bold underline">
          Descrição do Projeto
        </p>
        <div className="flex flex-col gap-2 text-left self-center text-lg max-md:w-7/8 md:max-xl:w-5/6 xl:w-3/4 ">
          <p>{shownContent}</p>
          {content.length > width ? (
            <Button
              onClick={toggleExpansion}
              className="bg-zinc-200 hover:bg-zinc-300 text-zinc-800 text-xl h-12 w-3/4 self-center hover:-translate-y-0.5 active:translate-y-2 transition-transform duration-100 ease-in-out"
            >
              {isExpanded ? "Ler menos" : "Ler mais"}
            </Button>
          ) : (
            <></>
          )}
        </div>
      </div>
      <div className="flex flex-col pb-4 gap-2">
        <p className="max-sm:text-2xl sm:max-lg:text-3xl lg:text-4xl font-bold underline">
          Objetivos de Desenvolvimento Sustentável - ODS
        </p>
        <ODSGrid odsListStr={results.ods}></ODSGrid>
      </div>
      <ProjectGallery
        imageURL={
          typeof results.img === "string" ? [results.img] : (results.img ?? [])
        }
      />
      <div className="flex flex-col self-center justify-center py-8">
        <p className="font-bold max-lg:text-3xl lg:text-4xl">Interessado?</p>
        {role === "Instituição" && (
          <>
            <p className="font-bold text-2xl">Entre em contato conosco!</p>
            <ContactArea />
          </>
        )}
        {role === "Aluno" && (
          <>
            <p className="font-bold text-2xl">Participe também do projeto!</p>
            <div className="flex max-lg:flex-col lg:flex-row gap-6">
              <ContactArea />
              <Card className="self-center w-fit bg-zinc-200 shadow-[4px_4px_3px_0px_rgba(0,0,0,0.1)]">
                <CardHeader>
                  <CardTitle className="max-lg:text-2xl lg:text-3xl font-bold">
                    Informações do Projeto
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col max-sm:gap-3 sm:max-lg:gap-4 lg:gap-6 font-bold">
                  <div className="flex flex-row items-center gap-3">
                    <CircleDollarSign className="max-md:size-6 md:size-8 outline-black text-black"></CircleDollarSign>
                    <p className="max-sm:text-lg sm:max-md:text-xl md:max-lg:text-xl lg:max-xl:text-2xl xl:text-3xl">
                      Bolsas disponíveis: 2
                    </p>
                  </div>
                  <div className="flex flex-row items-center gap-3">
                    <University className="max-md:size-6 md:size-8 outline-black text-black"></University>
                    <p className="max-sm:text-lg sm:max-md:text-xl md:max-lg:text-xl lg:max-xl:text-2xl xl:text-3xl">
                      Centro Acadêmico: CCSA
                    </p>
                  </div>
                  <div className="flex flex-row items-center gap-3">
                    <ScrollText className="max-md:size-6 md:size-8 outline-black text-black"></ScrollText>
                    <p className="max-sm:text-lg sm:max-md:text-xl md:max-lg:text-xl lg:max-xl:text-2xl xl:text-3xl">
                      Modalidade: Ampla Concorrência
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </>
        )}
        {role === null && (
          <>
            <p className="font-bold text-2xl">
              <span
                className="underline-offset-6 underline cursor-pointer"
                onClick={() => navigate("/login")}
              >
                Faça seu login
              </span>{" "}
              para ver mais informações.
            </p>
          </>
        )}
      </div>
    </div>
  );
}
