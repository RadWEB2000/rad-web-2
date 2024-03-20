import PrimaryButton from 'buttons/PrimaryButton';
import Image from 'next/image';
import { tHero } from 'v/home/Hero/Hero.models';
import css from 'v/home/Hero/Hero.module.scss';

export default function Hero({
	buttons,
	slogan,
	background_image: image,
	title,
}: tHero) {
	return (
		<section className={css.wrapper}>
			<picture className={css.image}>
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
					title=""
					quality={80}
				/>
			</picture>
			<header className={css.container}>
				<hgroup className={css.headings}>
					<h1
						className={css.title}
						dangerouslySetInnerHTML={{ __html: title }}
					/>
					<h2
						className={css.slogan}
						dangerouslySetInnerHTML={{ __html: slogan }}
					/>
				</hgroup>
				<ul className={css.buttons}>
					{buttons.map((item, index) => {
						return (
							<PrimaryButton
								{...item}
								mode="black"
								rel="index follow"
								key={index}
							/>
						);
					})}
				</ul>
			</header>
		</section>
	);
}
