import Slide from "../Slide/Slide";
import styles from "./Slides.module.scss";
import { RxTrackNext, RxTrackPrevious } from "react-icons/rx";
import { useEffect, useState } from "react";
import { homepage } from "./../../../../../../data/pages/homepage";
const Slides = () => {
	const [currentSlide, setCurrentSlide] = useState(0);
	const { slides } = homepage.pl.content.hero;
	return (
		<div className={styles.wrapper}>
			<Slide
				button={slides[currentSlide].button}
				content={slides[currentSlide].content}
				image={slides[currentSlide].image}
				path={slides[currentSlide].path}
				title={slides[currentSlide].title}
			/>
			<div className={styles.buttons}>
				<button
					className={styles.button}
					onClick={() =>
						setCurrentSlide(
							currentSlide <= 0 ? slides.length - 1 : currentSlide - 1
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
							currentSlide >= slides.length - 1 ? 0 : currentSlide + 1
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
