import { RiFacebookFill, RiGoogleFill } from "react-icons/ri";
import { ReactElement } from "react";

export interface iLoginSocial {
	color: string;
	icon: ReactElement;
	name: string;
}

export const loginSocial: iLoginSocial[] = [
	{
		color: "#ea4335",
		icon: <RiGoogleFill />,
		name: "Google",
	},
	{
		color: "#1877f2",
		icon: <RiFacebookFill />,
		name: "Facebook",
	},
];
