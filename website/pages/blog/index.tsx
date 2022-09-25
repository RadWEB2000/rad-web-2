import { Hero } from "../../components/Utilities/Fragments/Hero/Hero";
import { Search } from "../../components/Utilities/Fragments/Search/Search";
import { useState } from "react";
import { posts } from "../../data/posts";
import { Articles } from "../../components/Page/Blog/Articles/Articles";
const Page = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  const { articles } = posts;
  return (
    <>
      <Hero
        content="Świat programowania, pozycjonowania - i co może zdziwić - historii mimo częstych rewolucji nadal jest w trakcie ewolucji. W związku z tym należy dokładać wszelkich starań aby być cały czas na bieżąco. Najlepszym miejscem do poznawania ciekawostek z tego świata bezapelacjnie jest blog, a w szczególności blog RadWEB, gdzie poza suchymi informacjami poznasz konkretne zagadnienia w możliwie jak najszerszym kontekście."
        title="Blog"
        type="page"
      />
      <Search
        handle={(e: any) => setSearchValue(e.target.value)}
        placeholder="Szukaj"
      />
      <main className="page articles">
        <Articles posts={articles} search={searchValue} />
      </main>
    </>
  );
};
export default Page;
