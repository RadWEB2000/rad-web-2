import { LoginPage } from "@default/src/components/Page/LoginPage/LoginPage";
import { ButtonLoginSocial } from "@default/src/components/Utilities/Buttons/ButtonLoginSocial/ButtonLoginSocial";
import { RegularButton } from "@default/src/components/Utilities/Buttons/RegularButton/RegularButton";
import { LoginField } from "@default/src/components/Utilities/Fields/LoginField/LoginField";
import { loginSocial } from "@default/src/data/loginSocial";
import { iAccountsTable } from "@default/src/ts/interface";
import { Formik } from "formik";
import { AiOutlineLock } from "react-icons/ai";
import connection from "./../src/lib/db/connection";

interface iPage {
	accounts: iAccountsTable[] | string | any;
}

const Page = ({ accounts }: iPage) => {
	// console.log(JSON.parse(accounts));
	return (
		<div>
			<LoginPage>
				<Formik
					initialValues={{
						login: "",
						password: "",
					}}
					validate={(e) => {
						console.log(e);
					}}
					onSubmit={() => {}}
				>
					<form>
						<LoginField
							id="login"
							label="Login"
							name="login"
							placeholder="login"
							type="text"
							required
						/>
						<LoginField
							id="password"
							label="Password"
							name="password"
							placeholder="password"
							type="password"
							required
						/>
						<RegularButton
							button="Zaloguj się"
							icon={<AiOutlineLock />}
							variant="button"
							handle={(e) => {
								e.preventDefault();
							}}
						/>
					</form>
				</Formik>
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
