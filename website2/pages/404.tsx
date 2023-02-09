import Element404 from "../components/Pages/404/Element404";
import Layout from "./../components/Layout/Layout/Layout";
const Page = () => {
	return (
		<Layout
			image="https://cdn.pixabay.com/photo/2016/11/29/06/15/plans-1867745_960_720.jpg"
			meta={{
				description: "",
				title: "404",
			}}
			og={{
				description: "",
				title: "",
				type: "website",
			}}
			schema={{}}
		>
			<Element404 content="Strona nie została znaleziona" />
		</Layout>
	);
};
export default Page;
