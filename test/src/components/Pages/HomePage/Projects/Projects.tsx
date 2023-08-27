import RegularButton from "@default/components/Utils/Buttons/RegularButton/RegularButton";
import Card from "@default/components/Pages/HomePage/Projects/Card/Card";
import styles from "@default/components/Pages/HomePage/Projects/Projects.module.scss";

export default function Projects() {
	return (
		<article>
			<section className={styles.content}>
				<header>
					<h2>Projekty i realizacje</h2>
				</header>

				<RegularButton type="link" label="więcej" uri="/" />
			</section>
			<ul className={styles.cards}>
				<Card
					author={{
						fullname: "Radosław Adamczyk",
						image: {
							alt: "",
							src: "https://images.unsplash.com/photo-1593529467220-9d721ceb9a78?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=730&q=80",
							title: "",
						},
						uri: "/",
					}}
					categories={[
						{
							label: "strony internetowe",
							uri: "/",
						},
						{
							label: "seo",
							uri: "/",
						},
					]}
					excerpt={`Enim nisi maiores aut voluptatem unde illo quaerat aut quia. Unde dolores nemo officiis tenetur. Architecto qui dolorem. Voluptatem assumenda perferendis laborum consequatur voluptatum. Accusantium et inventore sapiente est reiciendis nam. Iure culpa soluta. Suscipit similique velit voluptas sit qui. Expedita totam explicabo dolor ratione voluptatum aut. Dolorum quod eaque et.`}
					image={{
						alt: "",
						src: "https://images.unsplash.com/photo-1688646568135-00e6062ff0b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
						title: "",
					}}
					link={{
						label: "czytaj",
						uri: "/",
					}}
					title="RadWEB Filmbase"
				/>
				<Card
					author={{
						fullname: "Radosław Adamczyk",
						image: {
							alt: "",
							src: "https://images.unsplash.com/photo-1593529467220-9d721ceb9a78?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=730&q=80",
							title: "",
						},
						uri: "/",
					}}
					categories={[
						{
							label: "strona internetowa",
							uri: "/",
						},
						{
							label: "seo",
							uri: "/",
						},
					]}
					excerpt={`Enim nisi maiores aut voluptatem unde illo quaerat aut quia. Unde dolores nemo officiis tenetur. Architecto qui dolorem. Voluptatem assumenda perferendis laborum consequatur voluptatum. Accusantium et inventore sapiente est reiciendis nam. Iure culpa soluta. Suscipit similique velit voluptas sit qui. Expedita totam explicabo dolor ratione voluptatum aut. Dolorum quod eaque et.`}
					image={{
						alt: "",
						src: "https://images.unsplash.com/photo-1688646533342-5db697c01a4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
						title: "",
					}}
					link={{
						label: "czytaj",
						uri: "/",
					}}
					title="Filip Bukowiecki"
				/>
				<Card
					author={{
						fullname: "Radosław Adamczyk",
						image: {
							alt: "",
							src: "https://images.unsplash.com/photo-1593529467220-9d721ceb9a78?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=730&q=80",
							title: "",
						},
						uri: "/",
					}}
					categories={[
						{
							label: "strona internetowa",
							uri: "/",
						},
						{
							label: "seo",
							uri: "/",
						},
					]}
					excerpt={`Enim nisi maiores aut voluptatem unde illo quaerat aut quia. Unde dolores nemo officiis tenetur. Architecto qui dolorem. Voluptatem assumenda perferendis laborum consequatur voluptatum. Accusantium et inventore sapiente est reiciendis nam. Iure culpa soluta. Suscipit similique velit voluptas sit qui. Expedita totam explicabo dolor ratione voluptatum aut. Dolorum quod eaque et.`}
					image={{
						alt: "",
						src: "https://images.unsplash.com/photo-1688646583123-16844c80e78a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
						title: "",
					}}
					link={{
						label: "czytaj",
						uri: "/",
					}}
					title="GdzieJutro"
				/>
				<Card
					author={{
						fullname: "Radosław Adamczyk",
						image: {
							alt: "",
							src: "https://images.unsplash.com/photo-1593529467220-9d721ceb9a78?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=730&q=80",
							title: "",
						},
						uri: "/",
					}}
					categories={[
						{
							label: "ads",
							uri: "/",
						},
						{
							label: "seo",
							uri: "/",
						},
					]}
					excerpt={`Enim nisi maiores aut voluptatem unde illo quaerat aut quia. Unde dolores nemo officiis tenetur. Architecto qui dolorem. Voluptatem assumenda perferendis laborum consequatur voluptatum. Accusantium et inventore sapiente est reiciendis nam. Iure culpa soluta. Suscipit similique velit voluptas sit qui. Expedita totam explicabo dolor ratione voluptatum aut. Dolorum quod eaque et.`}
					image={{
						alt: "",
						src: "https://images.unsplash.com/photo-1685478237837-0cdaeabd5285?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
						title: "",
					}}
					link={{
						label: "czytaj",
						uri: "/",
					}}
					title="MistCont"
				/>
			</ul>
		</article>
	);
}
