import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF, FaYoutube } from "react-icons/fa";
import { SiInstagram } from "react-icons/si";
import { PiGithubLogoLight, PiTiktokLogoBold } from "react-icons/pi";
import { RiLinkedinFill } from "react-icons/ri";

type tSocials = {
	name: string;
	icon: JSX.Element;
	url: string;
};

export const socials: tSocials[] = [
	{
		name: "facebook",
		icon: <FaFacebookF />,
		url: "",
	},
	{
		name: "youtube",
		icon: <FaYoutube />,
		url: "",
	},
	{
		name: "instagram",
		icon: <SiInstagram />,
		url: "",
	},
	{
		name: "tiktok",
		icon: <PiTiktokLogoBold />,
		url: "",
	},
	{
		name: "twitter",
		icon: <FaXTwitter />,
		url: "",
	},
	{
		name: "github",
		icon: <PiGithubLogoLight />,
		url: "",
	},
	{
		name: "linkedin",
		icon: <RiLinkedinFill />,
		url: "",
	},
];
