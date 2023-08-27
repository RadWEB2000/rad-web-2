import {
	AiOutlineFieldTime,
	AiOutlineLineChart,
	AiOutlineUser,
} from "react-icons/ai";

export const stat = [
	{
		icon: <AiOutlineFieldTime />,
		title: "Lat doświadczenia",
		value: new Date().getFullYear() - 2016,
		unit: "",
	},
	{
		icon: <AiOutlineUser />,
		title: "Zadowolonych klientów",
		value: 16,
		unit: "",
	},
	{
		icon: <AiOutlineLineChart />,
		title: "Sukcesu",
		value: 100,
		unit: "%",
	},
];
