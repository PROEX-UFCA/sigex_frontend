import MainCarousel from "@/features/LandingPage/MainCarousel";
// import MobileMainCarousel from "@/features/LandingPage/MobileMainCarousel";
import SmallCarousel from "@/features/LandingPage/SmallCarousel";

// import { useScreenSize } from "@/hooks/useScreenSize";
// import { BREAKPOINTS } from "@/lib/breakpoints";
// import { getActiveBreakpoint } from "@/utils/breakpoints";

export default function LandingPage() {
  // const { width } = useScreenSize();
  // const windowSize = getActiveBreakpoint(width);

  return (
    <div className="w-full flex flex-col">
      <MainCarousel
        itemList={[
          {
            id: "1",
            title: "Projeto",
            tags: [
              { tagType: "Cultura" },
              { tagType: "Educação" },
              { tagType: "Tecnologia" },
            ],
            description:
              "Tempor esse labore consectetur quis dolor laborum magna nulla dolore. Consequat laborum esse minim et ullamco id enim culpa irure. Exercitation nulla duis pariatur anim ea nostrud eu dolore proident eiusmod. In sunt reprehenderit irure do do. Voluptate velit exercitation ea aute nisi. Culpa elit Lorem fugiat Lorem sunt reprehenderit.",
          },
          {
            id: "2",
            title: "Projeto",
            tags: [
              { tagType: "Justiça" },
              { tagType: "Educação" },
              { tagType: "Tecnologia" },
            ],
            description:
              "Tempor esse labore consectetur quis dolor laborum magna nulla dolore. Consequat laborum esse minim et ullamco id enim culpa irure. Exercitation nulla duis pariatur anim ea nostrud eu dolore proident eiusmod. In sunt reprehenderit irure do do. Voluptate velit exercitation ea aute nisi. Culpa elit Lorem fugiat Lorem sunt reprehenderit.",
          },
          {
            id: "3",
            title: "Projeto",
            tags: [
              { tagType: "Ambiente" },
              { tagType: "Educação" },
              { tagType: "Tecnologia" },
            ],
            description:
              "Tempor esse labore consectetur quis dolor laborum magna nulla dolore. Consequat laborum esse minim et ullamco id enim culpa irure. Exercitation nulla duis pariatur anim ea nostrud eu dolore proident eiusmod. In sunt reprehenderit irure do do. Voluptate velit exercitation ea aute nisi. Culpa elit Lorem fugiat Lorem sunt reprehenderit.",
          },
          {
            id: "4",
            title: "Projeto",
            tags: [
              { tagType: "Artes" },
              { tagType: "Educação" },
              { tagType: "Tecnologia" },
            ],
            description:
              "Tempor esse labore consectetur quis dolor laborum magna nulla dolore. Consequat laborum esse minim et ullamco id enim culpa irure. Exercitation nulla duis pariatur anim ea nostrud eu dolore proident eiusmod. In sunt reprehenderit irure do do. Voluptate velit exercitation ea aute nisi. Culpa elit Lorem fugiat Lorem sunt reprehenderit.",
          },
          {
            id: "5",
            title: "Projeto",
            tags: [
              { tagType: "Tecnologia" },
              { tagType: "Educação" },
              { tagType: "Tecnologia" },
            ],
            description:
              "Tempor esse labore consectetur quis dolor laborum magna nulla dolore. Consequat laborum esse minim et ullamco id enim culpa irure. Exercitation nulla duis pariatur anim ea nostrud eu dolore proident eiusmod. In sunt reprehenderit irure do do. Voluptate velit exercitation ea aute nisi. Culpa elit Lorem fugiat Lorem sunt reprehenderit.",
          },
        ]}
      />
      <SmallCarousel
        sectionTitle="Filtro 1"
        itemList={[
          {
            id: "1",
            title: "Projeto",
            tags: [
              { tagType: "Cultura" },
              { tagType: "Educação" },
              { tagType: "Tecnologia" },
            ],
          },
          {
            id: "2",
            title: "Projeto",
            tags: [
              { tagType: "Justiça" },
              { tagType: "Educação" },
              { tagType: "Tecnologia" },
            ],
          },
          {
            id: "3",
            title: "Projeto",
            tags: [
              { tagType: "Ambiente" },
              { tagType: "Educação" },
              { tagType: "Tecnologia" },
            ],
          },
          {
            id: "4",
            title: "Projeto",
            tags: [
              { tagType: "Artes" },
              { tagType: "Educação" },
              { tagType: "Tecnologia" },
            ],
          },
          {
            id: "5",
            title: "Projeto",
            tags: [
              { tagType: "Tecnologia" },
              { tagType: "Educação" },
              { tagType: "Tecnologia" },
            ],
          },
          {
            id: "6",
            title: "Projeto",
            tags: [
              { tagType: "Trabalho" },
              { tagType: "Educação" },
              { tagType: "Tecnologia" },
            ],
          },
          {
            id: "7",
            title: "Projeto",
            tags: [
              { tagType: "Patrimônio" },
              { tagType: "Educação" },
              { tagType: "Tecnologia" },
            ],
          },
          {
            id: "8",
            title: "Projeto",
            tags: [
              { tagType: "Saúde" },
              { tagType: "Educação" },
              { tagType: "Tecnologia" },
            ],
          },
          {
            id: "9",
            title: "Projeto",
            tags: [
              { tagType: "Educação" },
              { tagType: "Cultura" },
              { tagType: "Tecnologia" },
            ],
          },
        ]}
      ></SmallCarousel>
      <SmallCarousel
        sectionTitle="Filtro 1"
        itemList={[
          {
            id: "1",
            title: "Projeto",
            tags: [
              { tagType: "Cultura" },
              { tagType: "Educação" },
              { tagType: "Tecnologia" },
            ],
          },
          {
            id: "2",
            title: "Projeto",
            tags: [
              { tagType: "Justiça" },
              { tagType: "Educação" },
              { tagType: "Tecnologia" },
            ],
          },
          {
            id: "3",
            title: "Projeto",
            tags: [
              { tagType: "Ambiente" },
              { tagType: "Educação" },
              { tagType: "Tecnologia" },
            ],
          },
          {
            id: "4",
            title: "Projeto",
            tags: [
              { tagType: "Artes" },
              { tagType: "Educação" },
              { tagType: "Tecnologia" },
            ],
          },
          {
            id: "5",
            title: "Projeto",
            tags: [
              { tagType: "Tecnologia" },
              { tagType: "Educação" },
              { tagType: "Tecnologia" },
            ],
          },
          {
            id: "6",
            title: "Projeto",
            tags: [
              { tagType: "Trabalho" },
              { tagType: "Educação" },
              { tagType: "Tecnologia" },
            ],
          },
          {
            id: "7",
            title: "Projeto",
            tags: [
              { tagType: "Patrimônio" },
              { tagType: "Educação" },
              { tagType: "Tecnologia" },
            ],
          },
          {
            id: "8",
            title: "Projeto",
            tags: [
              { tagType: "Saúde" },
              { tagType: "Educação" },
              { tagType: "Tecnologia" },
            ],
          },
          {
            id: "9",
            title: "Projeto",
            tags: [
              { tagType: "Educação" },
              { tagType: "Cultura" },
              { tagType: "Tecnologia" },
            ],
          },
        ]}
      ></SmallCarousel>
      <SmallCarousel
        sectionTitle="Filtro 2"
        itemList={[
          {
            id: "1",
            title: "Projeto",
            tags: [
              { tagType: "Cultura" },
              { tagType: "Educação" },
              { tagType: "Tecnologia" },
            ],
          },
          {
            id: "2",
            title: "Projeto",
            tags: [
              { tagType: "Justiça" },
              { tagType: "Educação" },
              { tagType: "Tecnologia" },
            ],
          },
          {
            id: "3",
            title: "Projeto",
            tags: [
              { tagType: "Ambiente" },
              { tagType: "Educação" },
              { tagType: "Tecnologia" },
            ],
          },
          {
            id: "4",
            title: "Projeto",
            tags: [
              { tagType: "Artes" },
              { tagType: "Educação" },
              { tagType: "Tecnologia" },
            ],
          },
          {
            id: "5",
            title: "Projeto",
            tags: [
              { tagType: "Tecnologia" },
              { tagType: "Educação" },
              { tagType: "Tecnologia" },
            ],
          },
          {
            id: "6",
            title: "Projeto",
            tags: [
              { tagType: "Trabalho" },
              { tagType: "Educação" },
              { tagType: "Tecnologia" },
            ],
          },
          {
            id: "7",
            title: "Projeto",
            tags: [
              { tagType: "Patrimônio" },
              { tagType: "Educação" },
              { tagType: "Tecnologia" },
            ],
          },
          {
            id: "8",
            title: "Projeto",
            tags: [
              { tagType: "Saúde" },
              { tagType: "Educação" },
              { tagType: "Tecnologia" },
            ],
          },
          {
            id: "9",
            title: "Projeto",
            tags: [
              { tagType: "Educação" },
              { tagType: "Cultura" },
              { tagType: "Tecnologia" },
            ],
          },
        ]}
      ></SmallCarousel>
      <SmallCarousel
        sectionTitle="Filtro 3"
        itemList={[
          {
            id: "1",
            title: "Projeto",
            tags: [
              { tagType: "Cultura" },
              { tagType: "Educação" },
              { tagType: "Tecnologia" },
            ],
          },
          {
            id: "2",
            title: "Projeto",
            tags: [
              { tagType: "Justiça" },
              { tagType: "Educação" },
              { tagType: "Tecnologia" },
            ],
          },
          {
            id: "3",
            title: "Projeto",
            tags: [
              { tagType: "Ambiente" },
              { tagType: "Educação" },
              { tagType: "Tecnologia" },
            ],
          },
          {
            id: "4",
            title: "Projeto",
            tags: [
              { tagType: "Artes" },
              { tagType: "Educação" },
              { tagType: "Tecnologia" },
            ],
          },
          {
            id: "5",
            title: "Projeto",
            tags: [
              { tagType: "Tecnologia" },
              { tagType: "Educação" },
              { tagType: "Tecnologia" },
            ],
          },
          {
            id: "6",
            title: "Projeto",
            tags: [
              { tagType: "Trabalho" },
              { tagType: "Educação" },
              { tagType: "Tecnologia" },
            ],
          },
          {
            id: "7",
            title: "Projeto",
            tags: [
              { tagType: "Patrimônio" },
              { tagType: "Educação" },
              { tagType: "Tecnologia" },
            ],
          },
          {
            id: "8",
            title: "Projeto",
            tags: [
              { tagType: "Saúde" },
              { tagType: "Educação" },
              { tagType: "Tecnologia" },
            ],
          },
          {
            id: "9",
            title: "Projeto",
            tags: [
              { tagType: "Educação" },
              { tagType: "Cultura" },
              { tagType: "Tecnologia" },
            ],
          },
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
