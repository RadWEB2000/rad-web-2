interface iDate {
	date: string;
	type: "short" | "long" | "numeric";
}
interface iDateMonth {
	month: number;
	type: "short" | "long" | "numeric";
}

const getMonthName = ({ month, type }: iDateMonth) => {
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

	if (type === "long") {
		return monthsLongPl[month - 1] || month;
	} else if (type === "short") {
		return monthsShortPl[month - 1] || month;
	} else if (type === "numeric") {
		return month < 10 ? `0${month}` : month;
	} else {
		return month < 10 ? `0${month}` : month;
	}
};

export const getDate = ({ date, type }: iDate) => {
	const getDay = new Date(date).getDate();
	const day = getDay < 10 ? `0${getDay}` : getDay;
	const getMonth = new Date(date).getMonth() + 1;
	const month = getMonthName({
		month: getMonth,
		type: type,
	});
	const year = new Date(date).getFullYear();

	return { day, month, year };
};
