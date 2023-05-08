import { tDateVariant, tLang } from "../../ts/types";

interface iGetMonthName {
	date: string | Date;
	lang: tLang;
	variant: tDateVariant;
}
interface iGetDate extends iGetMonthName {}
const getMonthName = ({ date, lang, variant }: iGetMonthName) => {
	const time = new Date(date).getMonth() + 1;
	const month = () => {
		if (lang === "pl") {
			if (variant === "short") {
				if (time === 1) return "Sty";
				else if (time === 2) return "Lut";
				else if (time === 3) return "Mar";
				else if (time === 4) return "Kwi";
				else if (time === 5) return "Maj";
				else if (time === 6) return "Cze";
				else if (time === 7) return "Lip";
				else if (time === 8) return "Sie";
				else if (time === 9) return "Wrz";
				else if (time === 10) return "Paź";
				else if (time === 11) return "Lis";
				else if (time === 12) return "Gru";
			} else if (variant === "long") {
				if (time === 1) return "Styczeń";
				else if (time === 2) return "Luty";
				else if (time === 3) return "Marzec";
				else if (time === 4) return "Kwiecień";
				else if (time === 5) return "Maj";
				else if (time === 6) return "Czerwiec";
				else if (time === 7) return "Lipiec";
				else if (time === 8) return "Sierpień";
				else if (time === 9) return "Wrzesień";
				else if (time === 10) return "Październik";
				else if (time === 11) return "Listopad";
				else if (time === 12) return "Grudzień";
			} else if (variant === "numeric") {
				if (time === 1) return "01";
				else if (time === 2) return "02";
				else if (time === 3) return "03";
				else if (time === 4) return "04";
				else if (time === 5) return "05";
				else if (time === 6) return "06";
				else if (time === 7) return "07";
				else if (time === 8) return "08";
				else if (time === 9) return "09";
				else if (time === 10) return "10";
				else if (time === 11) return "11";
				else if (time === 12) return "12";
			} else if (variant === "roman") {
				if (time === 1) return "I";
				else if (time === 2) return "II";
				else if (time === 3) return "III";
				else if (time === 4) return "IV";
				else if (time === 5) return "V";
				else if (time === 6) return "VI";
				else if (time === 7) return "VII";
				else if (time === 8) return "VIII";
				else if (time === 9) return "IX";
				else if (time === 10) return "X";
				else if (time === 11) return "XI";
				else if (time === 12) return "XII";
			} else return null;
		}
	};
	return month();
};
export const getDate = ({ date, lang, variant }: iGetDate) => {
	const time = new Date(date);
	const { day, month, year } = {
		day: time.getDate() < 10 ? `0${time.getDate()}` : time.getDate(),
		month: getMonthName({ date, lang, variant }),
		year: time.getFullYear(),
	};
	return { day, month, year };
};
