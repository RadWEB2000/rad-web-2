interface iMenuElement {
	nav: {
		label: string;
		uri: string;
		submenu?: {
			label: string;
			uri: string;
		}[];
	}[];
	footer: {
		label: string;
		menu: {
			label: string;
			uri: string;
		}[];
	}[];
}

interface iMenu {
	pl: iMenuElement;
	// en:iMenuElement;
	socials: {
		color: string;
		showInHero: boolean;
		url: string;
	}[];
	contact: {
		phone: string;
		mail: string;
	};
}

export const menu: iMenu = {
	pl: {
		nav: [
			{
				label: "Start",
				uri: "/",
			},
			{
				label: "O nas",
				uri: "/o-nas",
				submenu: [
					{
						label: "Radosław Adamczyk",
						uri: "/o-nas/radoslaw-adamczyk",
					},
					{
						label: "Filip Bukowiecki",
						uri: "/o-nas/filip-bukowiecki",
					},
					{
						label: "Klaudia Paluch",
						uri: "/o-nas/klaudia-paluch",
					},
					// {
					// 	label: "Misja",
					// 	uri: "/o-nas#misja",
					// },
					// {
					// 	label: "Zespół",
					// 	uri: "/o-nas#zespol",
					// },
					{
						label: "Poznaj nas",
						uri: "/o-nas",
					},
				],
			},
			{
				label: "Blog",
				uri: "/blog",
				submenu: [
					{
						label: "Programowanie",
						uri: "/blog/programowanie",
					},
					{
						label: "Pozycjonowanie",
						uri: "/blog/pozycjonowanie",
					},
					// {
					// 	label: "Copywriting",
					// 	uri: "/blog/copywriting",
					// },
					// {
					// 	label: "Biznes",
					// 	uri: "/blog/biznes",
					// },
					{
						label: "Systemy operacyjne",
						uri: "/blog/systemy-operacyjne",
					},
					{
						label: "Wpisy",
						uri: "/blog",
					},
				],
			},
			{
				label: "Projekty",
				uri: "/projekty",
			},
			{
				label: "Kontakt",
				uri: "/kontakt",
			},
		],
		footer: [
			{
				label: "Wiedza",
				menu: [
					{
						label: "Programowanie",
						uri: "/blog/programowanie",
					},
					{
						label: "Pozycjonowanie",
						uri: "/blog/pozycjonowanie",
					},
					// {
					// 	label: "Copywriting",
					// 	uri: "/blog/copywriting",
					// },
					// {
					// 	label: "Biznes",
					// 	uri: "/blog/biznes",
					// },
					{
						label: "Systemy operacyjne",
						uri: "/blog/systemy-operacyjne",
					},
					{
						label: "Wpisy",
						uri: "/blog",
					},
				],
			},
			{
				label: "Poznaj nas",
				menu: [
					{
						label: "Radosław Adamczyk",
						uri: "/o-nas/radoslaw-adamczyk",
					},
					{
						label: "Filip Bukowiecki",
						uri: "/o-nas/filip-bukowiecki",
					},
					{
						label: "Klaudia Paluch",
						uri: "/o-nas/klaudia-paluch",
					},
					// {
					// 	label: "Misja",
					// 	uri: "/o-nas#misja",
					// },
					// {
					// 	label: "Zespół",
					// 	uri: "/o-nas#zespol",
					// },
					{
						label: "Poznaj nas",
						uri: "/o-nas",
					},
				],
			},
			{
				label: "Informacje",
				menu: [
					{
						label: "Start",
						uri: "/",
					},
					{
						label: "O nas",
						uri: "/o-nas",
					},
					{
						label: "Blog",
						uri: "/blog",
					},
					{
						label: "Projekty",
						uri: "/projekty",
					},
				],
			},
			{
				label: "Kontakt",
				menu: [
					{
						label: "Kontakt",
						uri: "/kontakt",
					},
					// {
					// 	label: "Polityka prywatności",
					// 	uri: "/polityka-prywatnosci",
					// },
				],
			},
		],
	},
	socials: [
		{
			showInHero: true,
			url: "https://www.facebook.com/radoslaw.adamczyk.2000",
			color: "#1877f2",
		},
		{
			showInHero: true,
			url: "https://www.instagram.com/radoslaw.adamczyk.2000/",
			color: "#f46f30",
		},
		{
			showInHero: true,
			url: "https://www.youtube.com/channel/UCOHB1fpEKwxhjCEDNgVLEog",
			color: "#ff0000",
		},
		{
			showInHero: true,
			url: "https://github.com/RadoslawAdamczyk2000",
			color: "#ee1d52",
		},
		{
			showInHero: false,
			url: "https://www.linkedin.com/in/rados%C5%82aw-adamczyk-853948195/",
			color: "#f0b6a8",
		},
		{
			showInHero: false,
			url: "https://twitter.com/?lang=pl",
			color: "#1da1f2",
		},
	],
	contact: {
		phone: `+48794100413`,
		mail: "radoslaw.adamczyk2000@gmail.com",
	},
};
