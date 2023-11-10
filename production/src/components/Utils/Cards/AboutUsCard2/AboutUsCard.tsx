import { tImage2 } from "@default/ts/types";

type tAboutUsCard = {
	fullname: string;
	image: tImage2;
	jobs: {
		jobName: string;
	}[];
	uri: string;
} & (
	| {
			theme: "home";
	  }
	| {
			theme: "about_us";
	  }
	| {
			theme: "author";
	  }
	| {
			theme: "contact";
	  }
	| {
			theme: "service";
	  }
);

export default function AboutUsCard() {
	return <></>;
}
