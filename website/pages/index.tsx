import { Blog } from "../components/Page/Home/Blog/Blog";
import { Projects } from "../components/Page/Home/Projects/Projects";
import { Services } from "../components/Page/Home/Services/Services";
import { Hero } from "../components/Page/Home/Hero/Hero";
import { Team } from "../components/Page/Home/Team/Team";
import { Movie } from "../components/Page/Home/Movie/Movie";
import { Person } from "../components/Page/Home/Person/Person";
import { JoinSvg } from "../assets/svg/JoinSvg";
import { StatsSvg } from "../assets/svg/StatsSvg";
import { SvgContainer } from "../components/Utilities/Fragments/SvgContainer/SvgContainer";
import { Seo } from "../components/Layout/Seo/Seo";
const Page = () => {
  return (
    <>
      <Seo
          canonical='https://rad-web.vercel.app'
          description='Każda szanująca się osoba prywatna, organizacja czy też firma posiada strony internetowe. Zapraszam do zgłębienia swojej wiedzy z tego zagadnienia!'
          image='/assets/brand/logo-black.png'
          title='RadWEB - Tworzenie stron i aplikacji internetowych, SEO'
          typePage='website'
      />
      <Hero/>
      <main className="page">
        <Person
          buttons={[
            {
              path:'/o-mnie',
              title:'Kim jestem?'
            },
          ]}
          content={`Od 2016 roku z wielkim entuzjazmem i zapałem uczę się tworzenia profesjonalnych -  a co tym idzie - kreatywnych stron internetowych oraz aplikacji webowych. Dziś pracuję i podnoszę swoje kwalifikacje jako specjalista ds. SEM. Połączenie wiedzy programistycznej, SEM i SEO daje mi pełny obraz wiedzy jak powinny wyglądać conajmniej poprawne strony internetowe. `}
          heading='Poznaj swoich specjalistów'
          image="/assets/images/wall.jpg"
          title="Radosław Adamczyk"
        />
        {/* <Movie
          url="/assets/movies/city.webm"
        /> */}
        <Blog
          button="więcej"
          content={`Programowanie i pozycjonowanie są niezwykle prężnie rozwijającymi się dziedzinami nauki. W  programowaniu często pojawiają się nowe paczki usprawniające prace deweloperów. Natomiast proces pozycjonowania poddawany jest przez wyszukiwarkę Google co raz to nowszym rewolucjom. Na szczęście z blogiem RadWEB zawsze będziesz na bieżąco z nowinkami.`}
          endContent={350}
          path="/blog"
          title="Blog"
        />
        <SvgContainer
          icon={<StatsSvg/>}
        />
        <Projects
          button="więcej"
          content={`Praktyka czyni mistrza. Projekty i realizacje RadWEB z zakresu stron i aplikacji internetowych są najlepszym tego przykładem, ponieważ na ich przykładzie można zauważyć rozwój wiedzy oraz kompetencji.`}
          endContent={450}
          path="/projekty"
          title="Projekty i realizacje"
        />
        {/* <SvgContainer
          icon={<JoinSvg/>}
        /> */}
        {/* <Services/> */}
      </main>
    </>
  );
};
export default Page;