import { useNavigate } from "react-router";

import { DEFAULT_PROJECT_IMAGES } from "@/utils/images";
import type { ProjectProps } from "@/utils/globals";
import TagsArea from "@/components/Tags";
import { hashId } from "@/utils/hashId";

export default function BigProject({
  id,
  title,
  tags,
  description,
  center,
}: ProjectProps) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/projects/${id}`)}
      className="cursor-pointer bg-cover bg-center rounded-3xl 2xl:h-180 xl:h-130 lg:h-120 md:h-120 sm:h-100 h-125 flex flex-col justify-end relative"
      style={{
        backgroundImage: `url(${DEFAULT_PROJECT_IMAGES[tags[0].tagType as keyof typeof DEFAULT_PROJECT_IMAGES][hashId(id) % DEFAULT_PROJECT_IMAGES[tags[0].tagType as keyof typeof DEFAULT_PROJECT_IMAGES].length]})`,
      }}
    >
      <div className="absolute bottom-0 left-0 right-0 lg:h-55 md:h-60 sm:h-80 h-80 bg-black/20 blur-md rounded-b-3xl"></div>
      <div
        className={`flex flex-col relative z-10 lg:px-20 md:p-10 sm:p-8 p-8 w-full text-gray-50 ${center ? "" : "mx-5"} gap-2`}
      >
        <span
          className={`flex lg:text-5xl md:text-4xl sm:text-4xl max-sm:text-3xl font-bold ${center ? "self-center text-center" : ""}`}
        >
          {title}
        </span>
        <span className="flex text-left md:text-lg max-md:text-md opacity-80">
          {description ?? ""}
        </span>
        <div className={`${center ? "self-center" : ""}`}>
          <TagsArea tags={tags} size="xl" />
        </div>
      </div>
    </div>
  );
}
