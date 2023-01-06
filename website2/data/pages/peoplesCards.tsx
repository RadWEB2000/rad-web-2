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
				"https://scontent-frt3-2.xx.fbcdn.net/v/t39.30808-6/320637585_556006019305036_2965245612562101645_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFSXTzRiKwZ8ACQHDhAlqXgHysRVyhbDVIfKxFXKFsNUo7WIAnRt-EOMgiDCKsAf-35UrNb5s-3s0HnHgF2JquG&_nc_ohc=ObDCLc16kuUAX-AYIzP&_nc_ht=scontent-frt3-2.xx&oh=00_AfAbf6ip_Jq_3MIs9BNvx4E9F4whH8fL50pNEDfeklik4A&oe=63B54A13",
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
				"https://scontent-frt3-1.xx.fbcdn.net/v/t1.6435-9/67766166_899725800378552_6233916043962613760_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeH6IIpTWvoiChu7_8rhNyg62oHsb1Lh4JragexvUuHgmqHfG4kpVFkm8RB_U_FeuwWWJm_1p8lAtHUB_9rjPeHC&_nc_ohc=9lzZ7WnNGOsAX_MX80x&_nc_oc=AQmJ5OR14EOjIRv3ROl5X7MVPzjHOJQNAT6NMmNu84LaaG0YC59hTmdPMtERf8Q_kJc&_nc_ht=scontent-frt3-1.xx&oh=00_AfD--ReCiqncvyOe61Wm9I307S-tUWjVDHk8BZlqA4_LfA&oe=63D7A794",
			jobs: "Copywriter, UI/UX Designer",
			path: "/o-nas/klaudia-paluch",
			phone: {
				adress: "+48794100413",
				name: "Telefon",
			},
		},
	],
};
