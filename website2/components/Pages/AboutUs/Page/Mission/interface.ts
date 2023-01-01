import { IntMissionCard } from "../../../../Utilities/Cards/MissionCard/interface";
import { IntSectionAboutPage } from "../../../../Utilities/Sections/SectionAboutPage/interface";
export interface IntMission extends IntSectionAboutPage {
	cards: IntMissionCard[];
}
