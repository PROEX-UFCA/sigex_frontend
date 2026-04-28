import { useNavigate } from "react-router";

import { useScreenSize } from "@/hooks/useScreenSize";

import type { ProjectDataValues } from "@/utils/globals";
import { DEFAULT_PROJECT_IMAGES } from "@/utils/images";
import { BREAKPOINTS } from "@/utils/constants";

import TagsArea from "@/components/Tags";
import { hashId } from "@/utils/hashId";

export default function SmallProject({ id, title, tags }: ProjectDataValues) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/projects/${id}`)}
      className="relative cursor-pointer bg-cover bg-center w-full h-48 md:h-52 lg:h-60 rounded-xl p-4 flex flex-col justify-end shadow-sm gap-2"
      style={{
        backgroundImage: `url(${DEFAULT_PROJECT_IMAGES[tags[0].tagType as keyof typeof DEFAULT_PROJECT_IMAGES][hashId(id) % DEFAULT_PROJECT_IMAGES[tags[0].tagType as keyof typeof DEFAULT_PROJECT_IMAGES].length]})`,
      }}
    >
      <div className="absolute inset-0 bg-linear-to-b from-transparent from-30% to-black/40 rounded-xl"></div>
      <p className="z-2 flex font-bold text-gray-50 text-xl text-left">
        {title}
      </p>
      <TagsArea
        tags={tags}
        size={useScreenSize().width > BREAKPOINTS.medium ? "md" : "sm"}
      ></TagsArea>
    </div>
  );
}
