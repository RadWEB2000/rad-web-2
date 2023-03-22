export const getDate = (date: string | Date) => {
	const time = new Date(date);

	const {
		day,
		month,
		year,
	}: { day: string | number; month: string | number; year: string | number } = {
		day: time.getDate() < 10 ? `0${time.getDate()}` : time.getDate(),
		month:
			time.getMonth() + 1 < 10
				? `0${time.getMonth() + 1}`
				: time.getMonth() + 1,
		year: time.getFullYear(),
	};

	return { day, month, year };
};
