import { useNavigate } from "react-router";

import TagsArea from "@/components/Tags";

import { useScreenSize } from "@/hooks/useScreenSize";

import { DEFAULT_PROJECT_IMAGES } from "@/utils/images";
import type { ProjectProps } from "@/utils/globals";
import { hashId } from "@/utils/hashId";
import { BREAKPOINTS } from "@/lib/breakpoints";

export default function BigProject({
  id,
  title,
  tags,
  description,
  center,
}: ProjectProps) {
  const navigate = useNavigate();

  const { width } = useScreenSize();

  return (
    <div
      onClick={() => navigate(`/projects/${id}`)}
      className="cursor-pointer bg-cover bg-center rounded-3xl h-125 sm:h-100 md:h-120 lg:h-120 xl:h-130 2xl:h-180 flex flex-col justify-end relative"
      style={{
        backgroundImage: `url(${DEFAULT_PROJECT_IMAGES[tags[0].tagType as keyof typeof DEFAULT_PROJECT_IMAGES][hashId(id) % DEFAULT_PROJECT_IMAGES[tags[0].tagType as keyof typeof DEFAULT_PROJECT_IMAGES].length]})`,
      }}
    >
      <div className="absolute bottom-0 left-0 right-0 h-50 bg-black/20 blur-md rounded-b-3xl"></div>
      <div
        className={`flex flex-col relative z-10 max-md:px-6 px-8 xl:px-16 2xl:px-32 py-8 w-full text-gray-50 gap-2`}
      >
        <span
          className={`flex lg:text-5xl md:text-4xl sm:text-4xl max-sm:text-3xl font-bold ${center ? "self-center text-center" : ""}`}
        >
          {title}
        </span>
        <p className={`text-left ${(width < BREAKPOINTS.md) ? "text-sm" : "text-md"} line-clamp-3 opacity-80`}>
          {description ?? ""}
        </p>
        <div className={`${center ? "self-center" : ""}`}>
          <TagsArea tags={tags} size="xl" />
        </div>
      </div>
    </div>
  );
}
