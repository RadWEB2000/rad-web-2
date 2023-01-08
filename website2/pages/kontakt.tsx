import Cards from "../components/Pages/Contact/Cards/Cards";
import Form from "../components/Pages/Contact/Form/Form";
import Informations from "../components/Pages/Contact/Informations/Informations";
import Wrapper from "../components/Pages/Contact/Wrapper/Wrapper";
import ContactField from "../components/Utilities/Forms/ContactField/ContactField";
import { contact } from "../data/pages/contact";
import Layout from "./../components/Layout/Layout/Layout";
import { home } from "./../data/pages/home";
import { posts } from "./../data/pages/posts";
const Page = () => {
	const { pl } = home;
	const { pl: plCards } = posts;
	return (
		<Layout
			image="https://cdn.pixabay.com/photo/2016/11/29/06/15/plans-1867745_960_720.jpg"
			meta={{
				description: "",
				title: "",
			}}
			og={{
				description: "",
				title: "",
				type: "website",
			}}
		>
			<main>
				<Wrapper>
					<div>
						<Informations
							address={contact.pl.main.informations.address}
							content={contact.pl.main.informations.content}
							email={contact.pl.main.informations.email}
							phone={contact.pl.main.informations.phone}
						/>
					</div>
					<div>
						<Form />
					</div>
					<div>
						<Cards />
					</div>
				</Wrapper>
			</main>
		</Layout>
	);
};
export default Page;
