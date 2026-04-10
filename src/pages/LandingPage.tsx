import MainCarousel from "@/components/LandingPage/MainCarousel";
import SmallCarousel from "@/components/LandingPage/SmallCarousel";
import TagsArea from "@/components/Tags";
// import { Toggle } from "@/components/ui/toggle";

export default function LandingPage() {
  return (
    <div className="w-full flex flex-col">
      <MainCarousel
        itemList={[
          { id: 1, title: "Projeto", tags: ["Cultura", "Educação"] },
          { id: 2, title: "Projeto", tags: ["Cultura", "Educação"] },
          { id: 3, title: "Projeto", tags: ["Cultura", "Educação"] },
          { id: 4, title: "Projeto", tags: ["Cultura", "Educação"] },
          { id: 5, title: "Projeto", tags: ["Cultura", "Educação"] },
        ]}
      ></MainCarousel>
      <SmallCarousel
        sectionTitle="Filtro 1"
        itemList={[
          { id: 1, title: "Projeto", tags: ["Cultura", "Educação"] },
          { id: 2, title: "Projeto", tags: ["Cultura", "Educação"] },
          { id: 3, title: "Projeto", tags: ["Cultura", "Educação"] },
          { id: 4, title: "Projeto", tags: ["Cultura", "Educação"] },
          { id: 5, title: "Projeto", tags: ["Cultura", "Educação"] },
          { id: 6, title: "Projeto", tags: ["Cultura", "Educação"] },
          { id: 7, title: "Projeto", tags: ["Cultura", "Educação"] },
          { id: 8, title: "Projeto", tags: ["Cultura", "Educação"] },
          { id: 9, title: "Projeto", tags: ["Cultura", "Educação"] },
          { id: 10, title: "Projeto", tags: ["Cultura", "Educação"] },
        ]}
      ></SmallCarousel>
      <SmallCarousel
        sectionTitle="Filtro 1"
        itemList={[
          { id: 1, title: "Projeto", tags: ["Cultura", "Educação"] },
          { id: 2, title: "Projeto", tags: ["Cultura", "Educação"] },
          { id: 3, title: "Projeto", tags: ["Cultura", "Educação"] },
          { id: 4, title: "Projeto", tags: ["Cultura", "Educação"] },
          { id: 5, title: "Projeto", tags: ["Cultura", "Educação"] },
          { id: 6, title: "Projeto", tags: ["Cultura", "Educação"] },
          { id: 7, title: "Projeto", tags: ["Cultura", "Educação"] },
          { id: 8, title: "Projeto", tags: ["Cultura", "Educação"] },
          { id: 9, title: "Projeto", tags: ["Cultura", "Educação"] },
          { id: 10, title: "Projeto", tags: ["Cultura", "Educação"] },
        ]}
      ></SmallCarousel>
      <SmallCarousel
        sectionTitle="Filtro 2"
        itemList={[
          { id: 1, title: "Projeto", tags: ["Cultura", "Educação"] },
          { id: 2, title: "Projeto", tags: ["Cultura", "Educação"] },
          { id: 3, title: "Projeto", tags: ["Cultura", "Educação"] },
          { id: 4, title: "Projeto", tags: ["Cultura", "Educação"] },
          { id: 5, title: "Projeto", tags: ["Cultura", "Educação"] },
          { id: 6, title: "Projeto", tags: ["Cultura", "Educação"] },
          { id: 7, title: "Projeto", tags: ["Cultura", "Educação"] },
          { id: 8, title: "Projeto", tags: ["Cultura", "Educação"] },
          { id: 9, title: "Projeto", tags: ["Cultura", "Educação"] },
          { id: 10, title: "Projeto", tags: ["Cultura", "Educação"] },
        ]}
      ></SmallCarousel>
      <SmallCarousel
        sectionTitle="Filtro 3"
        itemList={[
          { id: 1, title: "Projeto", tags: ["Cultura", "Educação"] },
          { id: 2, title: "Projeto", tags: ["Cultura", "Educação"] },
          { id: 3, title: "Projeto", tags: ["Cultura", "Educação"] },
          { id: 4, title: "Projeto", tags: ["Cultura", "Educação"] },
          { id: 5, title: "Projeto", tags: ["Cultura", "Educação"] },
          { id: 6, title: "Projeto", tags: ["Cultura", "Educação"] },
          { id: 7, title: "Projeto", tags: ["Cultura", "Educação"] },
          { id: 8, title: "Projeto", tags: ["Cultura", "Educação"] },
          { id: 9, title: "Projeto", tags: ["Cultura", "Educação"] },
          { id: 10, title: "Projeto", tags: ["Cultura", "Educação"] },
        ]}
      ></SmallCarousel>
      <section className="text-4xl my-10">
        Ainda em dúvida?<br></br>
        Utilize nossa{" "}
        <a href="https://www.wikipedia.org" className="underline">
          busca por filtro
        </a>
      </section>
      <TagsArea
        tags={[
          {
            tagType: "Comunicação",
          },
          {
            tagType: "Esportes",
          },
          {
            tagType: "Sociedade",
          },
          {
            tagType: "Cultura",
          },
          {
            tagType: "Justiça",
          },
          {
            tagType: "Educação",
          },
          {
            tagType: "Idiomas",
          },
          {
            tagType: "Artes",
          },
          {
            tagType: "Ambiente",
          },
          {
            tagType: "Patrimônio",
          },
          {
            tagType: "Saúde",
          },
          {
            tagType: "Tecnologia",
          },
          {
            tagType: "Trabalho",
          },
        ]}
        size="lg"
      ></TagsArea>
    </div>
  );
}
