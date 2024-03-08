import { HomePageHero } from "utils/Hero";
import HomePageQuery, { iHomePageQuery } from "query/HomePage.query"
import { Blog, Projects } from "layout/HomePage";

export default async function HomePage(){

  const data:iHomePageQuery = await fetch(`${process.env.WP_GRAPH_QL}`, {
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body: JSON.stringify({
        query:HomePageQuery
      })
  })
  .then((res) => res.json())
  .then(({data: {
    page: {page_home_page:{
      aboutUs : about_us, blog, directonary, faq, hero, howWeWorks: how_we_works, projects, services
    }},
    posts: {nodes:posts},
    setting : {page_main_settings:settings},
    projects:projectCards
  }}) => {
    return {
      page:{
        about_us:{
          button:about_us.button,
          content:about_us.content,
          image:about_us.image,
          overview:about_us.overview,
          title:about_us.title
        },
        blog:{
          button:blog.button,
          content:blog.content,
          overview:blog.overview,
          title:blog.title
        },
        directonary: {
          button:directonary.button,
          content:directonary.content,
          title:directonary.title
        },
        faq: {
          cards:faq.cards,
          image:faq.image,
          title:faq.title
        },
        hero:{
          buttons:hero.buttons,
          slogan:hero.slogan,
          title:hero.title
        },
        how_we_works: {
          image:how_we_works.image,
          title:how_we_works.title,
          values:how_we_works.values
        },
        projects:{
          button:projects.button,
          button_card:projects.buttonCard,
          content:projects.content,
          image:projects.image,   
          title:projects.title
        },
        services: {
          button:services.button,
          content:services.content,
          title:services.title
        }
      },
      posts,
      settings, 
      projects:projectCards.nodes
    };
  })



  return(
    <>
      <HomePageHero
        buttons={data.page.hero.buttons}
        slogan={data.page.hero.slogan}
        socials={data.settings.socials}
        title={data.page.hero.title}
        video="/assets/movies/background.webm"
      />
      <main>
        <Blog
          button={data.page.blog.button}
          content={data.page.blog.content}
          overview={data.page.blog.overview}
          posts={data.posts}
          title={data.page.blog.title}
        />
        <Projects
          button={data.page.projects.button}
          slider={{
            button:data.page.projects.button_card,
            cards:data.projects
          }}
          content={data.page.projects.content}
          image={data.page.projects.image}
          title={data.page.projects.title}

        />
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit reprehenderit beatae eveniet! Provident, inventore amet necessitatibus dicta eaque tempora, modi incidunt accusantium doloribus, nulla atque temporibus quae itaque accusamus exercitationem?
        Perferendis consectetur non, consequuntur hic autem saepe unde, a, iste assumenda odio rerum facere illum mollitia. Cupiditate accusamus sequi voluptatem obcaecati officiis quidem dicta, quod officia, soluta sint aut ab!
        Quidem unde harum quasi a, architecto numquam dolorem temporibus dolorum, voluptas iusto, voluptatum vitae error nam officia ullam excepturi sit! Fugiat possimus minus soluta odio nobis deleniti cupiditate est debitis.
        Deserunt voluptate vel sunt. Molestias suscipit dolor voluptatibus cupiditate sapiente est ut voluptatem harum nihil cumque! At aut nobis sint ex autem laboriosam, veritatis tempore officia impedit officiis consequuntur iusto!
      </main>
    </>
  )
}