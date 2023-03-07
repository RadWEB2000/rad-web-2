import { useEffect, useState } from "react";
export const useScreenWidth = () => {
	const [isResized, setIsResized] = useState(false);
	useEffect(() => {
		if (typeof window !== "undefined") {
			const handle = () => {
				if (window.screen.width >= 1000) {
					setIsResized(true);
				} else {
					setIsResized(false);
				}
			};
			window.addEventListener("resize", handle);
		}
	}, []);
	return isResized;
};
