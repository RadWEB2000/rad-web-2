import { ButtonLoginSocial } from "@default/src/components/Utilities/Buttons/ButtonLoginSocial/ButtonLoginSocial";
import { Editor } from "@default/src/components/Utilities/Editor/Editor";
import { loginSocial } from "@default/src/data/loginSocial";

const Page = () => {
	return (
		<div>
			{loginSocial.map(({ color, icon, name }) => (
				<ButtonLoginSocial color={color} key={name} icon={icon} name={name} />
			))}
			<Editor />
		</div>
	);
};

export default Page;
