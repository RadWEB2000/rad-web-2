import { useEffect, useState } from "react";

export const useVisibleArticlesHP = () => {
	const [articlesNumber, setArticlesNumber] = useState<number>(3);
	useEffect(() => {
		if (window !== undefined) {
			if (window.innerWidth <= 1000) {
				setArticlesNumber(2);
			} else {
				setArticlesNumber(3);
			}
			window.addEventListener("resize", () => {
				if (window.innerWidth <= 1000) {
					setArticlesNumber(2);
				} else {
					setArticlesNumber(3);
				}
			});
		}
	}, []);
	return articlesNumber;
};
