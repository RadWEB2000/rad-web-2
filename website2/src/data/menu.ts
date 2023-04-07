interface intMenuElement {
	path: string;
	title: string;
	submenu?: {
		path: string;
		title: string;
	}[];
}
interface intMenu {
	pl: {
		nav: intMenuElement[];
		footer: {
			columnName: string;
			pages: {
				path: string;
				title: string;
			}[];
		}[];
		settings: {
			path: string;
			title: string;
		}[];
		socials: string[];
	};
}
export const menu: intMenu = {
	pl: {
		nav: [
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
				columnName: "Kim jesteśmy",
				pages: [
					{
						path: "/",
						title: "Start",
					},
					{
						path: "/o-nas",
						title: "O nas",
					},
					{
						path: "/blog",
						title: "Blog",
					},
					{
						path: "/projekty",
						title: "Projekty",
					},
				],
			},
			{
				columnName: "Nasza wiedza",
				pages: [
					{
						path: "/blog",
						title: "Wpisy",
					},
					{
						path: "/blog/programowanie",
						title: "Programowanie",
					},
					{
						path: "/blog/pozycjonowanie",
						title: "Pozycjojnowanie",
					},
					{
						path: "/projekty",
						title: "Realizacje",
					},
				],
			},
			{
				columnName: "Kontakt",
				pages: [
					{
						path: "/kontakt",
						title: "Kontakt",
					},
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
				],
			},
		],
		settings: [
			{
				path: "/polityka-prywatnosci",
				title: "Polityka prywatności",
			},
			{
				path: "/polityka-cookies",
				title: "Cookies",
			},
		],
		socials: [
			"https://www.facebook.com/radoslaw.adamczyk.2000",
			"https://www.instagram.com/radoslaw.adamczyk.2000/",
			"https://www.youtube.com/channel/UCOHB1fpEKwxhjCEDNgVLEog",
			"https://github.com/RadoslawAdamczyk2000",
			"https://www.linkedin.com/in/rados%C5%82aw-adamczyk-853948195/",
		],
	},
};
