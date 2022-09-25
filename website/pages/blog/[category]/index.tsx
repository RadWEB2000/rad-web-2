import { BlogSvg } from "../../../assets/svg/BlogSvg";
import { Hero } from "../../../components/Utilities/Fragments/Hero/Hero";
import { Search } from "../../../components/Utilities/Fragments/Search/Search";
import { useState, useEffect } from 'react';
import { posts } from "../../../data/posts";
import { Articles } from "../../../components/Page/Blog/Articles/Articles";
import { blog } from "../../../data/blog";

const Page = ({currentPage,hero}:{currentPage:any,hero:any}) => {
  const [searchValue,setSearchValue] = useState<string>('');
  const {articles} = posts;
  return (
    <>
      <Hero
        content={hero.content}
        title={hero.title}
        type="page"
      />
      <Search
        handle={(e:any) => setSearchValue(e.target.value)}
        placeholder='Szukaj'
      />
      <main className="page articles">
        <Articles
          posts={articles.filter((item) => item.path.toLowerCase().includes(currentPage.toLowerCase()))}
          search={searchValue}
        />
      </main>
    </>
  );
};
export default Page;

export const getStaticProps = async ({params}:{params:string|any}) => {
  const {programming,seo} = blog;
  const {category} = params;
  console.log(params)
  const heroParams = (category:string) => {
    if(category == 'programowanie'){
      return {
        content:programming.content,
        title:programming.title,
      }
    }else if(category == 'pozycjonowanie'){
      return {
        content:seo.content,
        title:seo.title,
      }
    }
  }

  console.log(heroParams(category))

  return{
    props:{
      hero:{
        content:heroParams(category)?.content,
        title:heroParams(category)?.title,
      },
      currentPage:params.category,
    }
  }
}
export const getStaticPaths = async () => {
  return{
    paths:[`/blog/programowanie`,`/blog/pozycjonowanie`],
    fallback:false
  }
}