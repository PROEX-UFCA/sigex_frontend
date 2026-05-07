import { TriangleAlert } from "lucide-react";

import ProjectGallery from "@/components/ProjectPage/ProjectGallery";

import BigProject from "@/components/BigProject";
import { useParams } from "react-router";
import { getProjectByID } from "@/services/projectServices";
import { useEffect, useState } from "react";
import { Spinner } from "@/components/ui/spinner";
import type { Project } from "@/types";
import recognizeTags from "@/utils/tagRecognition";
import { Button } from "@/components/ui/button";
import { useScreenSize } from "@/hooks/useScreenSize";
import ContactArea from "@/components/ContactArea";

export default function ProjectPage() {
  const projectID = useParams<{ id: string }>();

  const { width } = useScreenSize();

  const [results, setResults] = useState<Project>({} as Project);
  const [loading, setLoading] = useState<boolean>(true);

  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const toggleExpansion = () =>
    setIsExpanded((previousState) => !previousState);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getProjectByID(projectID.id!);
      setResults(data!);
      setLoading(false);
    };
    fetchData();
  }, [projectID]);

  const content = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            orci ligula, fermentum vel felis nec, aliquet fermentum mi. Nullam
            at viverra nibh, at auctor est. Phasellus laoreet, nulla sed aliquam
            luctus, mauris dui consectetur erat, ac gravida turpis leo sit amet
            turpis. Mauris turpis sem, venenatis sed varius sit amet, malesuada
            non elit. Sed nec porttitor enim. Donec ultricies consequat
            pharetra. Mauris tellus nunc, auctor ut odio eget, hendrerit sodales
            tellus. Vivamus varius libero turpis, vitae posuere augue cursus eu.
            Donec id sapien sagittis, dapibus leo vitae, semper risus. Praesent
            turpis dolor, ornare vitae pharetra ut, blandit eget nibh. Nulla
            fringilla volutpat ex, et posuere nisl pulvinar id. Nam sed ante ut ex feugiat fringilla. Suspendisse urna mauris,
            mattis vitae purus ut, porta pellentesque odio. Duis at tellus eu
            nunc hendrerit euismod. Aenean at metus fermentum, varius mauris
            vel, pulvinar elit. Nunc laoreet lorem quis elit imperdiet
            tincidunt. Etiam ultricies suscipit justo in auctor. Nulla et elit
            ornare, posuere velit ut, aliquam odio. Nulla facilisi. Nullam
            tempus, metus vel vehicula blandit, justo lorem placerat nisl, ac
            malesuada odio urna vel metus. Nulla eget imperdiet tortor. Praesent
            nec tortor posuere, vulputate neque a, aliquam nibh. Suspendisse et
            fermentum ligula. Sed et lectus faucibus, gravida libero ut, tempus
            eros. Nulla facilisi. Sed in nulla tincidunt, finibus massa sed,
            semper diam. Maecenas aliquet, nibh id consectetur pulvinar, mi ante
            faucibus est, accumsan aliquet odio ipsum vel sem.`;

  if (loading)
    return (
      <div className="flex flex-col w-full items-center gap-2 text-gray-400">
        <Spinner className="w-12 h-12" />
        <p className="max-sm:text-xl sm:max-lg:text-2xl text-3xl">
          Buscando resultados...
        </p>
      </div>
    );

  if (!results.id)
    return (
      <div className="flex flex-col w-2/3 self-center text-gray-400 my-4 py-4">
        <TriangleAlert className="scale-400 mb-10 self-center" />
        <p className="max-sm:text-2xl sm:max-lg:text-3xl text-4xl">
          Não foi possível obter os dados referentes a este projeto. Tente
          novamente mais tarde!
        </p>
      </div>
    );

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
      <ProjectGallery
        imageURL={
          typeof results.img === "string" ? [results.img] : (results.img ?? [])
        }
      />
      <div className="flex flex-col self-center justify-center py-8">
        <p className="font-bold max-lg:text-3xl lg:text-4xl">Interessado?</p>
        <p className="font-bold text-2xl">Entre em contato conosco!</p>
        <ContactArea />
      </div>
    </div>
  );
}
