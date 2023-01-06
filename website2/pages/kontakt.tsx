import Form from "../components/Pages/Contact/Form/Form";
import ContactField from "../components/Utilities/Forms/ContactField/ContactField";
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
				<Form />
			</main>
		</Layout>
	);
};
export default Page;
