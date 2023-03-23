import {
	FaBehance,
	FaFacebookF,
	FaFigma,
	FaGithub,
	FaGoogle,
	FaInstagram,
	FaLinkedinIn,
	FaTwitter,
	FaTwitch,
	FaYoutube,
	FaVimeoV,
} from "react-icons/fa";
const getSocials = ({ path }: { path: string }) => {
	const getName = () => {
		if (path.includes("facebook")) {
			return "Facebook";
		} else if (path.includes("instagram")) {
			return "Instagram";
		} else if (path.includes("youtube")) {
			return "YouTube";
		} else if (path.includes("behance")) {
			return "Behance";
		} else if (path.includes("google")) {
			return "Google";
		} else if (path.includes("twitter")) {
			return "Twitter";
		} else if (path.includes("figma")) {
			return "Figma";
		} else if (path.includes("linkedin")) {
			return "Linkedin";
		} else if (path.includes("twitch")) {
			return "Twitch";
		} else if (path.includes("vimeo")) {
			return "Vimeo";
		} else if (path.includes("github")) {
			return "Github";
		} else return null;
	};
	const getIcon = () => {
		if (path.includes("facebook")) {
			return <FaFacebookF />;
		} else if (path.includes("instagram")) {
			return <FaInstagram />;
		} else if (path.includes("youtube")) {
			return <FaYoutube />;
		} else if (path.includes("behance")) {
			return <FaBehance />;
		} else if (path.includes("google")) {
			return <FaGoogle />;
		} else if (path.includes("twitter")) {
			return <FaTwitter />;
		} else if (path.includes("figma")) {
			return <FaFigma />;
		} else if (path.includes("linkedin")) {
			return <FaLinkedinIn />;
		} else if (path.includes("twitch")) {
			return <FaTwitch />;
		} else if (path.includes("vimeo")) {
			return <FaVimeoV />;
		} else if (path.includes("github")) {
			return <FaGithub />;
		} else return null;
	};
	const { icon, name } = {
		icon: getIcon(),
		name: getName(),
	};
	return { icon, name };
};
export default getSocials;
