import { tQueryHomePage } from "ts/queries.models"
import { q_home} from "data/queries"
import Hero from "app/components/Utils/Sections/Hero/Hero"

export default async function HomePage(){
  
  const data:tQueryHomePage = await fetch(`${process.env.WP_API_GRAPHQL}`,{
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body: JSON.stringify({
      query:q_home
    })
  })
  .then(res => res.json())
  .then(({data : {page :{ page_home_page}, posts, setting:{page_main_settings}}}) => {
    return {
      page: {
        about_us: {
          title:page_home_page.aboutUs.title,
          overview:page_home_page.aboutUs.overview,
          image:page_home_page.aboutUs.image,
          content:page_home_page.aboutUs.content,
          button:page_home_page.aboutUs.button
        },
        blog: {
          title:page_home_page.blog.title,
          overview:page_home_page.blog.overview,
          content:page_home_page.blog.content,
          button:page_home_page.blog.button
        },
        directonary: {
          title:page_home_page.directonary.title,
          content:page_home_page.directonary.content,
          button:page_home_page.directonary.button,
        },
        faq: {
          title:page_home_page.faq.title,
          image:page_home_page.faq.image,
          cards:page_home_page.faq.cards
        },
        hero: {
          title:page_home_page.hero.title,
          slogan:page_home_page.hero.slogan,
          buttons:page_home_page.hero.buttons,
        },
        how_we_works: {
          title:page_home_page.howWeWorks.title,
          image:page_home_page.howWeWorks.image,
          values:page_home_page.howWeWorks.values
        },
        projects: {
          title:page_home_page.projects.title,
          content:page_home_page.projects.content,
          image:page_home_page.projects.image,
          button:page_home_page.projects.button
        },
        services: {
          title:page_home_page.services.title,
          content:page_home_page.services.content,
          button:page_home_page.services.button
        }
      },
      posts:posts.nodes,
      settings:{
        socials:page_main_settings.socials
      }
    }
  })
  


  return(
    <>
      <Hero
        buttons={data.page.hero.buttons}
        slogan={data.page.hero.slogan}
        socials={data.settings.socials}
        theme="home"
        title={data.page.hero.title}
        video="/assets/movies/background.webm"
      />
      asdasd
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis numquam illo soluta quis distinctio, ipsam debitis, maxime reiciendis, vero veniam reprehenderit. Autem omnis quia reprehenderit libero atque distinctio. Quaerat, dolore!
      Voluptas ex, sed qui possimus nulla odit neque inventore doloribus nostrum sit dignissimos omnis enim. Ea libero porro ipsam ad, distinctio fugit illo eligendi commodi minus blanditiis. Delectus, corporis voluptate.
      Deserunt iure at autem ipsam ab pariatur voluptate libero. Cumque optio illo perspiciatis minima non odio. Aspernatur natus magnam, eius fugiat ad odio nulla deserunt, optio perferendis quaerat eum ullam?
      Veniam neque excepturi voluptatum, saepe sed sunt voluptate modi et aliquid numquam suscipit harum in adipisci ipsam rerum labore necessitatibus, beatae, dignissimos aperiam minus. Eum et assumenda neque aperiam vero?
    </>  
  )
}