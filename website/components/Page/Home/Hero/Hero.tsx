import Image from "next/image";
import { LogoNoBg } from "../../../../assets/brand/logo-no-background";
import { ButtonPrimary } from "../../../Utilities/Buttons/ButtonPrimary/ButtonPrimary";
import { Wrapper } from "./style";
import { ReactElement } from "react";
import { IntHero } from "./interface";
export const Hero = ({ buttons, content, title }: IntHero): ReactElement => {
	return (
		<Wrapper>
			<div className="content">
				<section>
					<h1>{title}</h1>
					<p dangerouslySetInnerHTML={{ __html: content }} />
				</section>
				<ul>
					{buttons?.map(({ path, title }) => (
						<ButtonPrimary
							key={`${path} - ${title}`}
							path={path}
							title={title}
						/>
					))}
				</ul>
			</div>
			<div className="movie">
				<LogoNoBg />
			</div>
		</Wrapper>
	);
};
