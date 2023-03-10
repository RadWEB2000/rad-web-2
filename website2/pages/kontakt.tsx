import CardsWrapper from "../src/components/Utilities/Cards/CardsWrapper/CardsWrapper";
import Form from "../src/components/Pages/ContactPage/Form/Form";
import HeroPage from "../src/components/Utilities/Hero/HeroPage/HeroPage";
import Informations from "../src/components/Pages/ContactPage/Informations/Informations";
import Layout from "./../components/Layout/Layout/Layout";
import PersonCard from "../src/components/Utilities/Cards/PersonCard/PersonCard";
import Wrapper from "../src/components/Pages/ContactPage/Wrapper/Wrapper";
import { contactpage } from "../data/pages/contactpage";
import { getStructuredDataWebsite } from "../src/lib/functions/getStructuredData";
import { persons } from "../data/utils/persons";
import { projects } from "../data/pages/projects";

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
						<CardsWrapper variant="contact">
							{Object.values(persons.pl).map(
								({ email, fullname, image, jobs, path, phone }) => (
									<PersonCard
										cities=""
										email={email.address}
										fullname={{
											firstname: fullname.firstname,
											lastname: fullname.lastname,
										}}
										image={image}
										jobs={jobs}
										key={`${fullname.firstname} - ${fullname.lastname} - contact`}
										path={path}
										phone={phone.address}
										variant="contact"
									/>
								)
							)}
						</CardsWrapper>
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
