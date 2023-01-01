import Slide from "../Slide/Slide";
import styles from "./Slides.module.scss";
import { home } from "./../../../../../../data/pages/home";
import { RxTrackNext, RxTrackPrevious } from "react-icons/rx";
import { useEffect, useState } from "react";
const Slides = () => {
	const [currentSlide, setCurrentSlide] = useState(0);
	const { button, cards } = home.pl.hero.slides;
	return (
		<div className={styles.wrapper}>
			<Slide
				button={button}
				content={cards[currentSlide].content}
				image={cards[currentSlide].image}
				path={cards[currentSlide].path}
				title={cards[currentSlide].title}
			/>
			<div className={styles.buttons}>
				<button
					className={styles.button}
					onClick={() =>
						setCurrentSlide(
							currentSlide <= 0 ? cards.length - 1 : currentSlide - 1
						)
					}
				>
					<RxTrackPrevious />
				</button>
				<span className={styles.currentSlide}>0{currentSlide + 1}</span>
				<button
					className={styles.button}
					onClick={() =>
						setCurrentSlide(
							currentSlide >= cards.length - 1 ? 0 : currentSlide + 1
						)
					}
				>
					<RxTrackNext />
				</button>
			</div>
		</div>
	);
};
export default Slides;
