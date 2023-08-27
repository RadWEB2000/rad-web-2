interface iDate {
	date: string;
	lang: "pl" | "en";
	type: "short" | "long" | "numeric";
}
interface iDateMonth {
	month: number;
	lang: "pl" | "en";
	type: "short" | "long" | "numeric";
}

const getMonthName = ({ month, lang = "pl", type }: iDateMonth) => {
	const monthsLongPl: string[] = [
		"Styczeń",
		"Luty",
		"Marzec",
		"Kwiecień",
		"Maj",
		"Czerwiec",
		"Lipiec",
		"Sierpień",
		"Wrzesień",
		"Październik",
		"Listopad",
		"Grudzień",
	];
	const monthsShortPl: string[] = [
		"Sty",
		"Lut",
		"Mar",
		"Kwi",
		"Maj",
		"Cze",
		"Lip",
		"Sie",
		"Wrz",
		"Paź",
		"Lis",
		"Gru",
	];
	const monthsLongEn: string[] = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December",
	];
	const monthsShortEn: string[] = [
		"Jan",
		"Feb",
		"Mar",
		"Apr",
		"May",
		"Jun",
		"Jul",
		"Aug",
		"Sep",
		"Oct",
		"Nov",
		"Dec",
	];

	if (type === "long") {
		if (lang === "en") {
			return monthsLongEn[month - 1] || month;
		} else if (lang === "pl") {
			return monthsLongPl[month - 1] || month;
		}
	} else if (type === "short") {
		if (lang === "en") {
			return monthsShortEn[month - 1] || month;
		} else if (lang === "pl") {
			return monthsShortPl[month - 1] || month;
		}
	} else if (type === "numeric") {
		return month < 10 ? `0${month}` : month;
	} else {
		return month;
	}
};

export const getDate = ({ date, lang = "pl", type }: iDate) => {
	const getDay = new Date(date).getDate();
	const day = getDay < 10 ? `0${getDay}` : getDay;
	const getMonth = new Date(date).getMonth() + 1;
	const month = getMonthName({
		lang: lang,
		month: getMonth,
		type: type,
	});
	const year = new Date(date).getFullYear();

	return { day, month, year };
};
