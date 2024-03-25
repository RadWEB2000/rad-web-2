import { tPrimaryBlogCard } from 'cards/BlogCards/PrimaryBlogCard/PrimaryBlogCard.models';
import css from 'cards/BlogCards/PrimaryBlogCard/PrimaryBlogCard.module.scss';
import getDate from 'functions/getDate';
import Image from 'next/image';
import Link from 'next/link';

export default function PrimaryBlogCard({
	categories,
	date,
	excerpt,
	title,
	uri,
	author,
	image,
}: tPrimaryBlogCard) {
	const { day, month, year } = getDate(date, 'short', 'pl');

	return (
		<Link
			className={css.wrapper}
			href={uri}
			rel="index follow"
		>
			<picture className={css.featuredImage}>
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
					quality={40}
				/>
			</picture>
			<div className={css.details}>
				<p className={css.date}>{`${day} ${month()} ${year}`}</p>
				<ul className={css.categories}>
					{categories.map(({ name, uri }, index) => {
						return (
							<Link
								className={css.category}
								href={uri}
								key={`${index} - ${uri}`}
							>
								{name}
							</Link>
						);
					})}
				</ul>
			</div>
			<section className={css.container}>
				<h3
					className={css.title}
					dangerouslySetInnerHTML={{ __html: title }}
				/>
				<p
					className={css.excerpt}
					dangerouslySetInnerHTML={{
						__html: excerpt.substring(0, 105),
					}}
				/>
			</section>
			<div className={css.author}>
				<picture className={css.author__image}>
					<Image
						alt={author.image.altText}
						fill
						loading="lazy"
						src={author.image.sourceUrl}
						style={{
							objectFit: 'cover',
							objectPosition: 'top',
						}}
						title={author.image.title}
						quality={20}
					/>
				</picture>
				<p
					className={css.author__fullname}
				>{`${author.firstName} ${author.lastName}`}</p>
			</div>
		</Link>
	);
}
