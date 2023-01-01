import { posts } from "../../../../data/posts";
import { BlogCard } from "../../../Utilities/Cards/BlogCard/BlogCard";
import { ExcerptSectionContent } from "../../../Utilities/Contents/Page/ExcerptSectionContent";
import { IntBlog } from "./interface";
import Slider from "react-slick";
import { Wrapper } from "./style";
import BlogCardHome from "./../../../Utilities/Cards/BlogCard/BlogCardHome/BlogCardHome";
import { useRef } from "react";
export const Blog = ({ button, content, endContent, path, title }: IntBlog) => {
	const { articles } = posts;
	const sliderRef = useRef(null);
	const settings = {
		arrows: true,
		dots: true,
		infinite: true,
		speed: 1500,
		slideToShow: 2,
		slidesToScroll: 1,
	};
	return (
		<Wrapper className="section">
			<ExcerptSectionContent
				button={button}
				content={content}
				endContent={endContent}
				path={path}
				title={title}
			/>

			<div className="cards">
				<ul className="main">
					{articles.slice(0, 1).map(({ content, date, image, path, title }) => (
						<BlogCardHome
							isMain
							excerpt={content}
							image={image}
							key={title}
							path={path}
							time={date}
							title={title}
						/>
					))}
				</ul>
				<ul className="secondary">
					{articles.slice(1, 5).map(({ content, date, image, path, title }) => (
						<BlogCardHome
							excerpt={content}
							image={image}
							key={title}
							path={path}
							time={date}
							title={title}
						/>
					))}
				</ul>
			</div>
		</Wrapper>
	);
};
