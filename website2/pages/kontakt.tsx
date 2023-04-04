import CardsWrapper from "../src/components/Utilities/Cards/CardsWrapper/CardsWrapper";
import Form from "../src/components/Pages/ContactPage/Form/Form";
import HeroPage from "../src/components/Utilities/Hero/HeroPage/HeroPage";
import Informations from "../src/components/Pages/ContactPage/Informations/Informations";
import Layout from "../src/components/Layout/Layout/Layout";
import PersonCard from "../src/components/Utilities/Cards/PersonCard/PersonCard";
import Wrapper from "../src/components/Pages/ContactPage/Wrapper/Wrapper";
// import { contactpage } from "../data/pages/contactpage";
import { getStructuredDataWebsite } from "../src/lib/functions/getStructuredData";
import fs from "fs";
import matter from "gray-matter";
import { contactpage } from "../content/pages/contactpage";

interface iPage {
	persons: {
		cities: string;
		email: string;
		firstname: string;
		image: string;
		jobs: string;
		lastname: string;
		path: string;
		phone: string;
	}[];
}

const Page = ({ persons }: iPage) => {
	const { content, details, form, seo } = contactpage.pl;
	return (
		<Layout
			image={seo.image}
			meta={{
				description: seo.meta.description,
				title: seo.meta.title,
			}}
			og={{
				description: seo.og.description,
				title: seo.og.title,
				type: "website",
			}}
			schema={getStructuredDataWebsite({ url: "/kontakt" })}
			hero={<HeroPage content={content.content} title={content.title} />}
		>
			<main>
				<Wrapper>
					<div>
						<Informations
							address={details.address}
							content={details.content}
							email={details.email}
							phone={details.phone}
						/>
						<CardsWrapper variant="contact">
							{persons.map(
								({
									cities,
									email,
									firstname,
									image,
									jobs,
									lastname,
									path,
									phone,
								}) => (
									<PersonCard
										cities={cities}
										email={email}
										fullname={{
											firstname: firstname,
											lastname: lastname,
										}}
										image={image}
										jobs={jobs}
										key={`${firstname} - ${lastname} - contact`}
										path={path}
										phone={phone}
										variant="contact"
									/>
								)
							)}
						</CardsWrapper>
					</div>
					<div>
						<Form
							button={form.button}
							fields={form.fields}
							rodo={form.rodo}
							title={form.title}
						/>
					</div>
				</Wrapper>
			</main>
		</Layout>
	);
};
export default Page;

export const getStaticProps = async () => {
	const persons = fs
		.readdirSync(`${process.cwd()}/content/persons/pl`)
		.filter((f) => f.endsWith(".mdx"))
		.map((f) => {
			const path = `${process.cwd()}/content/persons/pl/${f}`;
			const content = fs.readFileSync(path, "utf8");
			const { data } = matter(content);
			return {
				cities: data.cities,
				email: data.email,
				firstname: data.firstname,
				image: data.image,
				jobs: data.jobs,
				lastname: data.lastname,
				path: data.path,
				phone: data.phone,
			};
		});

	return {
		props: {
			persons,
		},
	};
};
