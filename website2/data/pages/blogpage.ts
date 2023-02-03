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
					content: `Necessitatibus vitae et doloribus voluptatem quia commodi. Aut eum beatae omnis ex id. Omnis possimus aut eaque molestias vel modi est beatae. Ipsam voluptatum tempora impedit. Pariatur possimus est blanditiis fuga ullam a aut velit ratione. Porro beatae vel ducimus inventore. Et expedita consequuntur necessitatibus vel iure voluptatem velit maxime enim. Tempore at unde. Autem nostrum eius iure inventore.`,
				},
			},
		},
		programming: {
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
			content: {
				hero: {
					title: "Programowanie",
					content: ``,
				},
			},
		},
		seo: {
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
			content: {
				hero: {
					title: "Tajniki SEO",
					content: ``,
				},
			},
		},
		ads: {
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
			content: {
				hero: {
					title: "Reklamy Google",
					content: ``,
				},
			},
		},
	},
};
