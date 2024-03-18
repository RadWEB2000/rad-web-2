import PrimaryButton from "buttons/PrimaryButton";
import Image from "next/image";
import { tAboutUs } from "v/home/AboutUs/AboutUs.models";
import css from "v/home/AboutUs/AboutUs.module.scss";

export default function AboutUs({button,content,image,team,title,uri}:tAboutUs) {
	return (
		<>	
			<section className={css.wrapper} >
				<h2 className={css.title}  dangerouslySetInnerHTML={{__html:title}} />
				<section className={css.box}>
				<div className={css.button}>
					<PrimaryButton
						{...button}
						mode="white"
						rel="index follow"
					/>
				</div>
				<p className={css.content} 
					dangerouslySetInnerHTML={{__html:content}}
				/>
				</section>
				<picture className={css.image} >
					<Image
						alt={image.altText}
						fill
						loading="eager"
						priority
						src={image.sourceUrl}
						style={{
							objectFit: 'cover',
							objectPosition: 'center',
							filter:"brightness(105%)"
						}}
						title={image.title}
						quality={80}
					/>
				</picture>
			</section>
			
		</>
	);
}
