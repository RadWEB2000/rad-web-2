interface iPeopleCard {
	cities: string;
	email: {
		adress: string;
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
		adress: string;
		name: string;
	};
}
interface iPeoplesCards {
	pl: iPeopleCard[];
}
export const peoplesCards: iPeoplesCards = {
	pl: [
		{
			cities: "Śrem, Kościan, Poznań",
			email: {
				adress: "radoslaw.adamczyk2000@gmail.com",
				name: "Email",
			},
			fullname: {
				firstname: "Radosław",
				lastname: "Adamczyk",
			},
			image:
				"https://scontent-frx5-1.xx.fbcdn.net/v/t39.30808-6/276023280_313097927587919_115999904089054848_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=174925&_nc_ohc=ETAvIyzRkr4AX-M0-Q0&_nc_ht=scontent-frx5-1.xx&oh=00_AfAuF5KBIEooRu3_HiL6tCI1OjoXoCDp60SqCmjb6Dtt2Q&oe=63D8F130",
			jobs: "Front-end & Web developer, specjalista SEO/SEM ",
			path: "/o-nas/radoslaw-adamczyk",
			phone: {
				adress: "+48794100413",
				name: "Telefon",
			},
		},
		{
			cities: "Poznań, Warszawa",
			email: {
				adress: "radoslaw.adamczyk2000@gmail.com",
				name: "Email",
			},
			fullname: {
				firstname: "Filip",
				lastname: "Bukowiecki",
			},
			image:
				"https://scontent-frt3-2.xx.fbcdn.net/v/t1.6435-9/163593504_522809258687062_2936523161654908151_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGmNL7hcbV9yErEiqSZY4BjWgwyI9H7cJhaDDIj0ftwmLAHdf40TalC3ht9HcE-OCIzQvnkr4NolYrTSeQWLpdz&_nc_ohc=kBuwzLKGB_QAX8FdnqS&_nc_ht=scontent-frt3-2.xx&oh=00_AfAeVLMg5x3MGYY3ikQvHik-_iXsyBOyG9haIK7QMrdtgw&oe=63D7CFD1",
			jobs: "Wideomaker",
			path: "/o-nas/filip-bukowiecki",
			phone: {
				adress: "+48794100413",
				name: "Telefon",
			},
		},
		{
			cities: "Hrud, Łódź, Bydgoszcz",
			email: {
				adress: "radoslaw.adamczyk2000@gmail.com",
				name: "Email",
			},
			fullname: {
				firstname: "Klaudia",
				lastname: "Paluch",
			},
			image:
				"https://scontent-frt3-2.xx.fbcdn.net/v/t1.6435-9/67766166_899725800378552_6233916043962613760_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=pqsjommgUA4AX_ZOmof&_nc_oc=AQlgbwV0J0hQy80XEhuuvwaqgljnZtH6Px4H3UBiW9zkqRAVLSkyt8tXfjN-fjda_FU&_nc_ht=scontent-frt3-2.xx&oh=00_AfC0Sz_SHEyPHwdGA3N1GKfn6OucWd9KTzHErSIqEWvtEQ&oe=63FC9194",
			jobs: "Copywriter, UI/UX Designer",
			path: "/o-nas/klaudia-paluch",
			phone: {
				adress: "+48794100413",
				name: "Telefon",
			},
		},
	],
};
