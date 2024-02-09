import { tQueryHomePage } from "ts/queries.models"
import { q_home } from "data/queries"
import { Hero } from "utils/Sections"

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
  .then(({data : {page : {page_home_page}}}) => {
    return {
      about_us:page_home_page.aboutUs,
      blog:page_home_page.blog,
      hero:page_home_page.hero,
      projects:page_home_page.projects,
      services:page_home_page.services,
      statistics:page_home_page.statistics
    }
  })
  


  return(
    <>
      <Hero {...data.hero}  theme="home" />
      asdasd
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis numquam illo soluta quis distinctio, ipsam debitis, maxime reiciendis, vero veniam reprehenderit. Autem omnis quia reprehenderit libero atque distinctio. Quaerat, dolore!
      Voluptas ex, sed qui possimus nulla odit neque inventore doloribus nostrum sit dignissimos omnis enim. Ea libero porro ipsam ad, distinctio fugit illo eligendi commodi minus blanditiis. Delectus, corporis voluptate.
      Deserunt iure at autem ipsam ab pariatur voluptate libero. Cumque optio illo perspiciatis minima non odio. Aspernatur natus magnam, eius fugiat ad odio nulla deserunt, optio perferendis quaerat eum ullam?
      Veniam neque excepturi voluptatum, saepe sed sunt voluptate modi et aliquid numquam suscipit harum in adipisci ipsam rerum labore necessitatibus, beatae, dignissimos aperiam minus. Eum et assumenda neque aperiam vero?
    </>  
  )
}