import PrimaryButton from "buttons/PrimaryButton";
import { PrimaryPersonCard } from "cards/index";
import Image from "next/image";
import { tAboutUs } from "v/home/AboutUs/AboutUs.models";
import css from "v/home/AboutUs/AboutUs.module.scss";

export default function AboutUs({button,content,image,team,title,uri}:tAboutUs) {
	return (
		<>	
			D
			{
				team &&
				<ul className={css.cards}>
					{team.reverse().map(({firstName,lastName, image , overview,works},index) => {
						return (	
							<PrimaryPersonCard
								fullname={`${firstName} ${lastName}`}
								image={image}
								key={index}
								overview={overview}
								works={works}
							/>
						)
					})}
				</ul>
			}
		</>
	);
}
