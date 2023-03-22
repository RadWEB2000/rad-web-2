import { ReactElement } from "react";
interface iBrand {
	title: string;
}

const Brand = ({ title }: iBrand): ReactElement => {
	return (
		<div>
			<h1>{title}</h1>
		</div>
	);
};

export default Brand;
