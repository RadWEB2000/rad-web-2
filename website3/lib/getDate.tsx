interface intGetDate {
	date: string;
	lang: "pl" | "en" | "es";
	variant?: "fullname" | "shortname" | "numeric";
}
const getDate = ({ date, lang, variant = "numeric" }: intGetDate) => {
	const getMonthName = (date: string) => {
		const month = new Date(date).getMonth() + 1;
		if (variant === "fullname") {
			if (lang == "pl") {
				if (month === 1) {
					return "Styczeń";
				} else if (month === 2) {
					return "Luty";
				} else if (month === 3) {
					return "Marzec";
				} else if (month === 4) {
					return "Kwiecień";
				} else if (month === 5) {
					return "Maj";
				} else if (month === 6) {
					return "Czerwiec";
				} else if (month === 7) {
					return "Lipiec";
				} else if (month === 8) {
					return "Sierpień";
				} else if (month === 9) {
					return "Wrzesień";
				} else if (month === 10) {
					return "Październik";
				} else if (month === 11) {
					return "Listopad";
				} else if (month === 12) {
					return "Grudzień";
				} else return null;
			}
		} else if (variant === "shortname") {
			if (lang == "pl") {
				if (month === 1) {
					return "Sty";
				} else if (month === 2) {
					return "Lut";
				} else if (month === 3) {
					return "Mar";
				} else if (month === 4) {
					return "Kwi";
				} else if (month === 5) {
					return "Maj";
				} else if (month === 6) {
					return "Cze";
				} else if (month === 7) {
					return "Lip";
				} else if (month === 8) {
					return "Sie";
				} else if (month === 9) {
					return "Wrz";
				} else if (month === 10) {
					return "Paź";
				} else if (month === 11) {
					return "Lis";
				} else if (month === 12) {
					return "Gru";
				} else return null;
			}
		} else if (variant === "numeric") {
			if (month < 10) {
				return `0${month}`;
			} else {
				return `${month}`;
			}
		} else {
			return null;
		}
	};

	const { day, month, year } = {
		day:
			new Date(date).getDate() < 10
				? `0${new Date(date).getDate()}`
				: `${new Date(date).getDate()}`,
		month: getMonthName(date),
		year: new Date(date).getFullYear(),
	};

	return { day, month, year };
};
export default getDate;
