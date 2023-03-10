interface IntMenuElement {
	path: string;
	submenu?: { path: string; title: string }[];
	title: string;
}
interface IntMenu {
	pl: {
		navigation: IntMenuElement[];
		footer: IntMenuElement[];
	};
}
export const menu: IntMenu = {
	pl: {
		navigation: [
			{
				path: "/",
				title: "Start",
			},
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
					{
						path: "/o-nas/",
						title: "Kim jesteśmy",
					},
					{
						path: "/o-nas#misja",
						title: "Misja",
					},
					{
						path: "/o-nas#zespol",
						title: "Zespoł",
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
						path: "/blog/seo",
						title: "Seo",
					},
					{
						path: "/blog/reklamy-ads",
						title: "Reklamy Ads",
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
			{
				path: "/kontakt",
				title: "Kontakt",
			},
		],
		footer: [
			{
				path: "/polityka-prywatnosci",
				title: "Polityka prywatności",
			},
			{
				path: "/regulamin",
				title: "Regulamin",
			},
		],
	},
};
