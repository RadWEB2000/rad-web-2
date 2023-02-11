const yearOfBornInternet = () => {
	const a = new Date().getFullYear();
	const b = 1969;
	return a - b;
};
export const blogpage = {
	pl: {
		main: {
			seo: {
				image: "",
				meta: {
					title: "Blog, poznaj tajniki internetu 📰 - RadWEB",
					description: `Internet jest z nami już od ${yearOfBornInternet()} lat. Od początku XXI ten środek masowego przekazu zdominował inne tradycjne media. Dowiedz się, jak możesz go na swoją korzyść.`,
				},
				og: {
					title: "",
					description: "",
				},
			},
			content: {
				hero: {
					title: "Blog",
					content: `Świat programowania, pozycjonowania - i co może zdziwić - historii mimo częstych rewolucji nadal jest w trakcie ewolucji. W związku z tym należy dokładać wszelkich starań aby być cały czas na bieżąco. Najlepszym miejscem do poznawania ciekawostek z tego świata bezapelacjnie jest blog, a w szczególności blog RadWEB, gdzie poza suchymi informacjami poznasz konkretne zagadnienia w możliwie jak najszerszym kontekście.`,
				},
			},
		},
		subpages: [
			{
				seo: {
					image: "",
					meta: {
						title: "",
						description: "",
					},
					og: {
						title: "",
						description: "",
					},
				},
				path: "/blog/programowanie",
				slug: "programowanie",
				content: {
					hero: {
						title: "Programowanie",
						content: ``,
					},
				},
			},
			{
				seo: {
					image: "",
					meta: {
						title: "",
						description: "",
					},
					og: {
						title: "",
						description: "",
					},
				},
				path: "/blog/pozycjonowanie",
				slug: "pozycjonowanie",
				content: {
					hero: {
						title: "Tajniki SEO",
						content: ``,
					},
				},
			},
			{
				seo: {
					image: "",
					meta: {
						title: "",
						description: "",
					},
					og: {
						title: "",
						description: "",
					},
				},
				path: "/blog/reklamy-w-google",
				slug: "reklamy-w-google",
				content: {
					hero: {
						title: "Reklamy Google",
						content: ``,
					},
				},
			},
		],
	},
};