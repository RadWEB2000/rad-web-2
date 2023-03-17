import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				<style>
					@import
					url(`https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;1,100;1,200;1,300;1,400;1,500&display=swap`);
				</style>
				<meta name="robots" content="noindex nofollow" />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
