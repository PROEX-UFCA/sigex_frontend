import { Info, Mail, Phone } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import ProjectGallery from "@/components/ProjectPage/ProjectGallery";

import type { ProjectData } from "@/utils/project";

import BigProject from "@/components/BigProject";
import { useParams } from "react-router";

export default function ProjectPage({
  title,
  tags,
  // description,
  images,
  // contact,
}: ProjectData) {
  const projectID = useParams<{ id: string }>();

  const hasImageList: boolean = images ? true : false;
  const isImageListEmpty: boolean = images!.imageURL.includes("");

  return (
    <div className="flex flex-col w-full">
      <BigProject
        id={projectID.id ?? ""}
        tags={tags}
        title={title}
        center
      ></BigProject>
      <div className="flex flex-col py-6">
        <div className="text-4xl font-bold underline">Descrição do Projeto</div>
        <div className="flex flex-col gap-2 text-left self-center text-lg w-3/4 ">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            orci ligula, fermentum vel felis nec, aliquet fermentum mi. Nullam
            at viverra nibh, at auctor est. Phasellus laoreet, nulla sed aliquam
            luctus, mauris dui consectetur erat, ac gravida turpis leo sit amet
            turpis. Mauris turpis sem, venenatis sed varius sit amet, malesuada
            non elit. Sed nec porttitor enim. Donec ultricies consequat
            pharetra. Mauris tellus nunc, auctor ut odio eget, hendrerit sodales
            tellus. Vivamus varius libero turpis, vitae posuere augue cursus eu.
            Donec id sapien sagittis, dapibus leo vitae, semper risus. Praesent
            turpis dolor, ornare vitae pharetra ut, blandit eget nibh. Nulla
            fringilla volutpat ex, et posuere nisl pulvinar id.
          </p>
          <p>
            Nam sed ante ut ex feugiat fringilla. Suspendisse urna mauris,
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
            faucibus est, accumsan aliquet odio ipsum vel sem.
          </p>
          <p>
            Mauris tincidunt, metus ut sollicitudin sagittis, purus lectus
            maximus risus, ut ultricies massa arcu et ex. Pellentesque habitant
            morbi tristique senectus et netus et malesuada fames ac turpis
            egestas. Nam sit amet lorem sit amet neque vestibulum rhoncus sed
            nec mauris. Morbi vulputate lorem vitae felis egestas, sit amet
            vestibulum arcu condimentum. Nulla nec sollicitudin justo. Quisque
            nec libero enim. Aenean gravida id risus eu tincidunt.
          </p>
        </div>
      </div>
      {(hasImageList && !isImageListEmpty) ? (
        <ProjectGallery imageURL={images!.imageURL} />
      ) : (
        <div className="flex flex-col w-2/3 self-center gap-4">
          <div className="text-4xl font-bold underline">Galeria</div>
          <div className="flex flex-col w-2/3 self-center text-gray-400 my-4 py-4">
            <Info className="scale-300 mb-10 self-center"></Info>
            <p className="text-3xl ">
              Galeria indisponível por ausência de conteúdo. Cheque novamente
              mais tarde!
            </p>
          </div>
        </div>
      )}
      <div className="flex flex-col justify-center py-8">
        <p className="font-bold text-5xl">Interessado?</p>
        <p className="font-bold text-2xl">Entre em contato conosco!</p>
        <Card className="self-center w-fit bg-[#75b747]">
          <CardContent className="flex flex-col gap-6 font-bold">
            <div className="flex flex-row items-center gap-3">
              <Phone className="size-8 outline-black text-black"></Phone>
              <p className="text-3xl">+55 (88) 99999-9999</p>
            </div>
            <div className="flex flex-row items-center gap-3">
              <Mail className="size-8 outline-black text-black"></Mail>
              <p className="text-3xl">email_aluno_projeto@aluno.ufca.edu.br</p>
            </div>
            <div className="flex flex-row items-center gap-3">
              <Mail className="size-8 outline-black text-black"></Mail>
              <p className="text-3xl">email_projeto@ufca.edu.br</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
