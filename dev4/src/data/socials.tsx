import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF, FaYoutube } from "react-icons/fa";
import { SiInstagram } from "react-icons/si";
import { PiGithubLogoLight, PiTiktokLogoBold } from "react-icons/pi";
import { RiLinkedinFill } from "react-icons/ri";

type tSocials = {
	icon: JSX.Element;
	url: string;
};

export const socials: tSocials[] = [
	{
		icon: <FaFacebookF />,
		url: "",
	},
	{
		icon: <FaYoutube />,
		url: "",
	},
	{
		icon: <SiInstagram />,
		url: "",
	},
	{
		icon: <PiTiktokLogoBold />,
		url: "",
	},
	{
		icon: <FaXTwitter />,
		url: "",
	},
	{
		icon: <PiGithubLogoLight />,
		url: "",
	},
	{
		icon: <RiLinkedinFill />,
		url: "",
	},
];
