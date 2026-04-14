import { useNavigate } from "react-router";

import { getWindowSize } from "@/hooks/screen";

import type { ProjectDataValues } from "@/utils/globals";
import { DEFAULT_PROJECT_IMAGES } from "@/utils/images";
import { BREAKPOINTS } from "@/utils/constants";

import TagsArea from "@/components/Tags";

export default function SmallProject({ id, title, tags }: ProjectDataValues) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/projects/${id}`)}
      className="cursor-pointer bg-cover bg-center w-full h-48 md:h-52 lg:h-60 rounded-xl p-4 flex flex-col justify-end shadow-sm gap-2"
      style={{
        backgroundImage: `url(${DEFAULT_PROJECT_IMAGES[tags[0].tagType as keyof typeof DEFAULT_PROJECT_IMAGES][Number(id) % DEFAULT_PROJECT_IMAGES[tags[0].tagType as keyof typeof DEFAULT_PROJECT_IMAGES].length]})`,
      }}
    >
      <p className="flex font-bold text-black text-xl leading-tight">{title}</p>
      <TagsArea
        tags={tags}
        size={getWindowSize().width > BREAKPOINTS.medium ? "md" : "sm"}
      ></TagsArea>
    </div>
  );
}
