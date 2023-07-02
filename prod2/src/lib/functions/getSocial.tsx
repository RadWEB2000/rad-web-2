import {
	FaBehance,
	FaFacebookF,
	FaGithub,
	FaInstagram,
	FaLinkedinIn,
	FaPinterestP,
	FaTiktok,
	FaTwitter,
	FaYoutube,
} from "react-icons/fa";

export const getSocial = (url: string) => {
	const getIcon = () => {
		if (url.toLowerCase().includes("facebook")) return <FaFacebookF />;
		else if (url.toLowerCase().includes("instagram")) return <FaInstagram />;
		else if (url.toLowerCase().includes("youtube")) return <FaYoutube />;
		else if (url.toLowerCase().includes("twitter")) return <FaTwitter />;
		else if (url.toLowerCase().includes("tiktok")) return <FaTiktok />;
		else if (url.toLowerCase().includes("behance")) return <FaBehance />;
		else if (url.toLowerCase().includes("github")) return <FaGithub />;
		else if (url.toLowerCase().includes("linkedin")) return <FaLinkedinIn />;
		else if (url.toLowerCase().includes("pinterest")) return <FaPinterestP />;
		else return <></>;
	};
	const getName = () => {
		if (url.toLowerCase().includes("facebook")) return "Facebook";
		else if (url.toLowerCase().includes("instagram")) return "Instagram";
		else if (url.toLowerCase().includes("youtube")) return "YouTube";
		else if (url.toLowerCase().includes("twitter")) return "Twitter";
		else if (url.toLowerCase().includes("tiktok")) return "TikTok";
		else if (url.toLowerCase().includes("behance")) return "Behance";
		else if (url.toLowerCase().includes("github")) return "Github";
		else if (url.toLowerCase().includes("linkedin")) return "LinkedIn";
		else if (url.toLowerCase().includes("pinterest")) return "Pinterest";
		else return "";
	};

	return {
		icon: getIcon(),
		name: getName(),
	};
};
