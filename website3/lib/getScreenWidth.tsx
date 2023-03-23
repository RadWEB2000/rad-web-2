import { Dispatch, SetStateAction } from "react";
interface intGetScreenWidth {
	handler: Dispatch<SetStateAction<boolean>> | any;
}
export const getScreenWidth = ({ handler }: intGetScreenWidth): any => {
	if (window !== undefined) {
		window.addEventListener("resize", () => {
			if (window.screen.width >= 1000) {
				handler(true);
			} else {
				handler(false);
			}
		});
	}
};
