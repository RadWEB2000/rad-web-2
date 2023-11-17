import { AiOutlineHome, AiOutlineFundProjectionScreen } from "react-icons/ai";
import { PiUsersThreeFill, PiBooksLight } from "react-icons/pi";
import { LuContact2 } from "react-icons/lu";

type tMobileNavigation = {
	icon: JSX.Element;
	label: string;
	uri: string;
};
export const mobileNavigation: tMobileNavigation[] = [
	{
		icon: <AiOutlineHome />,
		label: "Start",
		uri: "/",
	},
	{
		icon: <PiUsersThreeFill />,
		label: "O nas",
		uri: "/o-nas",
	},
	{
		icon: <PiBooksLight />,
		label: "Blog",
		uri: "/blog",
	},
	{
		icon: <AiOutlineFundProjectionScreen />,
		label: "Projekty",
		uri: "/projekty",
	},
	{
		icon: <LuContact2 />,
		label: "Kontakt",
		uri: "/kontakt",
	},
];
