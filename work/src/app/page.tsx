import wordpressConnect from "configs/wordpressConnect"
import HomePageQuery, {tHomePageRequestQuery, tHomePageResponseQuery} from "gql/HomePageQuery"
import { Hero } from "views/Home"

export default async function HomePage(){

  const data = await wordpressConnect({
    key:`${process.env.WP_PL}`,
    query:HomePageQuery
  })
  .then((response:tHomePageRequestQuery):tHomePageResponseQuery => {
    return {
      hero: {
        buttons:response.data.page.pageHomePage.hero.buttons.map(({button}) => {
          return {
            target:button.target,
            title:button.title,
            url:button.url
          }
        }),
        slogan:response.data.page.pageHomePage.hero.slogan,
        title:response.data.page.pageHomePage.hero.title
      }
    }
  })


  return(
    <>
      <Hero
        {...data.hero}
        video="/assets/hero-background-2.webm"
      />
      <div>
        <h1>strona glowna</h1>
      </div>
    </>
  )
}