import RegularButton from "@default/components/Utils/Buttons/RegularButton/RegularButton";
import { iImage } from "@default/ts/interfaces";
import styles from "@default/components/Pages/HomePage/Team/Team.module.scss";
import Image from "next/image";
import tileBackground from "@default/assets/tile-background.png";
import Card from "@default/components/Pages/HomePage/Team/Card/Card";
import radoslawAdamczyk from "@default/assets/radoslaw-adamczyk.png";
interface iTeam extends iImage {
	title: string;
	content: string;
	label: string;
	uri: string;
}

export default function Team() {
	return (
		<div className={styles.wrapper}>
			<article className={styles.box}>
				<div className={styles.image}>
					<figure>
						<Image
							alt=""
							fill
							src="https://images.unsplash.com/photo-1521702335365-b6c01d1198dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
							style={{
								objectFit: "cover",
								objectPosition: "center",
							}}
							quality={90}
						/>
					</figure>
				</div>

				<section className={styles.content}>
					<div className={styles.background}>
						<Image
							fill
							style={{ objectFit: "contain" }}
							src={tileBackground}
							alt=""
						/>
					</div>
					<header>
						<h2>Poznaj nas!</h2>
					</header>
					<p>
						Eos fuga ducimus est natus eum. Ex voluptas ad dolorem fugiat aut
						eos architecto. Quos inventore nihil culpa quos facere aut enim ad
						optio. Asperiores et doloremque commodi vero et rerum. Perspiciatis
						velit aliquam reiciendis quod quia hic adipisci autem. Minus saepe
						voluptas laudantium sint omnis id voluptas. Earum adipisci sit
						corrupti quo modi quis cumque. Quo voluptas vitae reiciendis aliquid
						officiis sed veritatis. Aperiam omnis quis dicta ullam magni
						asperiores. Libero corporis animi sit. Eligendi dolorem eius quo
						placeat dolorem fugiat. Incidunt et eaque autem aut reprehenderit
						dignissimos. Qui aliquam explicabo.
					</p>
					<RegularButton type="link" label="więcej" uri="/" />
				</section>
			</article>
			<ul className={styles.cards}>
				<Card
					cities={["Śrem", "Poznań", "Kościan", "Wrocław"]}
					excerpt={`Iusto voluptates possimus quod saepe unde. At est impedit mollitia itaque sint officia. Laboriosam aspernatur necessitatibus harum. Repellat aut reiciendis enim rerum iure reprehenderit enim. Ut molestiae rem aut ipsa dolorem temporibus vitae omnis. Rerum aliquid nostrum quae perspiciatis sint est. Rerum earum praesentium rem consectetur maxime.`}
					fullname="Radosław Adamczyk"
					image={{
						alt: "",
						src: radoslawAdamczyk,
						title: "",
					}}
					jobs={["Specjalista SEO/SEM", "Web developer", "Frontend developer"]}
					uri="/"
				/>
				<Card
					cities={["Poznań", "Wrocław", "Warszawa"]}
					excerpt={`Iusto voluptates possimus quod saepe unde. At est impedit mollitia itaque sint officia. Laboriosam aspernatur necessitatibus harum. Repellat aut reiciendis enim rerum iure reprehenderit enim. Ut molestiae rem aut ipsa dolorem temporibus vitae omnis. Rerum aliquid nostrum quae perspiciatis sint est. Rerum earum praesentium rem consectetur maxime.`}
					fullname="Filip Bukowiecki"
					image={{
						alt: "",
						src: "https://images.unsplash.com/photo-1690148720894-4df83cd4f4ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80",
						title: "",
					}}
					jobs={["Operator kamery", "Montażysta"]}
					uri="/"
				/>
				<Card
					cities={["Biała Podlaska", "Łódź", "Warszawa", "Bydgoszcz"]}
					excerpt={`Iusto voluptates possimus quod saepe unde. At est impedit mollitia itaque sint officia. Laboriosam aspernatur necessitatibus harum. Repellat aut reiciendis enim rerum iure reprehenderit enim. Ut molestiae rem aut ipsa dolorem temporibus vitae omnis. Rerum aliquid nostrum quae perspiciatis sint est. Rerum earum praesentium rem consectetur maxime.`}
					fullname="Klaudia Paluch"
					image={{
						alt: "",
						src: "https://images.unsplash.com/photo-1597588405595-982407b950d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=765&q=80",
						title: "",
					}}
					jobs={["Copywriting", "UI/UX Design"]}
					uri="/"
				/>
			</ul>
		</div>
	);
}
