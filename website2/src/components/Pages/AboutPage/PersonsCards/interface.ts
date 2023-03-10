import { IntSectionAboutPage } from "./../../../../Utilities/Sections/SectionAboutPage/interface";
export interface IntPersonsCards extends IntSectionAboutPage {
	cards: {
		cities: string;
		fullname: {
			firstname: string;
			lastname: string;
		};
		image: string;
		jobs: string;
		path: string;
	}[];
}
