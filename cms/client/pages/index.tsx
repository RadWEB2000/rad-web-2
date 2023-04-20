import connection from "./../src/lib/db/connection";
import { AiOutlineLock } from "react-icons/ai";
import { iUser } from "@default/src/ts/interface";
import { LoginField } from "@default/src/components/Utilities/Fields/LoginField/LoginField";
import { LoginPage } from "@default/src/components/Page/LoginPage/LoginPage";
import { RegularButton } from "@default/src/components/Utilities/Buttons/RegularButton/RegularButton";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";

interface FieldValues {
	login: string;
	password: string;
}

interface iPage {
	accounts: any;
}

const Page = ({ accounts }: iPage) => {
	const router = useRouter();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FieldValues>();
	const onSubmit = (data: FieldValues) => {
		const { login, password } = data;
		const user = JSON.parse(accounts).find(
			(user: iUser) => user.username === login
		);
		if (user && user.password === password) {
			console.log("correct login");
			router.push("/dashboard");
		} else {
			console.log("bad login");
		}
	};
	return (
		<div>
			<LoginPage>
				<form onSubmit={handleSubmit(onSubmit)}>
					<LoginField label="Login" name="login" register={register} />
					<LoginField
						label="Password"
						name="password"
						type="password"
						register={register}
					/>
					<RegularButton
						button="Submit"
						icon={<AiOutlineLock />}
						variant="button"
						type="submit"
						handle={() => {}}
					/>
				</form>
			</LoginPage>
		</div>
	);
};

export default Page;

export const getServerSideProps = async () => {
	return new Promise((resolve, reject) => {
		connection.query(`SELECT * FROM accounts`, (err: any, res) => {
			if (err) {
				reject(err);
			} else {
				resolve({
					props: {
						accounts: JSON.stringify(res),
					},
				});
			}
		});
	});
};
