import { Content } from "../components/Page/About/AboutMe/Content/Content";
import { Hero } from "../components/Page/About/AboutMe/Hero/Hero";
import { Poster } from "../components/Page/About/AboutMe/Poster/Poster";
import { SectionCards } from '../components/Page/About/AboutMe/SectionCards/SectionCards';

const Page = () => {
  return (
    <>
      <Hero
        image='/assets/images/suit.jpg'
        job="specjalista ds. SEO i SEM, front-end i web developer"
        title="Radosław Adamczyk"
      />
      <main className="page">
        <Content title="Życiorys">
          Urodziłem się w Szpitalu Powiatowym imienia Tadeusza Malińskiego w Śremie 9 października 2000 roku. Przygodę z edukacją rozpocząłem we wrześniu 2007 roku w Szkole Podstawowej imienia generała Józefa Wybickiego w Maniczekach, a następnym etap edukacji szkolnej od września 2013 było nieistniejące już Gimnazjum imienia świętego Jana Pawła II również w Manieczkach. Po 3 latach z radością i ulgą opuściłem mury budynków szkolnych w słynnych Manieczkach. We wrześniu 2016 roku wstąpiłem do Katolickiego Publicznego Akademickiego Liceum Ogólnokształcącego imienia świętego Jana Pawła II w Śremie na ulicy Staszica 1. W tej placówce oświatowej uczyłem się na profilu matematyczno-fizyczno-informatyczno-historycznym, gdzie z wyżej wymienionych przedmiotów jedynie maturę z historii zdawałem na poziomie rozszerzonym. W KPALO miałem przyjemność być kształconym przez genialnych nauczycieli, którzy byli i są nadal podekscytowani tym co robią. W liceum poznałem wiele osób skąd dziś - jak sądzę - mam wiele prawdziwych przyjaźni oraz znajomości. Po zakończeniu &quot;przymusowej&quot; edukacji w 2019 roku wstąpiłem w mury Wyższego Arcybiskupiego Seminarium Duchownego w Poznaniu w którym przetrwałem aż 23 dni... Rok później, czyli w 2020 roku byłem na postulacie Wyższego Seminarium Zgromadzenia Księży świętego Michała Archanioła (CSMA) gdzie kształciłem się przez pół roku. Dziś od września 2021 roku kształcę się na kierunku technik administracji w szkole policealnej Cosinus. Mam nadzieję, że to nie koniec mojej przygody z edukacją.
        </Content>
        <Poster
          ratio="4/3"
          image="/assets/images/room.jpg"
          title="#"
        />
        <Content title="Rozwój zawodowy jako programista">
          Od zawsze jak tylko pamiętam zawsze miałem styczność z komputerami. Na początku było to ogrywanie różnych gier komputerowych takich jak Wyspa 7 skarbów, Assiasins Creed, Minecraft, League of Legends, Civilization VI oraz Grand Theft Auto San Andreas oraz GTA V. Świadomą przygodę z programowaniem zacząłem już w trzeciej klasie gimnazjum na lekcjach informatyki, kiedy to mieliśmy zajęcia z podstaw HTMLa. Następnym etapem było poznanie podstaw C++ na zajęciach z rozszerzonej informatki w KPALO, gdzie ten język nie przypadł mi do gustu. Nieustanne rozwijanie wiedzy z zakresu stron internetowych poprzez wgłębianie się w technologie webowe czyli HTML, CSS, Scss, JavaScrpt wraz z jego frameworkami, TypeScirpt oraz inne języki. Ta determinacja oraz zdobywana wiedza pozwoliły mi uzyskać pierwszą pracę w branży jako specjalista do spraw SEO w Sunrise System. Dziś mam niezmierną radość współpracując z agencją 4Real na stanowisku specjalisty do spraw SEM. 
        </Content>
        {/* <SectionCards
          title="Certyfikaty"
          certificates={[
            {
              content:'Et quibusdam eaque aut amet tenetur minus. Tenetur inventore dolores quo. Accusantium maxime odio amet ducimus ad magnam doloribus. Ad nulla fuga praesentium expedita est et.',
              path:'#',
              title:'Google Analytics - podstawa'
            },
            {
              content:'Et quibusdam eaque aut amet tenetur minus. Tenetur inventore dolores quo. Accusantium maxime odio amet ducimus ad magnam doloribus. Ad nulla fuga praesentium expedita est et.',
              path:'#',
              title:'Google Analytics - podstawa'
            },
            {
              content:'Et quibusdam eaque aut amet tenetur minus. Tenetur inventore dolores quo. Accusantium maxime odio amet ducimus ad magnam doloribus. Ad nulla fuga praesentium expedita est et.',
              path:'#',
              title:'Google Analytics - podstawa'
            },
          ]}
        /> */}
        <SectionCards
          title='Doświadczenie zawodowe'
          works={[
            {
              content:'',
              position:'Specjalista ds SEM',
              time:{
                start:'sierpień 2022',
                end:'teraz'
              },
              title:'4Real'
            },
            {
              content:'',
              position:'Specjalista ds SEO',
              time:{
                start:'październik 2021',
                end:'styczeń 2022'
              },
              title:'Sunrise System'
            },
          ]}
        />
      </main>
    </>
  );
};
export default Page;