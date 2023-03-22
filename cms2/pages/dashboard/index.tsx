import Image from "next/image";

const Page = () => {
	return (
		<main>
			<div>
				<figure>
					<Image
						alt=""
						fill
						style={{
							objectFit: "cover",
							objectPosition: "center",
						}}
						src="https://images.unsplash.com/photo-1521489871110-81dc5a61dbda?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1228&q=80"
					/>
				</figure>
			</div>
		</main>
	);
};

export default Page;
