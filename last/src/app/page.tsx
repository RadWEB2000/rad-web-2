import query, { t_endpoint, t_response } from "graphql/HomePage";
import {fetch_config} from "configs/fetch_config";
import { HomeHero } from "utils/Hero";
import { Blog } from "views/HomePage";

export default async function HomePage(){
  
  const data = await fetch(`${process.env.WP_API}`, {
      ...fetch_config,
      body : JSON.stringify({
        query:query
      })
  })
  .then((response) => response.json())
  .then((response:t_endpoint):t_response => {
    const page = response.data.page.page_home_page; 
    return {
      about_us: {
        button: page.aboutUs.button,
        content:page.aboutUs.content,
        image:page.aboutUs.image,
        overview:page.aboutUs.overview,
        title:page.aboutUs.title
      },
      blog: {
        button: page.blog.button,
        cards:response.data.posts.nodes.map((item) => {
          return {
            title:item.title,
            uri:item.uri,
            image:item.featuredImage.node,
            excerpt:item.excerpt,
            date:item.date,
            categories: item.categories.nodes.map((item) => {
              return {
                name:item.name,
                uri:item.uri
              }
            })
          }
        }),
        content:page.blog.content,
        overview:page.blog.overview,
        title:page.blog.title
      },
      directonary: {
        button: page.directonary.button,
        content:page.directonary.content,
        title: page.directonary.title
      }, 
      faq: {
        cards : page.faq.cards,
        image:page.faq.image,
        title:page.faq.title,
      },
      hero : {
        buttons : page.hero.buttons.map((item) => {
          return item.button
        }),
        slogan: page.hero.slogan,
        socials:response.data.setting.page_main_settings.socials,
        title:page.hero.title,
      },
      how_we_works : {
        image:page.howWeWorks.image,
        title: page.howWeWorks.title,
        values: page.howWeWorks.values
      },
      projects : {
        button: page.projects.button,
        button_card:page.projects.buttonCard,
        cards : response.data.projects.nodes.map((item) => {
          return {
            excerpt:item.excerpt,
            image:item.featuredImage.node,
            industry:item.page_project_article.industry,
            title:item.title,
            uri:item.uri
          }
        }),
        content:page.projects.content,
        image:page.projects.image,
        title:page.projects.title
      },
      services :{ 
        button:page.services.button,
        content:page.services.content,
        title:page.services.title,
      }
    }
  })
  .catch(error => 
    {
      console.log("error: ", error)
      throw error

    }
  )
  console.log(data)

  return (
      <div>
        <HomeHero
          {...data.hero}
          video="/assets/movies/background.webm"
        />
        <main>
          <Blog {...data.blog} />
        </main>
      </div>
  )
}