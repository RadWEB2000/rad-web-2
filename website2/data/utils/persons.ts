interface IntPersonElement {
	cities: string;
	email: {
		address: string;
		name: string;
	};
	fullname: {
		firstname: string;
		lastname: string;
	};
	image: string;
	jobs: string;
	path: string;
	phone: {
		address: string;
		name: string;
	};
}
interface IntPersons {
	pl: IntPersonElement[];
}
export const persons: IntPersons = {
	pl: [
		{
			cities: "Śrem, Poznań, Kraków",
			email: {
				address: "radoslaw.adamczyk2000@gmail.com",
				name: "E-mail",
			},
			fullname: {
				firstname: "Radosław",
				lastname: "Adamczyk",
			},
			image: "/assets/images/adamczyk_radoslaw/front.webp",
			jobs: `Front/Web developer, SEO/SEM Specialist`,
			path: "/o-nas/radoslaw-adamczyk",
			phone: {
				address: "794100413",
				name: "Telefon",
			},
		},
		{
			cities: "Poznań, Wrocław, Warszawa",
			email: {
				address: "filip.bukowiecki@gmail.com",
				name: "E-mail",
			},
			fullname: {
				firstname: "Filip",
				lastname: "Bukowiecki",
			},
			image: "/assets/images/bukowiecki_filip/front.webp",
			jobs: `Operator kamery, montażysta`,
			path: "/o-nas/filip-bukowiecki",
			phone: {
				address: "885343346",
				name: "Telefon",
			},
		},
		{
			cities: "Biała Podlaska, Łódź, Warszawa, Bydgoszcz",
			email: {
				address: "kawaii.neko.sheart@gmail.com",
				name: "E-mail",
			},
			fullname: {
				firstname: "Klaudia",
				lastname: "Paluch",
			},
			image: "/assets/images/paluch_klaudia/front.jpg",
			jobs: `Copywriting, UX, UI Design`,
			path: "/o-nas/",
			phone: {
				address: "516675978",
				name: "Telefon",
			},
		},
	],
};
