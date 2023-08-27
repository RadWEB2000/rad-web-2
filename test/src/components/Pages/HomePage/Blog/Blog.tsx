import Card from "@default/components/Pages/HomePage/Blog/Card/Card";
import styles from "@default/components/Pages/HomePage/Blog/Blog.module.scss";
import RegularButton from "@default/components/Utils/Buttons/RegularButton/RegularButton";

const cards = [
	{
		author: {
			fullname: "Radosław Adamczyk",
			image: {
				alt: "",
				src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
				title: "",
			},
			uri: "/",
		},
		image: {
			alt: "",
			src: "https://images.unsplash.com/photo-1682685797507-d44d838b0ac7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
			title: "",
		},
		excerpt:
			"Harum aut perferendis. Aliquid delectus non error sunt illum dolorem. Ex ad sit. Aut animi rerum velit voluptatum sed hic rem. Iusto sint aut animi consectetur quam ea. Perferendis officia soluta adipisci numquam et aliquid voluptatibus ducimus.",
		label: "więcej",
		release:
			"Sat Jan 06 2024 12:19:23 GMT+0100 (Central European Standard Time)",
		title: "Jak nauczyć się Reacta - dokumentacje React",
		uri: "/",
	},
	{
		author: {
			fullname: "Radosław Adamczyk",
			image: {
				alt: "",
				src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
				title: "",
			},
			uri: "/",
		},
		image: {
			alt: "",
			src: "https://images.unsplash.com/photo-1682685797507-d44d838b0ac7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
			title: "",
		},
		excerpt:
			"Harum aut perferendis. Aliquid delectus non error sunt illum dolorem. Ex ad sit. Aut animi rerum velit voluptatum sed hic rem. Iusto sint aut animi consectetur quam ea. Perferendis officia soluta adipisci numquam et aliquid voluptatibus ducimus.",
		label: "więcej",
		release:
			"Sat Jan 06 2024 12:19:23 GMT+0100 (Central European Standard Time)",
		title: "Jak nauczyć się Reacta - dokumentacje React",
		uri: "/",
	},
	{
		author: {
			fullname: "Radosław Adamczyk",
			image: {
				alt: "",
				src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
				title: "",
			},
			uri: "/",
		},
		image: {
			alt: "",
			src: "https://images.unsplash.com/photo-1689267305146-155a1459752c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1228&q=80",
			title: "",
		},
		excerpt:
			"Harum aut perferendis. Aliquid delectus non error sunt illum dolorem. Ex ad sit. Aut animi rerum velit voluptatum sed hic rem. Iusto sint aut animi consectetur quam ea. Perferendis officia soluta adipisci numquam et aliquid voluptatibus ducimus.",
		label: "więcej",
		release:
			"Sat Jan 06 2024 12:19:23 GMT+0100 (Central European Standard Time)",
		title: "Jak nauczyć się Reacta - dokumentacje React",
		uri: "/",
	},
	{
		author: {
			fullname: "Radosław Adamczyk",
			image: {
				alt: "",
				src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
				title: "",
			},
			uri: "/",
		},
		image: {
			alt: "",
			src: "https://images.unsplash.com/photo-1689005047173-b43ff68072ed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
			title: "",
		},
		excerpt:
			"Harum aut perferendis. Aliquid delectus non error sunt illum dolorem. Ex ad sit. Aut animi rerum velit voluptatum sed hic rem. Iusto sint aut animi consectetur quam ea. Perferendis officia soluta adipisci numquam et aliquid voluptatibus ducimus.",
		label: "więcej",
		release:
			"Sat Jan 06 2024 12:19:23 GMT+0100 (Central European Standard Time)",
		title: "Jak nauczyć się Reacta - dokumentacje React",
		uri: "/",
	},
	{
		author: {
			fullname: "Radosław Adamczyk",
			image: {
				alt: "",
				src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
				title: "",
			},
			uri: "/",
		},
		image: {
			alt: "",
			src: "https://images.unsplash.com/photo-1689350753082-0caac4c6d554?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
			title: "",
		},
		excerpt:
			"Harum aut perferendis. Aliquid delectus non error sunt illum dolorem. Ex ad sit. Aut animi rerum velit voluptatum sed hic rem. Iusto sint aut animi consectetur quam ea. Perferendis officia soluta adipisci numquam et aliquid voluptatibus ducimus.",
		label: "więcej",
		release:
			"Sat Jan 06 2024 12:19:23 GMT+0100 (Central European Standard Time)",
		title: "Jak nauczyć się Reacta - dokumentacje React",
		uri: "/",
	},
	{
		author: {
			fullname: "Radosław Adamczyk",
			image: {
				alt: "",
				src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
				title: "",
			},
			uri: "/",
		},
		image: {
			alt: "",
			src: "https://images.unsplash.com/photo-1682685797507-d44d838b0ac7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
			title: "",
		},
		excerpt:
			"Harum aut perferendis. Aliquid delectus non error sunt illum dolorem. Ex ad sit. Aut animi rerum velit voluptatum sed hic rem. Iusto sint aut animi consectetur quam ea. Perferendis officia soluta adipisci numquam et aliquid voluptatibus ducimus.",
		label: "więcej",
		release:
			"Sat Jan 06 2024 12:19:23 GMT+0100 (Central European Standard Time)",
		title: "Jak nauczyć się Reacta - dokumentacje React",
		uri: "/",
	},
	{
		author: {
			fullname: "Radosław Adamczyk",
			image: {
				alt: "",
				src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
				title: "",
			},
			uri: "/",
		},
		image: {
			alt: "",
			src: "https://images.unsplash.com/photo-1682685797507-d44d838b0ac7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
			title: "",
		},
		excerpt:
			"Harum aut perferendis. Aliquid delectus non error sunt illum dolorem. Ex ad sit. Aut animi rerum velit voluptatum sed hic rem. Iusto sint aut animi consectetur quam ea. Perferendis officia soluta adipisci numquam et aliquid voluptatibus ducimus.",
		label: "więcej",
		release:
			"Sat Jan 06 2024 12:19:23 GMT+0100 (Central European Standard Time)",
		title: "Jak nauczyć się Reacta - dokumentacje React",
		uri: "/",
	},
];

export default function Blog() {
	return (
		<div className={styles.wrapper}>
			<article className={styles.content}>
				<section>
					<header>
						<h2>Blog</h2>
					</header>
					<p>
						Veritatis sit et non. Velit neque rerum inventore. Natus eos quos
						at. Adipisci corrupti mollitia optio odio quibusdam et. Cupiditate
						qui aliquam.Voluptatum id ratione nihil dolorum quod odit
						repellendus ut repellat. Earum molestias aut. Assumenda perspiciatis
						omnis est nam pariatur dolores qui recusandae.Quis fugit at
						reiciendis quaerat quo. Facilis quia ex. Et eum ullam quia iste rem.
						Quidem delectus maiores adipisci.
					</p>
					<RegularButton type="link" label="więcej" uri="/blog" />
				</section>
				<div className={styles.cards}>
					<ul>
						{cards
							.slice(0, 5)
							.map(({ author, excerpt, image, label, release, title, uri }) => {
								return (
									<Card
										author={author}
										excerpt={excerpt}
										image={image}
										key={title}
										label={label}
										release={release}
										title={title}
										uri={uri}
									/>
								);
							})}
					</ul>
				</div>
			</article>
		</div>
	);
}
