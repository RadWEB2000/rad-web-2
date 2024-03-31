import Link from 'next/link';
import Image from 'next/image';
import mechanicImg from 'img/car-mechanic.webp';
import css from 'cards/ProjectCards/SecondaryProjectCard/SecondaryProjectCard.module.scss';
export default function SecondaryProjectCard() {
	return (
		<li className={css.wrapper}>
			<section className={css.container}>
				<header className={css.details}>
					<h3 className={css.title}>Mechanik Ludomy</h3>
					<h5 className={css.subtitle}>Patryk Łusiewicz</h5>
					<strong className={css.slogan}>
						Strona internetowa - SEO
					</strong>
				</header>
				<div className={css.box}>
					<Link href="">więcej</Link>
					<p className={css.overview}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Reiciendis praesentium impedit, vero laborum porro et?
						Sed, exercitationem quam accusamus nobis asperiores
						consequatur, incidunt laudantium, <br />
						<br />
						consequuntur commodi eaque necessitatibus qui nulla!
						Recusandae totam, quidem eligendi unde fugit quia. Ab
						adipisci maiores natus nobis in nesciunt sed
						perspiciatis? Sit nostrum ex quis ullam tempore?
						Perferendis
					</p>
				</div>
			</section>
			<figure className={css.image__box}>
				<picture className={css.image}>
					<Image
						alt="alt"
						fill
						src={mechanicImg.src}
						style={{
							objectFit: 'contain',
							objectPosition: 'center',
						}}
						title=""
						quality={64}
					/>
				</picture>
			</figure>
		</li>
	);
}
