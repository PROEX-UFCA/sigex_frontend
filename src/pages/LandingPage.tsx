import MainCarousel from "@/features/LandingPage/MainCarousel";
import SmallCarousel from "@/features/LandingPage/SmallCarousel";

import { format } from "date-fns";

import { scrollToTop } from "@/lib/scrollToTop";

/**
 * Página inicial (Landing Page) da aplicação.
 *
 * Exibe:
 * - {@link MainCarousel}: carrossel principal com todos os projetos.
 * - Múltiplos {@link SmallCarousel} segmentados por área/tipo:
 *   - Tecnologia, Educação, Cursos, Eventos Culturais.
 *   - "Encerramento Próximo": projetos cuja data de fim é hoje ou posterior.
 * - CTA ao final incentivando uso dos filtros de busca.
 *
 * @example
 * // Definido como rota index em main.tsx:
 * { index: true, element: <LandingPage /> }
 */
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
        Utilize nossa
        <a onClick={scrollToTop} className="cursor-pointer underline">
          busca por filtro
        </a>
      </section>
    </div>
  );
}
