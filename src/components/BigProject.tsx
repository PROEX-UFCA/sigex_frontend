import { useNavigate } from "react-router";

import TagsArea from "@/components/Tags";

import { useScreenSize } from "@/hooks/useScreenSize";

import { DEFAULT_PROJECT_IMAGES, FALLBACK_IMAGE_KEY } from "@/utils/images";
import type { ProjectProps, TagAttributes } from "@/types";
import { hashId } from "@/utils/hashId";
import { BREAKPOINTS } from "@/lib/breakpoints";

/**
 * Card grande de projeto com imagem de fundo, título, descrição e tags.
 *
 * A imagem de fundo é selecionada deterministicamente a partir da categoria
 * principal do projeto (primeira tag) e do hash do ID, garantindo consistência
 * entre renderizações. Um gradiente escuro na parte inferior garante legibilidade
 * do texto sobre a imagem.
 *
 * Ao ser clicado, navega para a página de detalhe do projeto (`/projects/:id`).
 *
 * @param id          - Identificador único do projeto.
 * @param title       - Título do projeto.
 * @param tags        - Array de tags do projeto; a primeira define a categoria visual.
 * @param description - Texto descritivo exibido abaixo do título (opcional).
 * @param center      - Se `true`, centraliza o conteúdo de texto. Padrão: `false`.
 *
 * @example
 * <BigProject
 *   id="42"
 *   title="Projeto de Extensão"
 *   tags={[{ tagType: "Tecnologia" }]}
 *   description="Descrição breve..."
 *   center
 * />
 */
export default function BigProject({
  id,
  title,
  tags,
  description,
  center = false,
}: ProjectProps) {
  const navigate = useNavigate();

  const { width } = useScreenSize();

  const primaryTagType: string =
    (tags[0]?.tagType as keyof typeof DEFAULT_PROJECT_IMAGES) ??
    FALLBACK_IMAGE_KEY;
  const imageList =
    DEFAULT_PROJECT_IMAGES[
      primaryTagType as keyof typeof DEFAULT_PROJECT_IMAGES
    ];
  const backgroundImage = imageList[hashId(id) % imageList.length];

  return (
    <div
      onClick={() => navigate(`/projects/${id}`)}
      className="cursor-pointer bg-cover bg-center rounded-3xl h-125 max-lg:h-160 lg:h-130 2xl:h-180 flex flex-col justify-end relative"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className="absolute inset-0 bg-linear-to-b from-transparent max-md:from-50% md:from-60% to-black/70 rounded-b-3xl"></div>
      <div className="flex flex-col relative z-10 max-md:px-6 px-8 xl:px-16 2xl:px-32 py-8 text-gray-50 gap-2 w-full overflow-hidden">
        <p
          className={`block max-sm:text-2xl sm:max-lg:text-3xl lg:max-2xl:text-4xl 2xl:text-5xl font-bold ${center ? "text-center" : "text-left"}`}
        >
          {title}
        </p>
        <p
          className={`text-left ${width < BREAKPOINTS.md ? "text-sm" : "text-md"} line-clamp-3 opacity-80`}
        >
          {description ?? ""}
        </p>
        <div className={`${center ? "self-center" : ""}`}>
          <TagsArea tags={tags} size="xl" />
        </div>
      </div>
    </div>
  );
}
