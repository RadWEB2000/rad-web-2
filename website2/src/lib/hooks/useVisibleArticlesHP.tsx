import { useEffect, useState } from "react";

export const useVisibleArticlesHP = () => {
	const [articlesNumber, setArticlesNumber] = useState<number>(5);

	const sizes = (windowSize: number) => {
		if (windowSize > 1800) {
			setArticlesNumber(5);
		} else if (windowSize > 1525) {
			setArticlesNumber(4);
		} else if (windowSize <= 1525) {
			setArticlesNumber(3);
		} else if (windowSize <= 1140) {
			setArticlesNumber(4);
		} else if (windowSize <= 755) {
			setArticlesNumber(2);
		}
	};

	useEffect(() => {
		if (window !== undefined) {
			sizes(window.innerWidth);
			window.addEventListener("resize", () => {
				sizes(window.innerWidth);
			});
		}
	}, []);
	return articlesNumber;
};
