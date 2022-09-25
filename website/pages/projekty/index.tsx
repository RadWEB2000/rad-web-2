import { Projects } from "../../components/Page/Projects/Projects";
import { Hero } from "../../components/Utilities/Fragments/Hero/Hero";
import { Search } from "../../components/Utilities/Fragments/Search/Search";
import { posts } from "../../data/posts";
import { useState } from "react";
import { Seo } from "../../components/Layout/Seo/Seo";
const Page = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  const { projects } = posts;
  return (
    <>
      <Seo
          canonical='https://rad-web.vercel.app/projekty'
          description='Chcesz poznać najnowsze realizacje i projekty wykonane przez RadWEB. Wejdź i sprawdź już teraz!'
          image='/assets/brand/logo-black.png'
          title='Projekty i realizacje stron internetowych - RadWEB'
          typePage='website'
      />
      <Hero
        content="Praktyka czyni mistrza - te słowa jasno określają rozwój RadWEB. Znajdziesz tutaj realizacje z zakresu tworzenia, pozycjonowania oraz optymalizacji stron internetowych. Tworzę aplikacje od warsty wizualnej oraz serwerowej czyli fachowo mówiąc front-end i back-end. Jestem zaprzyjaźniony z kilkoma jęzkami programowania tj. z JavaScript oraz PHP. Nie oznacza to, że jestem ograniczony jedynie do tych dwóch technologii ponieważ rozwijam się w innych językach programowania takimi jak Ruby czy Python."
        title="Projekty i realizacje"
        type="page"
      />
      <Search
        handle={(e: any) => setSearchValue(e.target.value)}
        placeholder="Szukaj"
      />
      <main className="page">
        <Projects
          cards={projects.filter(
            (item) =>
              item.category.name.includes(searchValue.toLowerCase()) ||
              item.category.value.includes(searchValue.toLowerCase()) ||
              item.content.includes(searchValue.toLowerCase()) ||
              item.title.includes(searchValue.toLowerCase())
          )}
        />
      </main>
    </>
  );
};
export default Page;
