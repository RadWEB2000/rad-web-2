import { IntPersonCardHomePage } from "../../../Utilities/Cards/PersonsCards/PersonCardHomePage/interface";
import { IntSectionHomePage } from "../../../Utilities/Sections/SectionHomePage/interface";
export interface IntAbout {
	button: {
		path: string;
		title: string;
	};
	cards: IntPersonCardHomePage[];
	content: string;
	title: string;
}
