import { useNavigate } from "react-router";

import { useScreenSize } from "@/hooks/useScreenSize";

import { DEFAULT_PROJECT_IMAGES, FALLBACK_IMAGE_KEY } from "@/utils/images";

import TagsArea from "@/components/Tags";
import { hashId } from "@/utils/hashId";
import { BREAKPOINTS } from "@/lib/breakpoints";

import type { ProjectProps } from "@/types";

/**
 * Card compacto de projeto, utilizado em listas e carrosséis.
 *
 * Exibe o título e as tags sobre uma imagem de fundo com gradiente.
 * A imagem é selecionada deterministicamente via {@link hashId} e
 * {@link DEFAULT_PROJECT_IMAGES}, da mesma forma que {@link BigProject}.
 *
 * Ao ser clicado, navega para `/projects/:id`.
 *
 * @param id    - Identificador único do projeto.
 * @param title - Título do projeto.
 * @param tags  - Tags do projeto; a primeira define a categoria visual.
 *
 * @example
 * <SmallProject id="7" title="Curso de Programação" tags={[{ tagType: "Tecnologia" }]} />
 */
export default function SmallProject({ id, title, tags }: ProjectProps) {
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
      className="relative cursor-pointer bg-cover bg-center w-full h-60 md:h-64 lg:h-72 rounded-xl p-4 flex flex-col justify-end shadow-sm max-md:gap-1 md:gap-2 overflow-hidden"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className="absolute inset-0 bg-linear-to-b from-transparent max-md:from-10% md:from-30% to-black/60 rounded-xl"></div>
      <p className="z-2 font-bold text-gray-50 max-sm:text-sm sm:text-base max-md:text-lg md:text-xl text-left line-clamp-2 wrap-break-word">
        {title}
      </p>
      <TagsArea
        tags={tags}
        size={width >= BREAKPOINTS.md ? "md" : "sm"}
      ></TagsArea>
    </div>
  );
}
