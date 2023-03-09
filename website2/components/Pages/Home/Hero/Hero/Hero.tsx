import RegularButton from "../../../../../src/components/Utilities/Buttons/RegularButton/RegularButton";
import ServiceCard from "../../../../../src/components/Utilities/Cards/ServiceCard/ServiceCard";
import styles from "./Hero.module.scss";
import { IntHero } from "./interface";
import { ReactElement } from "react";

const Hero = ({ buttons, content, title }: IntHero): ReactElement => {
	return (
		<section className={styles.wrapper}>
			<div>
				<section>
					<h1>
						RadWEB — <br /> pasjonaci internetu
					</h1>
					<p>
						Witaj w serwisie RadWEB. Jesteśmy zgranym zespołem, który żyje
						swoimi pasjami, co bezapelacyjnie stawia nas jako specjalistów w
						tym, co robimy. Specjalizujemy się w m.in. stronach internetowych,
						SEO, sem, tworzeniu treści oraz videomakingu. Przekonaj się, że
						warto nam zaufać!
					</p>
					<ul>
						<RegularButton title="blog" variant="primary" path="/blog" />
						<RegularButton title="kontakt" variant="primary" path="/kontakt" />
					</ul>
				</section>
			</div>
			<ul className={styles.cards}>
				<div>
					<ServiceCard
						image="https://images.unsplash.com/photo-1622782914767-404fb9ab3f57?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
						title="Strony internetowe"
						variant="homepage-card"
						content="Dolor quo consequatur odit ut reiciendis nisi soluta. Cum
						voluptates et. Molestias et corrupti consectetur dolor
						tempora natus dolorem. Maxime officia quia dolorem occaecati
						est vero voluptas excepturi et. Dolorem quaerat est
						consequuntur sit."
					/>
					<ServiceCard
						image="https://images.unsplash.com/photo-1633632799503-c8cff57c17f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
						title="Marketing"
						variant="homepage-card"
						content="Dolor quo consequatur odit ut reiciendis nisi soluta. Cum
						voluptates et. Molestias et corrupti consectetur dolor
						tempora natus dolorem. Maxime officia quia dolorem occaecati
						est vero voluptas excepturi et. Dolorem quaerat est
						consequuntur sit."
					/>
					<ServiceCard
						image="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8d2Vic2l0ZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=80"
						title="Copywriting"
						variant="homepage-card"
						content="Dolor quo consequatur odit ut reiciendis nisi soluta. Cum
						voluptates et. Molestias et corrupti consectetur dolor
						tempora natus dolorem. Maxime officia quia dolorem occaecati
						est vero voluptas excepturi et. Dolorem quaerat est
						consequuntur sit."
					/>
					<ServiceCard
						image="https://images.unsplash.com/photo-1542204165-65bf26472b9b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
						title="Wideomaking"
						variant="homepage-card"
						content="Dolor quo consequatur odit ut reiciendis nisi soluta. Cum
						voluptates et. Molestias et corrupti consectetur dolor
						tempora natus dolorem. Maxime officia quia dolorem occaecati
						est vero voluptas excepturi et. Dolorem quaerat est
						consequuntur sit."
					/>
				</div>
			</ul>
		</section>
	);
};
export default Hero;
