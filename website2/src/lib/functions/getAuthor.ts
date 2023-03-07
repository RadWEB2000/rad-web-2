import { persons } from "../../../data/utils/persons";
import { tAuthor, tLang } from "../../ts/types";
interface iGetAuthor {
	author: tAuthor;
	lang: tLang;
}
export const getAuthor = ({ author, lang }: iGetAuthor) => {
	if (lang === "pl") {
		if (author === "adamczyk_radoslaw" || author === "radoslaw_adamczyk") {
			return persons.pl.adamczyk_radoslaw;
		} else if (author === "filip_bukowiecki" || author === "bukowiecki_filip") {
			return persons.pl.bukowiecki_filip;
		} else if (author === "klaudia_paluch" || author === "paluch_klaudia") {
			return persons.pl.paluch_klaudia;
		} else {
			return persons.pl.adamczyk_radoslaw;
		}
	} else {
		if (author === "adamczyk_radoslaw" || author === "radoslaw_adamczyk") {
			return persons.pl.adamczyk_radoslaw;
		} else if (author === "filip_bukowiecki" || author === "bukowiecki_filip") {
			return persons.pl.bukowiecki_filip;
		} else if (author === "klaudia_paluch" || author === "paluch_klaudia") {
			return persons.pl.paluch_klaudia;
		}
	}
};
