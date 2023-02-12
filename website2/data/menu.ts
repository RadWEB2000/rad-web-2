interface intMenuElement {
	path: string;
	title: string;
	submenu?: {
		path: string;
		title: string;
	}[];
}
interface intMenu {
	pl: intMenuElement[];
}
export const menu: intMenu = {
	pl: [
		{
			path: "/",
			title: "Start",
		},
		// {
		// 	path: "/o-mnie",
		// 	title: "O mnie",
		// },
		{
			path: "/o-nas",
			title: "O nas",
			submenu: [
				{
					path: "/o-nas/radoslaw-adamczyk",
					title: "Radosław Adamczyk",
				},
				{
					path: "/o-nas/filip-bukowiecki",
					title: "Filip Bukowiecki",
				},
				{
					path: "/o-nas/klaudia-paluch",
					title: "Klaudia Paluch",
				},
				// {
				// 	path: "/o-nas/zofia-lisek",
				// 	title: "Zofia Lisek",
				// },
				// {
				// 	path: "/o-nas/agata-harriet-berlinska",
				// 	title: "Agata Harriet Berlińska",
				// },
				{
					path: "/o-nas/",
					title: "Kim jesteśmy?",
				},
			],
		},
		{
			path: "/blog",
			title: "Blog",
			submenu: [
				{
					path: "/blog/programowanie",
					title: "Programowanie",
				},
				{
					path: "/blog/pozycjonowanie",
					title: "Pozycjonowanie",
				},
				{
					path: "/blog/reklamy-w-google",
					title: "Reklamy w Google",
				},
				{
					path: "/blog",
					title: "Wszystkie wpisy",
				},
			],
		},
		{
			path: "/projekty",
			title: "Projekty",
		},
		// {
		// 	path: "/uslugi",
		// 	title: "Usługi",
		// 	submenu: [
		// 		{
		// 			path: "/uslugi/strony-internetowe",
		// 			title: "Strony internetowe",
		// 		},
		// 		{
		// 			path: "/uslugi/seo",
		// 			title: "SEO",
		// 		},
		// 		{
		// 			path: "/uslugi/reklamy-google",
		// 			title: "Reklamy Google",
		// 		},
		// 		{
		// 			path: "/uslugi/copywriting",
		// 			title: "Copywriting",
		// 		},
		// 		{
		// 			path: "/uslugi",
		// 			title: "Wszystkie usługi",
		// 		},
		// 	],
		// },
		{
			path: "/kontakt",
			title: "Kontakt",
		},
	],
};
