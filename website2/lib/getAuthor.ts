import { persons } from "../data/utils/persons";
export const getAuthor = (
	author: "adamczyk_radoslaw" | "bukowiecki_filip" | "paluch_klaudia"
) => {
	if (author === "adamczyk_radoslaw") {
		return persons.pl.adamczyk_radoslaw;
	} else if (author === "bukowiecki_filip") {
		return persons.pl.bukowiecki_filip;
	} else if (author === "paluch_klaudia") {
		return persons.pl.paluch_klaudia;
	} else {
		return persons.pl.adamczyk_radoslaw;
	}
};
