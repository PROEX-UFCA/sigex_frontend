import { useNavigate } from "react-router";

import TagsArea from "@/components/Tags";

import { useScreenSize } from "@/hooks/useScreenSize";

import { DEFAULT_PROJECT_IMAGES } from "@/utils/images";
import type { ProjectProps } from "@/types";
import { hashId } from "@/utils/hashId";
import { BREAKPOINTS } from "@/lib/breakpoints";

export default function BigProject({
  id,
  title,
  tags,
  description,
  center = false,
}: ProjectProps) {
  const navigate = useNavigate();

  const { width } = useScreenSize();

  return (
    <div
      onClick={() => navigate(`/projects/${id}`)}
      className="cursor-pointer bg-cover bg-center rounded-3xl h-125 max-lg:h-160 lg:h-130 2xl:h-180 flex flex-col justify-end relative"
      style={{
        backgroundImage: `url(${DEFAULT_PROJECT_IMAGES[tags[0].tagType as keyof typeof DEFAULT_PROJECT_IMAGES][hashId(id) % DEFAULT_PROJECT_IMAGES[tags[0].tagType as keyof typeof DEFAULT_PROJECT_IMAGES].length]})`,
      }}
    >
      <div className="absolute inset-0 bg-linear-to-b from-transparent max-md:from-50% md:from-60% to-black/70 rounded-b-3xl"></div>
      <div
        className={`flex flex-col relative z-10 max-md:px-6 px-8 xl:px-16 2xl:px-32 py-8 text-gray-50 gap-2 w-full overflow-hidden`}
      >
        <p
          className={`block line-clamp-3 wrap-break-word max-sm:text-2xl sm:max-lg:text-3xl lg:max-2xl:text-4xl 2xl:text-5xl font-bold ${center ? "text-center" : "text-left"}`}
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
