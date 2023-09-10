import { tImage2 } from "@default/ts/types";
import HomeProjectCard from "./HomeProjectCard/HomeProjectCard";
import RecommendedProject from "./RecommendedProject/RecommendedProject";
import RegularProjectCard from "./RegularProjectCard/RegularProjectCard";

type tProjectCard = {
	image: tImage2;
	title: string;
	uri: string;
} & (
	| {
			theme: "recommended";
	  }
	| ({
			excerpt: string;
	  } & (
			| {
					theme: "regular";
					date: string;
			  }
			| {
					theme: "home";
					button: string;
			  }
	  ))
);

export default function ProjectCard(props: tProjectCard) {
	const { image, theme, title, uri } = props;
	if (theme === "home") {
		const { button, excerpt } = props;
		return (
			<HomeProjectCard
				button={button}
				excerpt={excerpt}
				image={image}
				title={title}
				uri={uri}
			/>
		);
	} else if (theme === "recommended") {
		return <RecommendedProject image={image} title={title} uri={uri} />;
	} else if (theme === "regular") {
		const { date, excerpt } = props;
		return (
			<RegularProjectCard
				date={date}
				excerpt={excerpt}
				image={image}
				title={title}
				uri={uri}
			/>
		);
	}
}
