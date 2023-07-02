"use client";
import { Global } from "@default/styles/Global";

export const metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="pl">
			<body>
				<Global>
					<header>
						<nav>
							<menu>
								<a href="/">Start</a>
								<a href="/">O nas</a>
								<a href="/">Blog</a>
								<a href="/">Projekty</a>
								<a href="/">Usługi</a>
								<a href="/">Kontakt</a>
							</menu>
						</nav>
					</header>
					{children}
				</Global>
			</body>
		</html>
	);
}
