import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3, DiJavascript, DiSass, DiReact, DiJava } from "react-icons/di";
import { FaVuejs, FaAngular, FaNodeJs, FaWordpress } from "react-icons/fa";
import {
	SiTypescript,
	SiStyledcomponents,
	SiGatsby,
	SiNextdotjs,
	SiExpress,
	SiNuxtdotjs,
	SiGoogle,
	SiPhp,
	SiBootstrap,
	SiTailwindcss,
	SiPrestashop,
	SiPython,
} from "react-icons/si";

const getStack = (value: string) => {
	const getIcon = () => {
		if (value.toLowerCase().includes("html")) {
			return <AiFillHtml5 />;
		} else if (value.toLowerCase().includes("css")) {
			return <DiCss3 />;
		} else if (value.toLowerCase().includes("scss") || value.includes("sass")) {
			return <DiSass />;
		} else if (value.toLowerCase().includes("styled-components")) {
			return <SiStyledcomponents />;
		} else if (value.toLowerCase().includes("bootstrap")) {
			return <SiBootstrap />;
		} else if (value.toLowerCase().includes("tailwind")) {
			return <SiTailwindcss />;
		} else if (value.toLowerCase().includes("javascript")) {
			return <DiJavascript />;
		} else if (value.toLowerCase().includes("typescript")) {
			return <SiTypescript />;
		} else if (value.toLowerCase().includes("node")) {
			return <FaNodeJs />;
		} else if (value.toLowerCase().includes("express")) {
			return <SiExpress />;
		} else if (value.toLowerCase().includes("react")) {
			return <DiReact />;
		} else if (value.toLowerCase().includes("vue")) {
			return <FaVuejs />;
		} else if (value.toLowerCase().includes("angular")) {
			return <FaAngular />;
		} else if (value.toLowerCase().includes("gatsby")) {
			return <SiGatsby />;
		} else if (value.toLowerCase().includes("next")) {
			return <SiNextdotjs />;
		} else if (value.toLowerCase().includes("seo")) {
			return <SiGoogle />;
		} else if (value.toLowerCase().includes("nuxt")) {
			return <SiNuxtdotjs />;
		} else if (value.toLowerCase().includes("php")) {
			return <SiPhp />;
		} else if (value.toLowerCase().includes("wordpress")) {
			return <FaWordpress />;
		} else if (value.toLowerCase().includes("prestashop")) {
			return <SiPrestashop />;
		} else if (value.toLowerCase().includes("python")) {
			return <SiPython />;
		} else if (value.toLowerCase().includes("java")) {
			return <DiJava />;
		} else {
			return null;
		}
	};
	const getName = () => {
		if (value.toLowerCase().includes("html")) {
			return "HTML";
		} else if (value.toLowerCase().includes("css")) {
			return "CSS";
		} else if (value.toLowerCase().includes("scss") || value.includes("sass")) {
			return "SASS / SCSS";
		} else if (value.toLowerCase().includes("styled-components")) {
			return "styled-components";
		} else if (value.toLowerCase().includes("bootstrap")) {
			return "bootstrap";
		} else if (value.toLowerCase().includes("tailwind")) {
			return "tailwind css";
		} else if (value.toLowerCase().includes("javascript")) {
			return "javascript";
		} else if (value.toLowerCase().includes("typescript")) {
			return "typescript";
		} else if (value.toLowerCase().includes("node")) {
			return "nodejs";
		} else if (value.toLowerCase().includes("express")) {
			return "express.js";
		} else if (value.toLowerCase().includes("react")) {
			return "React JS";
		} else if (value.toLowerCase().includes("vue")) {
			return "Vue";
		} else if (value.toLowerCase().includes("angular")) {
			return "Angular";
		} else if (value.toLowerCase().includes("gatsby")) {
			return "GatsbyJS";
		} else if (value.toLowerCase().includes("next")) {
			return "NextJS";
		} else if (value.toLowerCase().includes("seo")) {
			return "SEO";
		} else if (value.toLowerCase().includes("nuxt")) {
			return "NuxtJS";
		} else if (value.toLowerCase().includes("php")) {
			return "PHP";
		} else if (value.toLowerCase().includes("wordpress")) {
			return "Wordpress";
		} else if (value.toLowerCase().includes("prestashop")) {
			return "PrestaShop";
		} else if (value.toLowerCase().includes("python")) {
			return "Python";
		} else if (value.toLowerCase().includes("java")) {
			return "Java";
		} else {
			return null;
		}
	};

	const { icon, name } = {
		icon: getIcon(),
		name: getName(),
	};
	return { icon, name };
};

export default getStack;
