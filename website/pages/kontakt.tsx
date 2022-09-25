import { AskMeSvg } from "../assets/svg/AskMeSvg";
import { Details } from "../components/Page/Contact/Details/Details";
import { Form } from "../components/Page/Contact/Form/Form/Form";
import { ContactCard } from "../components/Utilities/Cards/ContactCard/ContactCard";
import { Hero } from "../components/Utilities/Fragments/Hero/Hero";

const Page = () => {
  return (
    <>
      <Hero
        content="Chcesz zrealizować projekt strony bądź aplikacji internetowej? Planujesz odświeżenie strony internetowej? W tym temacie nie powinno się zawierzać losowym osobom, a raczej doświadczonym specjalistom RadWEB.<br/><b>Nie wahaj się i napisz już teraz!</b>"
        title='Kontakt ze specjalistą'
        type="page"
      />
      <main className="page contact">
        <div className="cards">
          <ul>
            <Details
              email="radoslaw.adamczyk2000@gmail.com"
              fullname="Radosław Adamczyk"
              jobs={[
                'programista stron internetowych',
                'front-end, web developer',
                'specjalista ds. SEO i SEM'
              ]}
              phone='+48 794-100-413'
              krs={7851746559}
              nip={7851746559}
            />
          </ul>
        </div>
        <div className="form">
            <Form/>
        </div>
      </main>
    </>
  );
};
export default Page;