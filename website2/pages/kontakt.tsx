import Cards from "../components/Pages/Contact/Cards/Cards";
import Form from "../components/Pages/Contact/Form/Form";
import Informations from "../components/Pages/Contact/Informations/Informations";
import Wrapper from "../components/Pages/Contact/Wrapper/Wrapper";
import HeroPage from "../components/Utilities/Hero/HeroPage/HeroPage";
import { contactpage } from "../data/pages/contactpage";
import { projects } from "../data/pages/projects";
import { persons } from "../data/utils/persons";
import { getStructuredDataWebsite } from "../lib/getStructuredData";
import Layout from "./../components/Layout/Layout/Layout";
const Page = () => {
	const { pl } = projects;
	return (
		<Layout
			image={contactpage.pl.seo.image}
			meta={{
				description: contactpage.pl.seo.meta.description,
				title: contactpage.pl.seo.meta.title,
			}}
			og={{
				description: contactpage.pl.seo.og.description,
				title: contactpage.pl.seo.og.title,
				type: "website",
			}}
			schema={getStructuredDataWebsite({ url: "/kontakt" })}
			hero={
				<HeroPage
					content={contactpage.pl.content.hero.content}
					title={contactpage.pl.content.hero.title}
				/>
			}
		>
			<main>
				<Wrapper>
					<div>
						<Informations
							address={contactpage.pl.content.informations.address}
							content={contactpage.pl.content.informations.content}
							email={contactpage.pl.content.informations.email}
							phone={contactpage.pl.content.informations.phone}
						/>
						<Cards cards={Object.values(persons.pl)} />
					</div>
					<div>
						<Form
							button={contactpage.pl.content.form.button}
							fields={contactpage.pl.content.form.fields}
							rodo={contactpage.pl.content.form.rodo}
							title={contactpage.pl.content.form.title}
						/>
					</div>
				</Wrapper>
			</main>
		</Layout>
	);
};
export default Page;
