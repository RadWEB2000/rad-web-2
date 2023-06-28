import { useEffect, useState } from "react";

export const useScroll = () => {
	const [isScroll, updateIsScroll] = useState<boolean>(false);

	useEffect(() => {
		if (typeof window !== undefined) {
			const handleScroll = () => {
				if (window.scrollY > 1) {
					updateIsScroll(true);
				} else {
					updateIsScroll(false);
				}
			};
			window.addEventListener("scroll", handleScroll);
		}
	}, []);

	return isScroll;
};
