import { tImage2 } from "@default/ts/types";
import ContactAboutUsCard from "@default/components/Utils/Cards/AboutUsCard/ContactAboutUsCard/ContactAboutUsCard";
import HomeAboutUsCard from "@default/components/Utils/Cards/AboutUsCard/HomeAboutUsCard/HomeAboutUsCard";
import RegularAboutUsCard from "@default/components/Utils/Cards/AboutUsCard/RegularAboutUsCard/RegularAboutUsCard";

type tAboutUsCard = {
	fullname: string;
	image: tImage2;
	jobs: {
		jobName: string;
	}[];
	uri: string;
} & (
	| {
			theme: "regular";
	  }
	| {
			theme: "home";
	  }
	| {
			theme: "contact";
			email: string;

			locations: {
				city: string;
			}[];
			phone: {
				label: string;
				value: string;
			};
			socialMedia: {
				url: string;
			}[];
	  }
);

export default function AboutUsCard(props: tAboutUsCard) {
	const { fullname, image, jobs, theme, uri } = props;

	if (theme === "contact") {
		const { email, locations, phone, socialMedia } = props;
		return (
			<ContactAboutUsCard
				email={email}
				fullname={fullname}
				image={image}
				jobs={jobs}
				locations={locations}
				phone={phone}
				socialMedia={socialMedia}
				uri={uri}
			/>
		);
	} else if (theme === "home") {
		return (
			<HomeAboutUsCard
				fullname={fullname}
				image={image}
				jobs={jobs}
				uri={uri}
			/>
		);
	} else if (theme === "regular") {
		return (
			<RegularAboutUsCard
				fullname={fullname}
				image={image}
				jobs={jobs}
				uri={uri}
			/>
		);
	}
}
