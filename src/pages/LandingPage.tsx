import MainCarousel from "@/features/LandingPage/MainCarousel";
import SmallCarousel from "@/features/LandingPage/SmallCarousel";

import { format } from "date-fns";

import { scrollToTop } from "@/utils/scrollToTop";

export default function LandingPage() {
  return (
    <div className="w-full flex flex-col max-lg:gap-4 lg:gap-6">
      <MainCarousel />
      <SmallCarousel
        sectionTitle="Tecnologia"
        area_tematica={"Tecnologia"}
      ></SmallCarousel>
      <SmallCarousel
        sectionTitle="Educação"
        area_tematica={"Educação"}
      ></SmallCarousel>
      <SmallCarousel sectionTitle="Cursos" tipo_acao={"Curso"}></SmallCarousel>
      <SmallCarousel
        sectionTitle="Eventos Culturais"
        tipo_acao={"Evento"}
        area_tematica={"Cultura"}
      ></SmallCarousel>
      <SmallCarousel
        sectionTitle="Encerramento Próximo"
        data_fim={format(new Date(), "yyyy-MM-dd")}
      ></SmallCarousel>
      <section className="max-md:text-3xl md:text-4xl my-10">
        Ainda em dúvida?<br></br>
        Utilize nossa{" "}
        <a onClick={scrollToTop} className="cursor-pointer underline">
          busca por filtro
        </a>
      </section>
    </div>
  );
}
