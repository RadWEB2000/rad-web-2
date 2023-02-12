export interface IntHero {
	cities: string;
	email?: string;
	fullname: {
		firstname: string;
		lastname: string;
	};
	image: string;
	jobs: string;
	phone?: string;
	socials?: string[];
	website?: {
		title: string;
		url: string;
		visible: boolean;
	};
}
