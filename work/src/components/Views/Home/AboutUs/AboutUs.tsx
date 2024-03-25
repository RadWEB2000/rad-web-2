import PrimaryButton from 'buttons/PrimaryButton';
import { PrimaryPersonCard } from 'cards/index';
import Image from 'next/image';
import { tAboutUs } from 'v/home/AboutUs/AboutUs.models';
import css from 'v/home/AboutUs/AboutUs.module.scss';

export default function AboutUs({
	button,
	content,
	image,
	team,
	title,
}: tAboutUs) {
	return (
		<>
			<section className={css.container}>
				<h2 className={css.title}>{title}</h2>
				<div className={css.button}>
					<PrimaryButton
						{...button}
						mode="white"
						rel="index follow"
					/>
				</div>
				<p
					className={css.content}
					dangerouslySetInnerHTML={{ __html: content }}
				/>
				<figure className={css.image}>
					<Image
						alt={image.altText}
						fill
						loading="lazy"
						src={image.sourceUrl}
						style={{
							objectFit: 'cover',
							objectPosition: 'center',
						}}
						title={image.title}
						quality={55}
					/>
				</figure>
			</section>
			{team && (
				<ul className={css.cards}>
					{team
						.reverse()
						.map(
							(
								{ firstName, lastName, image, overview, works },
								index
							) => {
								return (
									<PrimaryPersonCard
										fullname={`${firstName} ${lastName}`}
										image={image}
										key={index}
										overview={overview}
										works={works}
									/>
								);
							}
						)}
				</ul>
			)}
		</>
	);
}
