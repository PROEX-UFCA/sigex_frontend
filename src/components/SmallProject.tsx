import { useNavigate } from "react-router";

import { useScreenSize } from "@/hooks/useScreenSize";

import type { ProjectProps } from "@/utils/globals";
import { DEFAULT_PROJECT_IMAGES } from "@/utils/images";

import TagsArea from "@/components/Tags";
import { hashId } from "@/utils/hashId";
import { getActiveBreakpoint } from "@/utils/breakpoints";

export default function SmallProject({ id, title, tags }: ProjectProps) {
  const navigate = useNavigate();

  const { width } = useScreenSize();
  const windowSize = getActiveBreakpoint(width);
  

  return (
    <div
      onClick={() => navigate(`/projects/${id}`)}
      className="relative cursor-pointer bg-cover bg-center w-full h-60 md:h-64 lg:h-72 rounded-xl p-4 flex flex-col justify-end shadow-sm max-md:gap-1 md:gap-2"
      style={{
        backgroundImage: `url(${DEFAULT_PROJECT_IMAGES[tags[0].tagType as keyof typeof DEFAULT_PROJECT_IMAGES][hashId(id) % DEFAULT_PROJECT_IMAGES[tags[0].tagType as keyof typeof DEFAULT_PROJECT_IMAGES].length]})`,
      }}
    >
      <div className="absolute inset-0 bg-linear-to-b from-transparent max-md:from-10% md:from-30% to-black/50 rounded-xl"></div>
      <p className="z-2 flex font-bold text-gray-50 max-md:text-lg md:text-xl text-left">
        {title}
      </p>
      <TagsArea
        tags={tags}
        size={(windowSize != "xs" && windowSize != "sm") ? "md" : "sm"}
      ></TagsArea>
    </div>
  );
}
