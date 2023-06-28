import Layout from "../src/components/Layout/Layout/Layout";
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
			hero={
				<>
					<h1
						style={{
							alignItems: "center",
							display: "flex",
							fontSize: "5rem",
							fontWeight: "700",
							justifyContent: "center",
							margin: "auto",
							textAlign: "center",
							height: "calc(100vh - 35rem)",
							width: "100%",
						}}
					>
						404
					</h1>
				</>
			}
		>
			<></>
		</Layout>
	);
};
export default Page;
