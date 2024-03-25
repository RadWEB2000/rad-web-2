import PrimaryBlogCard from 'blogCards/PrimaryBlogCard';
import PrimaryButton from 'buttons/PrimaryButton';
import { tBlog } from 'v/home/Blog/Blog.models';
import css from 'v/home/Blog/Blog.module.scss';

export default function Blog({ button, content, posts, title }: tBlog) {
	return (
		<div className={css.wrapper}>
			<section className={css.container}>
				<h2
					className={css.title}
					dangerouslySetInnerHTML={{ __html: title }}
				/>
				<PrimaryButton
					{...button}
					mode="black"
					rel="index follow"
				/>
				<p
					className={css.content}
					dangerouslySetInnerHTML={{ __html: content.base }}
				/>
			</section>
			<ul className={css.cards}>
				{posts.map((item, index) => {
					return (
						<PrimaryBlogCard
							{...item}
							key={index}
						/>
					);
				})}
			</ul>
			{content.additional && (
				<section className={css.container}>
					<p
						className={css.content}
						dangerouslySetInnerHTML={{ __html: content.additional }}
					/>
				</section>
			)}
		</div>
	);
}
