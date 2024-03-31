import {
	PrimaryBlogCard,
	PrimaryProjectCard,
	SecondaryBlogCard,
	SecondaryProjectCard,
} from 'cards/index';

export default function HomePage() {
	return (
		<>
			<>
				<h1>HomePage</h1>
				<PrimaryBlogCard />
				<PrimaryProjectCard side="left" />
				<SecondaryProjectCard />
				<SecondaryBlogCard />
			</>
		</>
	);
}
