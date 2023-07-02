interface isortArticlesByDate {
	articles: any[];
}

export const sortArticlesByDate = ({ articles }: isortArticlesByDate) => {
	return articles.sort((a, b) => {
		const dateA: any = new Date(a.release);
		const dateB: any = new Date(b.release);

		// Sortuj od najnowszych do najstarszych
		return dateB - dateA;
	});
};
