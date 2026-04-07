import MainCarousel from "@/components/LandingPage/MainCarousel";
import SmallCarousel from "@/components/LandingPage/SmallCarousel";
// import { Toggle } from "@/components/ui/toggle";

export default function LandingPage() {
  return (
    <div className="w-full flex flex-col">
      <MainCarousel
        itemList={[
          { id: 1, title: "Projeto", tags: ["Cultura", "Ensino"] },
          { id: 2, title: "Projeto", tags: ["Cultura", "Ensino"] },
          { id: 3, title: "Projeto", tags: ["Cultura", "Ensino"] },
          { id: 4, title: "Projeto", tags: ["Cultura", "Ensino"] },
          { id: 5, title: "Projeto", tags: ["Cultura", "Ensino"] },
        ]}
      ></MainCarousel>
      <SmallCarousel
        sectionTitle="Filtro 1"
        itemList={[
          { id: 1, title: "Projeto", tags: ["Cultura", "Ensino"] },
          { id: 2, title: "Projeto", tags: ["Cultura", "Ensino"] },
          { id: 3, title: "Projeto", tags: ["Cultura", "Ensino"] },
          { id: 4, title: "Projeto", tags: ["Cultura", "Ensino"] },
          { id: 5, title: "Projeto", tags: ["Cultura", "Ensino"] },
          { id: 6, title: "Projeto", tags: ["Cultura", "Ensino"] },
          { id: 7, title: "Projeto", tags: ["Cultura", "Ensino"] },
          { id: 8, title: "Projeto", tags: ["Cultura", "Ensino"] },
          { id: 9, title: "Projeto", tags: ["Cultura", "Ensino"] },
          { id: 10, title: "Projeto", tags: ["Cultura", "Ensino"] },
        ]}
      ></SmallCarousel>
      <SmallCarousel
        sectionTitle="Filtro 1"
        itemList={[
          { id: 1, title: "Projeto", tags: ["Cultura", "Ensino"] },
          { id: 2, title: "Projeto", tags: ["Cultura", "Ensino"] },
          { id: 3, title: "Projeto", tags: ["Cultura", "Ensino"] },
          { id: 4, title: "Projeto", tags: ["Cultura", "Ensino"] },
          { id: 5, title: "Projeto", tags: ["Cultura", "Ensino"] },
          { id: 6, title: "Projeto", tags: ["Cultura", "Ensino"] },
          { id: 7, title: "Projeto", tags: ["Cultura", "Ensino"] },
          { id: 8, title: "Projeto", tags: ["Cultura", "Ensino"] },
          { id: 9, title: "Projeto", tags: ["Cultura", "Ensino"] },
          { id: 10, title: "Projeto", tags: ["Cultura", "Ensino"] },
        ]}
      ></SmallCarousel>
      <SmallCarousel
        sectionTitle="Filtro 2"
        itemList={[
          { id: 1, title: "Projeto", tags: ["Cultura", "Ensino"] },
          { id: 2, title: "Projeto", tags: ["Cultura", "Ensino"] },
          { id: 3, title: "Projeto", tags: ["Cultura", "Ensino"] },
          { id: 4, title: "Projeto", tags: ["Cultura", "Ensino"] },
          { id: 5, title: "Projeto", tags: ["Cultura", "Ensino"] },
          { id: 6, title: "Projeto", tags: ["Cultura", "Ensino"] },
          { id: 7, title: "Projeto", tags: ["Cultura", "Ensino"] },
          { id: 8, title: "Projeto", tags: ["Cultura", "Ensino"] },
          { id: 9, title: "Projeto", tags: ["Cultura", "Ensino"] },
          { id: 10, title: "Projeto", tags: ["Cultura", "Ensino"] },
        ]}
      ></SmallCarousel>
      <SmallCarousel
        sectionTitle="Filtro 3"
        itemList={[
          { id: 1, title: "Projeto", tags: ["Cultura", "Ensino"] },
          { id: 2, title: "Projeto", tags: ["Cultura", "Ensino"] },
          { id: 3, title: "Projeto", tags: ["Cultura", "Ensino"] },
          { id: 4, title: "Projeto", tags: ["Cultura", "Ensino"] },
          { id: 5, title: "Projeto", tags: ["Cultura", "Ensino"] },
          { id: 6, title: "Projeto", tags: ["Cultura", "Ensino"] },
          { id: 7, title: "Projeto", tags: ["Cultura", "Ensino"] },
          { id: 8, title: "Projeto", tags: ["Cultura", "Ensino"] },
          { id: 9, title: "Projeto", tags: ["Cultura", "Ensino"] },
          { id: 10, title: "Projeto", tags: ["Cultura", "Ensino"] },
        ]}
      ></SmallCarousel>
      <section className="text-4xl my-10">
        Ainda em dúvida?<br></br>
        Utilize nossa{" "}
        <a href="https://www.wikipedia.org" className="underline">
          busca por filtro
        </a>
      </section>
    </div>
  );
}
