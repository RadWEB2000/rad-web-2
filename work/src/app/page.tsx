import Hero from "v/home/Hero/Hero";
import wordpressConnect from "configs/wordpressConnect"
import HomePageQuery, {tHomePageRequestQuery, tHomePageResponseQuery} from "gql/HomePageQuery"

export default async function HomePage(){

  const data = await wordpressConnect({
    key:`${process.env.WP_PL}`,
    query:HomePageQuery
  })
  .then((response:tHomePageRequestQuery):tHomePageResponseQuery => {
    const {blog,hero} = response.data.page.homePage;
    const posts = response.data.posts.nodes;
    return {
      hero: {
        background_image:{...hero.background_image.node},
        buttons:hero.buttons.map(({button}) => {
          return {...button}
        }),
        slogan:hero.slogan,
        title:hero.title
      },
      blog: {
        button:blog.button,
        content: {
          additional:blog.additional_content,
          base:blog.content
        },
        title:blog.title,
        posts:posts.map(({categories,date,excerpt,title,uri}) => {
          return {
            categories:categories.nodes.map((item) => {
              return {...item}
            }),
            date:date,
            excerpt:excerpt,
            title:title,
            uri:uri
          }
        })
      }
    }

  })


  return(
    <>
      <Hero
          {...data.hero}
      />
      <main>
      </main>
      <div>
        <h1>strona glowna</h1>
      </div>
    </>
  )
}