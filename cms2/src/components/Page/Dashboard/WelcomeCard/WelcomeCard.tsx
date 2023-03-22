import Image from "next/image";
import { ReactElement } from "react";

export interface iWelcomeCard {
	image: string;
	title: string;
}

const WelcomeCard = ({ image, title }: iWelcomeCard): ReactElement => {
	return (
		<div>
			<figure>
				<Image
					alt=""
					fill
					style={{
						objectFit: "cover",
						objectPosition: "center",
					}}
					src={image}
				/>
			</figure>
			<figcaption>{title}</figcaption>
		</div>
	);
};
export default WelcomeCard;
